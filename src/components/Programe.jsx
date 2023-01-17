import React from 'react'
import styled from 'styled-components'
import Show from './Show'

const StyledChannels = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  margin-top: 3rem;
  /* float: left; */
  /* z-index: 5; */
  /* background-color: red; */
  list-style: none;
`

const StyledChannel = styled.li`
  width: 100%;
  height: 5rem;
  /* padding-top: 0.5rem; */
  background-color: #202020;
  color: white;
`

const StyledUl1 = styled.ul`
  display: flex;
  flex-direction: column;
  /* padding-top: 5rem; */
  list-style: none;

`
const StyledUl2 = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

`

const StyledPrograme = styled.section`
  /* left: 5rem;  */
  /* margin-top: 5rem; */
`

const Programe = ({ channels }) => {
  return (
    <StyledChannels>
      {/* <StyledPrograme> */}
      <StyledUl1>
        {
          channels.map(channel => (
            <li key={channel.id}>
              {/* <h1>{channel.title}</h1> */}
              <StyledUl2>
                {channel.schedules.map(show => (
                  // <StyledChannel key={Math.random()}>
                  <Show key={Math.random()} show={show} />
                  // </StyledChannel>
                ))}
              </StyledUl2>
            </li>

          ))
        }
      </StyledUl1>

      {/* </StyledPrograme> */}
    </StyledChannels>

  )
}

export default Programe