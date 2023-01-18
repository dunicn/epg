import React from 'react'
import styled from 'styled-components'
import media from '../media'


const StyledButton = styled.button`
  position: fixed;
  right: 15rem;
  bottom: 10rem;
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
  right: 15rem;
  bottom: 10rem;
    
    /* height: 245px; */
    /* padding: 3rem 6rem; */
  `};
  ${media.desktop`
  background-color: orange;
  right: 15rem;
  bottom: 10rem;
    /* padding: 3rem 6rem;
    height: 345px; */
  `};
`

const Button = ({ scrollToCurrent }) => {

  return (
    <StyledButton onClick={() => scrollToCurrent()}>Now</StyledButton>
  )
}

export default Button