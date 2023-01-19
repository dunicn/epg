import React from 'react'
import styled from 'styled-components'
import { getMomentInDay } from '../helpers'


const Line = ({ channels }) => {

  const linePosition = (24 * 20) / (2400 / getMomentInDay(new Date())) + 10;

  return (
    <>
      <StyledLineTime left={linePosition - 0.1} >
      </StyledLineTime >
      <StyledLineChannels left={linePosition} height={channels.length * 5 + 3}>
      </StyledLineChannels>
    </>
  )
}

const StyledLineTime = styled.div`
  position: absolute;
  width: 5px;
  background-color: orange;
  margin-left: ${({ left }) => left}rem;
  height: 3rem;
  z-index: 10;
  border-radius: 0.25rem;
`
const StyledLineChannels = styled.div`
  position: absolute;
  width: 1px;
  background-color: orange;
  margin-left: ${({ left }) => left}rem;
  height: ${({ height }) => height}rem;
  z-index: 10;
`

export default Line