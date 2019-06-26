import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrackVisibility from 'react-on-screen';
import styles from './index.module.scss';

class Image extends Component {
  render() {
    if (this.props.image === undefined) { return null; }

    return (
      <TrackVisibility once partialVisibility offset={30}>
        {({ isVisible }) => {
          if (isVisible) {
            return <ResponsiveImageComponent {...this.props}/>
          }
          return null;
        }}
      </TrackVisibility>
    );
  };
}

class ResponsiveImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: this.props.defaultWidth,
      height: null,
      loaded: false,
      fit: 'thumb'
    }

    this.calculateSize = this.calculateSize.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  componentDidMount() {
    this.calculateSize();
    window.addEventListener("resize", this.calculateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateSize);
  }

  calculateSize() {
    const { stateHeight, stateWidth } = this.state;
    let height = Math.round(this.wrapper.getBoundingClientRect().height);
    let width = Math.round(this.wrapper.getBoundingClientRect().width);

    if (width > 2000) {
      const ratio = 2000 / width;
      width = 2000;
      height = parseInt(height * ratio, 10);
    }

    if (stateHeight !== height || stateWidth !== width) {
      this.setState({ height, width });
    }
  }

  onImageLoad() {
    this.setState({ loaded: true });
  }

  render() {
    const { image, showCaption } = this.props;
    const url = image.file.url;
    const details = image.file.details.image;
    const { height, width, loaded, fit } = this.state;
    const ratio = this.props.ratio ? this.props.ratio : (details.height / details.width * 100);

    const imgUrl = url + '?w=' + width + '&h=' + height + '&fit=' + fit + '&q=90';
    const imgUrl2x = url + '?w=' + (width*2) + '&h=' + (height*2) + '&fit=' + fit + '&q=70 2x';
    const imgUrl3x = url + '?w=' + (width*3) + '&h=' + (height*3) + '&fit=' + fit + '&q=50 3x';

    return (
      <figure key={image.contentfulId} className={styles.figure}>
        <div ref={(ref) => this.wrapper = ref} className={styles.wrapper} style={{ paddingTop: parseFloat(ratio).toFixed(2) + '%'}}>
          {((width !== null && height !== null) &&
            <img className={styles.image} src={imgUrl} srcSet={`${imgUrl}, ${imgUrl2x}, ${imgUrl3x}`} alt={image.description} title={image.title} onLoad={this.onImageLoad} data-loaded={loaded}/>
          )}
        </div>
        {((showCaption && image.title) &&
          <figcaption>{image.title}</figcaption>
        )}
      </figure>
    );
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
  defaultWidth: PropTypes.number,
  ratio: PropTypes.number,
  showCaption: PropTypes.bool
}

Image.defaultProps = {
  defaultWidth: 500
}

export default Image;
