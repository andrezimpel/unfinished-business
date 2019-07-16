import React from "react";
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";
import styles from './index.module.scss';

const Layout = ({ children }) => (
  <>
    <Header/>
    <main className={styles.main}>{children}</main>
    <Footer/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
