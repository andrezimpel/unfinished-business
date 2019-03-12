import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import styles from './index.module.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        header
      </header>
    )
  }
}

Header.propTypes = {
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
