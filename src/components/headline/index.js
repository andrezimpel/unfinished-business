import React from "react";

import styles from './index.module.scss';

const Headline = ({ children }) => (
  <h2 className={styles.headline}>{children}</h2>
);

export default Headline;
