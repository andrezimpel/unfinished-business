import React from "react";
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
                  fluid(maxWidth: 535) {
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

  const Product = ({ title, image, options, variants, priceRange }) => {
    return (
      <div className={styles.product}>
        <div className={styles.image}>
          <Img fluid={image.localFile.childImageSharp.fluid}/>
        </div>
        <div className={styles.title}>{title}</div>
        <ProductForm product={{ options, variants, priceRange }}/>
      </div>
    )
  };

  const items = products.edges.map(node => (
    <Product
      key={node.node.id}
      title={node.node.title}
      options={node.node.options}
      variants={node.node.variants}
      image={[...node.node.images][0]}
      priceRange={node.node.priceRange}
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

export default Products;
