import React from 'react'
import styled from 'styled-components';

const Timeline = () => {

  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push((i < 10 ? "0" : "") + i + ":00");
  }

  return (
    <StyledHours>
      {hours.map(hour =>
        <StyledHour key={hour}>
          <StyledHourP>{hour}</StyledHourP>
        </StyledHour>)}
    </StyledHours>
  )
}

const StyledHours = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  position: relative;
  top: 0;
  z-index: 3;
  margin-left: 10rem;
  background-color: #323232;
  height: 3rem;
`

const StyledHour = styled.li`
  width: 20rem;
  height: 0.7rem;
  margin-top: 2.3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  border-image: linear-gradient(to , #000 50%, transparent 50%) 100% 1;
`

const StyledHourP = styled.p`
  margin-left: -1.1rem;
  color: white;
  margin-bottom: 2rem;
`

export default Timeline