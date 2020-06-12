import React from 'react';

import Layout from '../components/layout';
import Partner from '../components/partner';
import Seo from '../components/seo';
import Statement from '../components/statement';
import Video from '../components/video';

const Home = () => (
  <Layout>
    <Seo
      title={'Home'}
    />
    <Video/>
    <Statement/>
    <Partner/>
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
