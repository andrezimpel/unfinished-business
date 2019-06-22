import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';
import styles from './index.module.scss';

class Image extends Component {
  render() {
    if (this.props.image === undefined) { return null; }

    return (
      <TrackVisibility once partialVisibility offset={400}>
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
      height: null
    }

    this.calculateSize = this.calculateSize.bind(this);
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
    const height = Math.round(this.wrapper.getBoundingClientRect().height);
    const width = Math.round(this.wrapper.getBoundingClientRect().width);

    if (stateHeight !== height || stateWidth !== width) {
      this.setState({ height, width });
    }
  }

  render() {
    const { image, showCaption } = this.props;
    const url = image.file.url;
    const details = image.file.details.image;
    const { height, width } = this.state;
    const ratio = this.props.ratio ? this.props.ratio : (details.height / details.width * 100);

    const imgUrl = url + '?w=' + width + '&h=' + height + '&fit=thumb';
    const imgUrl2x = url + '?w=' + (width*2) + '&h=' + (height*2) + '&fit=thumb 2x';
    const imgUrl3x = url + '?w=' + (width*3) + '&h=' + (height*3) + '&fit=thumb 3x';

    return (
      <figure key={image.contentful_id} className={styles.figure}>
        <div ref={(ref) => this.wrapper = ref} className={styles.wrapper} style={{ paddingTop: parseFloat(ratio).toFixed(2) + '%'}}>
          {((width && height) &&
            <img className={styles.image} src={imgUrl} srcSet={imgUrl2x + ',' + imgUrl3x} alt={image.description} title={image.title}/>
          )}
        </div>
        {((showCaption && image.description) &&
          <figcaption>{image.description}</figcaption>
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
  defaultWidth: 500,
  showCaption: false
}

export default Image;
