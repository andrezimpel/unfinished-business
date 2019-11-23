import React from "react";
import { graphql } from 'gatsby';

import Layout from '../../components/layout/index';
import SectionsRenderer from '../../components/sections/renderer';
import Seo from '../../components/seo';
import { pathTo } from '../../routes';
import styles from './index.module.scss';

const Page = ({ data: { page: {
  title='Please add Title',
  slug,
  sections=[],
  metaTitle='',
  metaDescription,
  metaKeywords=[],
  sharingTitle='',
  sharingDescription,
  sharingImage
}}}) => {
  return (
    <>
      <Seo
        title={title}
        metaTitle={metaTitle}
        metaDescription={metaDescription && metaDescription.metaDescription}
        sharingTitle={sharingTitle}
        sharingDescription={sharingDescription && sharingDescription.sharingDescription}
        sharingImage={sharingImage && sharingImage.file && sharingImage.file.url}
        currentUrl={pathTo({ __typename: 'ContentfulPage', slug: slug })}
        keywords={metaKeywords}
      />
      <Layout>
        <h1>{title}</h1>
        <div className={styles.sections}>
          <SectionsRenderer sections={sections}/>
        </div>
      </Layout>
    </>
  )
}

export default Page;

export const query = graphql`
  query PageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id}) {
      title
      slug
      metaTitle
      metaDescription {
        metaDescription
      }
      sharingTitle
      sharingDescription {
        sharingDescription
      }
      sharingImage {
        ...Image
      }
      keywords
      sections {
        __typename
      }
    }
  }
`;
