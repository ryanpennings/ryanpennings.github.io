import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import colours from "../styles/colours";

const Container = styled.div`
  text-align: left;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  height: 38vh;
`

const Description = styled.p`
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  line-height: 2rem;

  a {
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) { color: ${colours.blue500}; }
      &:nth-of-type(2) { color: ${colours.orange500}; }
      &:nth-of-type(3) { color: ${colours.purple500}; }
      &:nth-of-type(4) { color: ${colours.green500}; }
      &:nth-of-type(5) { color: ${colours.teal500}; }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;
        &:nth-of-type(1) { color: ${colours.blue600};    background-color: ${colours.blue200};}
        &:nth-of-type(2) { color: ${colours.orange600};  background-color: ${colours.orange200};}
        &:nth-of-type(3) { color: ${colours.purple600};  background-color: ${colours.purple200};}
        &:nth-of-type(4) { color: ${colours.green600};   background-color: ${colours.green200};}
        &:nth-of-type(5) { color: ${colours.teal600};    background-color: ${colours.teal200};}
      }
  }

`
// add coloured links to Description above
const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

// https://stackoverflow.com/questions/46618000/multiple-post-type-with-markdownremark & https://github.com/gatsbyjs/gatsby/issues/9944
const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQueryAndHeroTextQuery {
        site {
          siteMetadata {
            title
            subtitle
            description
          }
        }
        markdownRemark(frontmatter: { title: { eq: "herotext" } }) {
          html
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
