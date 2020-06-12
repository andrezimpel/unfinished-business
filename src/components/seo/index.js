/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from '../../images/favicon.ico';

function Seo({ title, metaTitle, metaDescription, sharingTitle, sharingDescription, sharingImage, currentUrl, lang, keywords }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.siteTitle}`}
      link={[
        {
          href: site.siteMetadata.siteUrl + currentUrl,
          rel: "canonical"
        },
        {
          rel: "icon", type: "image/ico", sizes: "16x16", href: `${favicon}`
        }
      ]}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: sharingTitle,
        },
        {
          property: `og:description`,
          content: sharingDescription,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${sharingImage}`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl + currentUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: sharingTitle,
        },
        {
          name: `twitter:description`,
          content: sharingDescription,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${sharingImage}`,
        },
        {
          name: `twitter:image:alt`,
          content: sharingTitle,
        }
      ]
        .concat(
          (keywords !== null && keywords.length > 0)
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )}
    />
  )
}

Seo.defaultProps = {
  lang: `de`,
  title: '',
  metaTitle: '',
  metaDescription: '',
  sharingTitle: '',
  sharingDescription: '',
  sharingImage: '',
  currentUrl: '',
  keywords: [],
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  sharingTitle: PropTypes.string,
  sharingDescription: PropTypes.string,
  sharingImage: PropTypes.string,
  currentUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string)
}

export default Seo;
