import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import styles from './index.module.scss';

class Footer extends React.Component {
  render() {
    const { copyright } = this.props;

    return (
      <footer className={styles.footer}>
        footer
      </footer>
    )
  }
}

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer;
