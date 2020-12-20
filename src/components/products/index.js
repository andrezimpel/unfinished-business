import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

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
              originalSrc
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

  const Product = ({ title, variants }) => {
    const currentVariant = variants[0];
    console.log('variant', currentVariant);
    return (
      <div className={styles.title}>{title}</div>
    )
  };

  const items = products.edges.map(node => <Product key={node.node.id} title={node.node.title} variants={node.node.variants}/>);

  return (
    <div className={styles.products}>
      <Headline>
        <span>Unterstütze</span> Uns
      </Headline>
      <div className={styles.grid}>
        {items}
      </div>
    </div>
  )
}

export default Products;
