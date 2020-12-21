import React from "react";

import Container from '../container';

import styles from './index.module.scss';
import admedia from '../../assets/images/partner-logos/admedia.svg';
import cwag from '../../assets/images/partner-logos/cwag.svg';
import cwe from '../../assets/images/partner-logos/cwe.svg';
import cb from '../../assets/images/partner-logos/chemnitz-basketball.svg';
import eins from '../../assets/images/partner-logos/eins.svg';
import mytag from '../../assets/images/partner-logos/mytag.svg';
import niners from '../../assets/images/partner-logos/niners.svg';
import haase from '../../assets/images/partner-logos/sanitaer-haase.svg';
import unknownbasics from '../../assets/images/partner-logos/unknownbasics.svg';
import videovision from '../../assets/images/partner-logos/videovision.svg';

import sparkasse from '../../assets/images/partner-logos/sparkasse-chemnitz.svg';
import rentenBoster from '../../assets/images/partner-logos/renten-booster.svg';
import elektroVieweg from '../../assets/images/partner-logos/elektro-vieweg.svg';

import cefeg from '../../assets/images/partner-logos/cefeg.svg';
import fdtech from '../../assets/images/partner-logos/fdtech.svg';
import sgs from '../../assets/images/partner-logos/sgs.svg';

const primePartner = [
  {
    logo: niners,
    name: 'NINERS Chemnitz',
    link: 'https://www.chemnitz99.de/'
  },
  {
    logo: eins,
    name: 'EINS Energie in Sachsen',
    link: 'https://www.eins.de/'
  },
  {
    logo: sparkasse,
    name: 'Sparkasse Chemnitz',
    link: 'https://www.spk-chemnitz.de/'
  },
  {
    logo: videovision,
    name: 'VideoVision',
    link: 'https://www.videovision-chemnitz.de/'
  },
  {
    logo: sgs,
    name: 'So geht Sächsisch',
    link: 'https://www.so-geht-saechsisch.de'
  }
];

const partner = [
  {
    logo: admedia,
    name: 'ADMEDIA',
    link: 'https://www.admedia.de/'
  },
  {
    logo: unknownbasics,
    name: 'UNKNOWN BASICS',
    link: 'https://www.unknownbasics.com/'
  },
  {
    logo: cb,
    name: 'Chemnitz Basketball',
    link: 'https://www.chemnitzbasketball.com'
  },
  {
    logo: haase,
    name: 'Sanitär Haase',
    link: 'https://www.sanitaer-haase.de/'
  },
  {
    logo: mytag,
    name: 'mytag Gmbh',
    link: 'https://www.mytag.de/'
  },
  {
    logo: cwag,
    name: 'CWAG',
    link: 'https://www.cwe-chemnitz.de'
  },
  {
    logo: cwe,
    name: 'CWE',
    link: 'https://www.cawg.de'
  },
  {
    logo: rentenBoster,
    name: 'Renten Booster',
    link: 'http://www.doublexclusive.de'
  },
  {
    logo: elektroVieweg,
    name: 'Elektro Vieweg',
    link: 'https://www.elektro-vieweg.de'
  },
  {
    logo: cefeg,
    name: 'CEFEG',
    link: 'https://www.cefeg.de'
  },
  {
    logo: fdtech,
    name: 'FDTech',
    link: 'https://www.fdtech.de/'
  }
];

const Listing = ({ partner, type='normal' }) => {
  return (
    <div className={styles.listing} data-type={type}>
      {partner.map((partner, index) => {
        if (partner.link) {
          return (
            <a key={index} href={partner.link} rel="noreferrer" target="_blank" className={styles.item}>
              <img src={partner.logo} alt="" title={partner.name}/>
            </a>
          )
        } else {
          return (
            <div key={index} className={styles.item}>
              <img src={partner.logo} alt="" title={partner.name}/>
            </div>
          )
        }
      })}
    </div>
  )
}

const Partner = () => {
  return (
    <div className={styles.partner}>
      <Container>
        <h2 className={styles.headline}><span>Unsere</span> Partner</h2>
        <Listing partner={primePartner} type='large'/>
        <Listing partner={partner}/>
        <div className={styles.cta}>
          Jetzt Partner werden!<br className={styles.br}/>Schreibt uns eine E-Mail an <a href="mailto:info@videovision-chemnitz.de?subject=Unfinished Business">info@videovision-chemnitz.de</a>
        </div>
      </Container>
    </div>
  )
};

export default Partner;
