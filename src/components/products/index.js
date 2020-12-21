import React, { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from '../container';
import Headline from '../headline';
import ProductForm from '../product/form';

import styles from './index.module.scss';

const Products = () => {
  const { products } = useStaticQuery(graphql`
    {
      products: allShopifyProduct(sort: {fields: [variants___price]}) {
        edges {
          node {
            id
            title
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 521, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            shopifyId
            descriptionHtml
            availableForSale
            options {
              id
              name
              values
            }
            variants {
              id
              title
              price
              availableForSale
              shopifyId
              selectedOptions {
                name
                value
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `);

  const items = products.edges.map(node => (
    <Product
      key={node.node.id}
      title={node.node.title}
      options={node.node.options}
      variants={node.node.variants}
      image={[...node.node.images][0]}
      priceRange={node.node.priceRange}
      description={node.node.descriptionHtml}
    />
  ));

  return (
    <div className={styles.products}>
      <Container>
        <Headline>
          <span>Unterstütze</span> Uns
        </Headline>
        <div className={styles.grid}>
          {items}
        </div>
      </Container>
    </div>
  )
}

const Product = ({ title, description, image, options, variants, priceRange }) => {
  const [showDescription, setShowDescription] = useState(false);

  const buttonLabel = showDescription ? 'Beschreibung ausblenden' : 'Beschreibung anzeigen'

  return (
    <div className={styles.product}>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <Img fluid={image.localFile.childImageSharp.fluid}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionWrapper} data-open={showDescription}>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}/>
          </div>
          <button className={styles.descriptionToggle} onClick={() => setShowDescription(!showDescription)}>{buttonLabel}</button>
        </div>
        <ProductForm product={{ options, variants, priceRange }}/>
      </div>
    </div>
  )
};

export default Products;
