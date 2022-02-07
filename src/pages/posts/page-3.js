import * as React from 'react';
import Layout from '../../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const GET_SITEMETADATA_DESC = graphql`
  query SiteDescQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const ThirdPage = () => {
  const data = useStaticQuery(GET_SITEMETADATA_DESC);

  return (
    <Layout>
      <div>
        <h1>This is the page 3</h1>
        <p>{data.site.siteMetadata?.description}</p>
        <Link to="/page-2">Go to page 2</Link>
      </div>
    </Layout>
  );
};

export default ThirdPage;
