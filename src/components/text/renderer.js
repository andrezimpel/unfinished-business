import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

import styles from './renderer.module.scss';

class TextRenderer extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.text}>
        <ReactMarkdown source={text} plugins={[breaks]}/>
      </div>
    );
  }
}

TextRenderer.propTypes = {
  text: PropTypes.string.isRequired
}

TextRenderer.defaultProps = {
  text: ``
}

export default TextRenderer;
