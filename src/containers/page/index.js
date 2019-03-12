import React from "react";

import Layout from '../components/layout/index';
import SectionsRenderer from '../components/sections/renderer';
import SEO from '../components/seo';
import { pathTo } from '../../routes';
import styles from './index.module.scss';

class Page extends React.Component {
  render() {
    const { title, metaTitle, metaDescription, sharingTitle, sharingDescription, sharingImage, currentUrl, keywords, sections } = this.props.pageContext;

    return (
      <Layout>
        <Seo
          title={page.title}
          metaTitle={page.metaTitle}
          metaDescription={page.metaDescription}
          sharingTitle={page.sharingTitle}
          sharingDescription={page.sharingDescription}
          sharingImage={page.sharingImage}
          currentUrl={pathTo(page)}
          keywords={page.keywords}
        />
        <div title={title} className={styles.sections}>
          <SectionsRenderer sections={sections}/>
        </div>
      </Layout>
    )
  }
}

// Page.propTypes = {
//   pageContext: {
//     title: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     sections: PropTypes.array.isRequired
//   }
// }

export default Page;
