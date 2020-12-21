import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from '../container';
import Headline from '../headline';

import styles from './index.module.scss';

const Products = () => {
  const { products } = useStaticQuery(graphql`
    {
      products: allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            shopifyId
            descriptionHtml
            availableForSale
            variants {
              price
              title
            }
          }
        }
      }
    }
  `);

  const Product = ({ title, image, variants }) => {
    const currentVariant = variants[0];
    console.log('variant', currentVariant);
    console.log('image', image);
    return (
      <div className={styles.product}>
        <div className={styles.image}>
          <Img fluid={image.localFile.childImageSharp.fluid}/>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{currentVariant.price}</div>
        {( variants.length > 1 &&
          <select>
            {( variants.map((variant, index) => (
              <option key={index}>{variant.price} - {variant.title}</option>
            )))}
          </select>
        )}
      </div>
    )
  };

  const items = products.edges.map(node => <Product key={node.node.id} title={node.node.title} variants={node.node.variants} image={[...node.node.images][0]}/>);

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

export default Products;
