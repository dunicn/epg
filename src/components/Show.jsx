import React from 'react'
import styled from 'styled-components'
import { formatShowTime, extractTime } from '../helpers'



const Show = ({ show }) => {

  const { title, start, end } = show

  const showWidth = formatShowTime(new Date(end)) - formatShowTime(new Date(start))
  const finalWidth = (24 * 20) / (2400 / showWidth)
  const isLive = formatShowTime(new Date(end)) > formatShowTime(new Date())
    && formatShowTime(new Date(start)) <= formatShowTime(new Date())

  const startTime = extractTime(start)
  const endTime = extractTime(end)
  return (
    <StyledShow width={finalWidth} isLive={isLive}>
      <StyledTitle>{title}</StyledTitle>
      <StyledTime >{startTime} - {endTime}</StyledTime>
    </StyledShow>
  )
}

const StyledShow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;  
  width: ${({ width }) => width}rem;
  height: 5rem;
  background-color: ${({ isLive }) => isLive ? '#202020' : 'black'};
  font-family: "Courier";
  box-shadow: 1px 1px 1px 1px gray inset;
`

const StyledTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`

const StyledTime = styled.p`
  color: lightcyan;
  font-size: 0.8rem;

`

export default Show 