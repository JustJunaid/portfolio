import React from "react";
import Layout from "../layouts";
import Home from "../components/Home";
import SEO from "../components/Seo";
// import MailSubscribe from "../components/MailSubscribe"

export default () => (
  <Layout>
    <SEO />
    <Home />
    {/* <MailSubscribe /> */}
  </Layout>
);
