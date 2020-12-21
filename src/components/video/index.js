import React, { useState } from "react";

import Container from '../container';

import styles from './index.module.scss';

const Video = () => {
  const [showTeaser, setShowTeaser] = useState(false);

  const teaser = (
    <iframe title='Vimeo Video' src="https://player.vimeo.com/video/428013523" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
  );

  const movie = (
    <iframe src="https://www.youtube-nocookie.com/embed/JZqdBwZCfo0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );

  const label = !showTeaser ? 'Trailer ansehen' : 'Film ansehen';
  const iframe = showTeaser ? teaser : movie;

  return (
    <div className={styles.video}>
      <Container>
        <div className={styles.wrapper}>
          {iframe}
        </div>
        <button className={styles.button} onClick={() => setShowTeaser(!showTeaser)}>{label}</button>
      </Container>
    </div>
  )
};

export default Video;
