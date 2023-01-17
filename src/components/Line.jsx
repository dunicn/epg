import React from 'react'
import styled from 'styled-components'
import { getMomentInDay } from '../helpers'

// height: ${(height) => height};


const StyledLine = styled.div`
  width: 5px;
  background-color: red;
  margin-left: ${({ left }) => left}rem;
  height: ${({ height }) => height}rem;
  z-index: 10;
  top: 3rem;
  position: absolute;
  height: 45rem;
`

const Line = ({ channels }) => {

  const linePosition = (24 * 20) / (2400 / getMomentInDay(new Date())) + 5;
  // console.log('LINE POSITION ', linePosition, channels.length * 5 + "rem")
  // (24 * 20) / (2400 / showWidth) + "rem"

  return (
    <StyledLine left={linePosition} height={channels.length * 5}>

    </StyledLine >
  )
}

export default Line