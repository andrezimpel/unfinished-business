import React from "react";

import Container from '../container';

import styles from './index.module.scss';
import admedia from '../../assets/images/partner-logos/admedia.svg';
import cb from '../../assets/images/partner-logos/chemnitz-basketball.svg';
import eins from '../../assets/images/partner-logos/eins.svg';
import niners from '../../assets/images/partner-logos/niners.svg';
import haase from '../../assets/images/partner-logos/sanitaer-haase.svg';
import unknownbasics from '../../assets/images/partner-logos/unknownbasics.svg';
import videovision from '../../assets/images/partner-logos/videovision.svg';

const primePartner = [
  {
    logo: videovision,
    name: 'VideoVision'
  },
  {
    logo: niners,
    name: 'NINERS Chemnitz'
  },
  {
    logo: eins,
    name: 'EINS Energie in Sachsen'
  }
];

const partner = [
  {
    logo: admedia,
    name: 'ADMEDIA'
  },
  {
    logo: unknownbasics,
    name: 'UNKNOWN BASICS'
  },
  {
    logo: cb,
    name: 'Chemnitz Basketball'
  },
  {
    logo: haase,
    name: 'Sanitär Haase'
  }
];

const Listing = ({ partner, type='normal' }) => {
  return (
    <div className={styles.listing} data-type={type}>
      {partner.map((partner, index) => (
        <div key={index} className={styles.item}>
          <img src={partner.logo} alt="" title={partner.name}/>
        </div>
      ))}
    </div>
  )
}

const Partner = () => {
  return (
    <div className={styles.partner}>
      <Container>
        <h2 className={styles.headline}>Partner</h2>
        <Listing partner={primePartner} type='large'/>
        <Listing partner={partner}/>
      </Container>
    </div>
  )
};

export default Partner;
