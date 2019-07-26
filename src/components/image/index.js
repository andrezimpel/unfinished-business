import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';

import styles from './index.module.scss';

class Image extends Component {
  render() {
    const { image, disableLazyLoad } = this.props;
    if (image === undefined) { return null; }

    if (disableLazyLoad) {
      return <ResponsiveImageComponent {...this.props}/>;
    }

    return (
      <TrackVisibility once partialVisibility offset={30}>
        {({ isVisible }) => {
          return isVisible ? <ResponsiveImageComponent {...this.props}/> : null;
        }}
      </TrackVisibility>
    );
  };
}

class ResponsiveImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
      height: null,
      loaded: false,
      fit: 'thumb',
      showLoadingIcon: false
    }

    this.onImageLoad = this.onImageLoad.bind(this);
    this.calculateBounds = this.calculateBounds.bind(this);
    this.triggerLoadingIcon = this.triggerLoadingIcon.bind(this);
  }


  componentDidMount() {
    this.calculateBounds();
    this.triggerLoadingIcon();

    window.addEventListener("resize", this.calculateBounds);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateBounds);
  }

  triggerLoadingIcon() {
    const that = this;
    setTimeout(function(){
      that.setState({ showLoadingIcon: true });
    }, 700);
  }

  onImageLoad() {
    this.setState({ loaded: true, showLoadingIcon: false });
  }

  calculateBounds() {
    const { image } = this.props;
    const wrapperWidth = Math.round(this.wrapper.getBoundingClientRect().width);
    const wrapperHeight = Math.round(this.wrapper.getBoundingClientRect().height);

    let width = wrapperWidth;
    let height = wrapperHeight;
    let ratio = this.props.ratio;

    if (ratio === undefined) {
      ratio = (image.file.details.image.height / image.file.details.image.width) * 100;
    }

    if (wrapperHeight === 0) {
      height = parseInt(wrapperWidth * (ratio / 100));
    }

    // check if the height or width is over 2000
    if (width > 2000) {
      width = 2000;
      height = parseInt(width * (ratio / 100));
    }

    // update ratio to have just two decimals
    ratio = parseFloat(ratio).toFixed(2);

    this.setState({ width, height, ratio });
  }

  imgUrl(path, width, height, fit, quality) {
    return `${path}?w=${width}&h=${height}&fit=${fit}&q=${quality}`;
  }

  render() {
    const { image, showCaption } = this.props;
    const { width, height, ratio, fit, loaded, showLoadingIcon } = this.state;

    if (width === null || height === null) {
      return (
        <div ref={(ref) => this.wrapper = ref} style={{ paddingTop: ratio + '%'}}/>
      )
    }

    const imgUrl = this.imgUrl(image.file.url, width, height, fit, '90');
    const imgUrl2x = this.imgUrl(image.file.url, (width*2), (height*2), fit, '70');
    const imgUrl3x = this.imgUrl(image.file.url, (width*3), (height*3), fit, '50');;

    return (
      <figure key={image.contentfulId} className={styles.figure}>
        <div ref={(ref) => this.wrapper = ref} className={styles.wrapper} style={{ paddingTop: ratio + '%'}}>
          {( showLoadingIcon &&
            <div className={styles.loading}>
              <i className="fas fa-circle-notch fa-spin"></i>
            </div>
          )}
          <img className={styles.image} src={imgUrl} srcSet={`${imgUrl}, ${imgUrl2x} 2x, ${imgUrl3x} 3x`} alt={image.description} title={image.title} onLoad={this.onImageLoad} data-loaded={loaded}/>
        </div>
        {((showCaption && image.title) &&
          <figcaption>{image.title}</figcaption>
        )}
      </figure>
    )
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
  defaultWidth: PropTypes.number,
  ratio: PropTypes.number,
  showCaption: PropTypes.bool,
  disableLazyLoad: PropTypes.bool
}

Image.defaultProps = {
  defaultWidth: 500,
  disableLazyLoad: false
}

export default Image;
