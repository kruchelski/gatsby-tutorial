import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/posts/page-3">Go to page 3</Link> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
