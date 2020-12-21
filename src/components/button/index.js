import React from "react";

import styles from './index.module.scss';

const Button = ({ onClick, children, type="submit", disabled=false }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>{children}</button>
  )
};

export default Button;
