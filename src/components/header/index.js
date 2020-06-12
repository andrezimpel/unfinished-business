import React from "react";

import styles from './index.module.scss';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <span>Unfinished Business</span>
        <img src={logo} alt="Logo Unfinished Business" title='Unfinished Business'/>
      </h1>
    </header>
  )
};

export default Header;
