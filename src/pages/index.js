import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Home = () => (
  <Layout>
    <Seo
      title={'Home'}
    />
    <div>welcome</div>
  </Layout>
)

export default Home;


// metaTitle={metaTitle}
// metaDescription={metaDescription && metaDescription.metaDescription}
// sharingTitle={sharingTitle}
// sharingDescription={sharingDescription && sharingDescription.sharingDescription}
// sharingImage={sharingImage && sharingImage.file && sharingImage.file.url}
// currentUrl={pathTo({ __typename: 'ContentfulPage', slug: slug })}
// keywords={metaKeywords}

// <Layout>
//   <h1>{title}</h1>
//   <div className={styles.sections}>
//     <SectionsRenderer sections={sections}/>
//   </div>
// </Layout>
