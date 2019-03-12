import React from "react";
import PropTypes from 'prop-types';

import Layout from '../../components/layout/index';
import SectionsRenderer from '../../components/sections/renderer';
import Seo from '../../components/seo';
import { pathTo } from '../../routes';
import styles from './index.module.scss';

class Page extends React.Component {
  render() {
    const { title, metaTitle, metaDescription, sharingTitle, sharingDescription, sharingImage, metaKeywords, sections } = this.props.pageContext;

    return (
      <Layout>
        <Seo
          title={title}
          metaTitle={metaTitle}
          metaDescription={metaDescription.metaDescription}
          sharingTitle={sharingTitle}
          sharingDescription={sharingDescription.sharingDescription}
          sharingImage={sharingImage.file.url}
          currentUrl={pathTo(this.props.pageContext)}
          keywords={metaKeywords}
        />
        <div title={title} className={styles.sections}>
          <SectionsRenderer sections={sections}/>
        </div>
      </Layout>
    )
  }
}

Page.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string,
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.object,
    sharingTitle: PropTypes.string,
    sharingDescription: PropTypes.object,
    sharingImage: PropTypes.object,
    metaKeywords: PropTypes.array,
    sections: PropTypes.array,
  })
}

export default Page;
