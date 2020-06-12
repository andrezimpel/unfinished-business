import React from 'react';

import Layout from '../components/layout';
import Partner from '../components/partner';
import Seo from '../components/seo';
import Statement from '../components/statement';
import Video from '../components/video';

import sharingImage from '../images/sharing-image.jpg';

const Home = () => (
  <Layout>
    <Seo
      title={'Home'}
      sharingTitle={'Home'}
      sharingDescription={'Der Weg der NINERS in die BBL'}
      sharingImage={sharingImage}
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
