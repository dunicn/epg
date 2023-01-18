import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  /* position: fixed; */
  right: 15rem;
  bottom: 8rem;
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
`

const Button = ({ scrollToCurrent }) => {

  return (
    <StyledButton onClick={() => scrollToCurrent()}>Now</StyledButton>
  )
}

export default Button