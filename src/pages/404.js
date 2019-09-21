import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Lost?</h1>
    <h3>
      You just hit a route that doesn&#39;t exist... if you're looking for more
      check out my{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/coding_max"
      >
        Twitter
      </a>{" "}
      or{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/mjoellnier"
      >
        Github
      </a>{" "}
      account, otherwise you can get to the homepage{" "}
      <a rel="noopener noreferrer" href="/">
        here
      </a>
      !
    </h3>
  </Layout>
);

export default NotFoundPage;
