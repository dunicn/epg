import React from 'react'
import styled from 'styled-components';

const StyledHours = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  position: absolute;
  z-index: 3;
  top: 0;
  /* left: 5rem; */
  margin-left: 5rem;
  background-color: #202020;
  height: 3rem;
`

const StyledHour = styled.li`
  width: 20rem;
  /* height: 100%; */
  /* padding-bottom: 1rem; */
  padding-top: 1.5rem;
  color: white;
  /* border: dotted; */
`

const Timeline = () => {

  const hours = [];
  for (var i = 0; i < 24; i++) {
    hours.push((i < 10 ? "0" : "") + i + ":00");
  }


  return (
    <StyledHours>
      {hours.map(hour => <StyledHour key={hour}>{hour}</StyledHour>)}
    </StyledHours>
  )
}

export default Timeline