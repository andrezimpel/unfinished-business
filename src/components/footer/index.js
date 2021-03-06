import React from "react";

import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span className={styles.copy}>&copy;</span> Copyright {(new Date()).getFullYear()} VideoVision
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="https://www.videovision-chemnitz.de/impressum/" rel="noreferrer" target="_blank">Impressum</a>
        <a className={styles.link} href="https://www.videovision-chemnitz.de/datenschutzerklaerung/" rel="noreferrer" target="_blank">Datenschutz</a>
      </div>
    </footer>
  )
};

export default Footer;
