import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../../components/layout/index';
import SectionsRenderer from '../../components/sections/renderer';
import Seo from '../../components/seo';
import { pathTo } from '../../routes';
import styles from './index.module.scss';

const Page = ({ data }) => (
  <Layout>

    <div title={title} className={styles.sections}>
      <SectionsRenderer sections={sections}/>
    </div>
  </Layout>
)

export default Page;

export const query = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id}) {
      title
      metaTitle
      metaDescription {
        metaDescription
      }
      sharingTitle
      sharingDescription {
        sharingDescription
      }
      sharingImage {
        id
      }
      metaKeywords: keywords
      sections {
        __typename
      }
    }
  }
`;


// <Seo
//   title={title}
//   metaTitle={metaTitle}
//   metaDescription={metaDescription && metaDescription.metaDescription}
//   sharingTitle={sharingTitle}
//   sharingDescription={sharingDescription && sharingDescription.sharingDescription}
//   sharingImage={sharingImage && sharingImage.file && sharingImage.file.url}
//   currentUrl={pathTo(this.props.pageContext)}
//   keywords={metaKeywords}
// />
