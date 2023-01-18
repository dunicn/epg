import React from 'react'
import styled from 'styled-components'
import media from '../media'

const Button = ({ scrollToCurrent }) => {

  return (
    <StyledButton onClick={() => scrollToCurrent()}>Now</StyledButton>
  )
}

const StyledButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  background-color: orange;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  z-index: 11;
  border-radius: 0.5rem;
    ${media.tablet`
      background-color: orange;
      right: 5rem;
      bottom: 5rem;
    `};
    ${media.desktop`
      background-color: orange;
      right: 10rem;
      bottom: 5rem;
    `};
`

export default Button

