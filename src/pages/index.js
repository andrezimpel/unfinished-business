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
      sharingTitle={'Home'}
      sharingDescription={'missing'}
      metaTitle={'Unfinished Business Dokumentation'}
      metaDescription={'Unfinished Business, der Weg der NINERS Chemnitz in die Basketball Bundesliga'}
      keywords={['unfinished business', 'niners chemnitz', 'unfinishedbusiness', 'chemnitz', 'chemnitz basketball', 'video vision chemnitz', 'videovision', 'videovision chemnitz', 'unknownbasics', 'unknown basics', 'niners dokumentation']}
      currentUrl={'/'}
    />
    <Video/>
    <Statement/>
    <Partner/>
  </Layout>
)

export default Home;

// sharingImage={sharingImage && sharingImage.file && sharingImage.file.url}
