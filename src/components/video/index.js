import React from "react";

import Container from '../container';

import styles from './index.module.scss';

const Video = () => {
  return (
    <div className={styles.video}>
      <Container>
        <div className={styles.wrapper}>
          <iframe title='Vimeo Video' src="https://player.vimeo.com/video/428013523" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </Container>
    </div>
  )
};

export default Video;
