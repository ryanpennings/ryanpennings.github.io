import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: left;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '…' : str

  const Grid = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 2rem;
`

const Link = styled.a``

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 18px 35px 0 rgba(42, 51, 83, 0.12),
      0 8px 15px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`

const Name = styled.h3`
  background-color: #f3f7f9;
  color: #23446b;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 700;
  padding: 1rem;
  margin: 0;
`

const Content = styled.div`
  flex: 1;
  padding: 0 1rem;
  color: #0c1e29;
`

const Meta = styled.div`
  padding: 0.5rem 1rem 0;
  border-top: 1px solid #dfe4e7;
  color: #4e616c;
`

const DetailsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 1rem;
`

const IconWrapper = styled.span`
  margin-right: 0.25rem;
  margin-top: 0.2rem;
  svg {
    display: block;
  }
`

const Label = styled.span`
  font-weight: 600;
  /* color: #0c1e29; */
`

const Publications = () => (
  <p></p>
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default Publications
