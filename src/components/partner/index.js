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

const primePartner = [
  {
    logo: videovision,
    name: 'VideoVision',
    link: 'https://www.videovision-chemnitz.de/'
  },
  {
    logo: niners,
    name: 'NINERS Chemnitz',
    link: 'https://www.chemnitz99.de/'
  },
  {
    logo: eins,
    name: 'EINS Energie in Sachsen',
    link: 'https://www.eins.de/'
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
    name: 'Chemnitz Basketball'
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
  }
];

const Listing = ({ partner, type='normal' }) => {
  return (
    <div className={styles.listing} data-type={type}>
      {partner.map((partner, index) => {
        console.log(partner.link);
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
