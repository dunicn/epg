import React from 'react'
import styled from 'styled-components';

const StyledHours = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  /* position: absolute; */
  position: relative;
  width: 480rem;
  top: 0;
  /* margin-top: 0; */
  z-index: 3;
  /* left: 5rem; */
  margin-left: 10rem;
  background-color: #323232;
  height: 3rem;
  /* > * {
      &:first-child {
         margin-left: 10rem;
      }
    } */
`

const StyledHour = styled.li`
  width: 20rem;
  /* height: 100%; */
  /* padding-bottom: 1rem; */
  /* padding-top: 1.5rem; */
  color: white;
  /* box-shadow: 1px 0px 0px grey; */
  display: flex;
  align-items: center;
  /* margin-left: -1.1rem; */
  justify-content: start;
  border-right: 1px solid;
  /* border: dotted; */
  border-image: linear-gradient(to , #000 50%, transparent 50%) 100% 1;

`

const StyledHourP = styled.p`
  margin-left: -1.1rem;
  color: white;
`

const Timeline = () => {

  const hours = [];
  for (var i = 0; i < 24; i++) {
    hours.push((i < 10 ? "0" : "") + i + ":00");
  }


  return (
    <>
      <StyledHours>
        {hours.map(hour =>
          <StyledHour key={hour}>
            <StyledHourP>{hour}</StyledHourP>
          </StyledHour>)}
      </StyledHours>
      {/* <StyledDivider>
      </StyledDivider> */}
    </>
  )
}

export default Timeline