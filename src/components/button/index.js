import React from "react";

import styles from './index.module.scss';

const Button = ({ onClick, children, type="submit", disabled=false, variant="primary" }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled} data-variant={variant}>{children}</button>
  )
};

export default Button;
