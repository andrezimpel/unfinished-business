import React from "react";

import styles from './index.module.scss';

const Button = ({ onClick, children, type="submit", disabled=false, style="primary" }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled} data-type={style}>{children}</button>
  )
};

export default Button;
