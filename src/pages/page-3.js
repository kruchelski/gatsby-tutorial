import * as React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const GET_SITEMETADATA_DESC = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
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
        <h2>Images data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Extension</th>
              <th>Size</th>
              <th>Birthtime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => {
              const { relativePath, extension, size, birthTime } = node;
              return (
                <tr key={index}>
                  <td>{relativePath}</td>
                  <td>{extension}</td>
                  <td>{(size / 1000).toFixed(2)}KB</td>
                  <td>{new Date(birthTime).toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/page-2">Go to page 2</Link>
      </div>
    </Layout>
  );
};

export default ThirdPage;
