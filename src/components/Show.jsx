import React from 'react'
import styled from 'styled-components'
import { formatShowTime, extractTime } from '../helpers'

const StyledShow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;  
  width: ${({ width }) => width}rem;
  height: 5rem;
  /* border-style: ridge; */
  background-color: ${({ isLive }) => isLive ? '#202020' : 'black'};
  font-family: "Courier";
  box-shadow:1px 1px 1px 1px grey inset;  
`

const Show = ({ show }) => {

  const { title, start, end } = show

  const showWidth = formatShowTime(new Date(end)) - formatShowTime(new Date(start))
  const finalWidth = (24 * 20) / (2400 / showWidth)
  const isLive = formatShowTime(new Date(end)) > formatShowTime(new Date()) && formatShowTime(new Date(start)) <= formatShowTime(new Date())

  // console.log(finalWidth)


  const startTime = extractTime(start)
  const endTime = extractTime(end)
  return (
    <StyledShow width={finalWidth} isLive={isLive}>
      <h4>{title}</h4>
      <p >{startTime} - {endTime}</p>
    </StyledShow>
  )
}

export default Show 