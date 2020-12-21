import React from "react";
import PropTypes from "prop-types";

import ContextProvider from '../../provider/ContextProvider';

import CartIndicator from '../cart/indicator';
import Header from "../header";
import Footer from "../footer";
import styles from './index.module.scss';

const Layout = ({ children }) => (
  <ContextProvider>
    <Header/>
    <CartIndicator/>
    <main className={styles.main}>{children}</main>
    <Footer/>
  </ContextProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
