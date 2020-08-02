import React from "react"

import LandingBio from "../components/landing-bio"
import Publications from "../components/publications"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ryan pennings`, `pennings`, `robotic fabrication`, `robots`, `architectural robotics`, `reinforcement learning`, `clay 3d printing`, `mobile robots`, `construction robotics`]} />
    <LandingBio />
    <Publications />
  </Layout>
)

export default IndexPage
