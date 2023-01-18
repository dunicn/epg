import React from 'react'
import styled from 'styled-components'
import Show from './Show'

const StyledProgram = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  /* margin-top: 3rem; */
  list-style: none;
  /* box-shadow:1px 1px 1px black; */
  max-height: 100%;
`


const StyledChannels = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`
const StyledChannel = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 480rem;
  /* width: 100%; */
  /* box-shadow:1px 1px 1px 1px black inset; */
  box-shadow:1px 1px 1px black;



`

const Program = ({ channels }) => {
  return (
    <StyledProgram>
      {/* <StyledPrograme> */}
      <StyledChannels>
        {
          channels.map(channel => (
            <li key={channel.id}>
              {/* <h1>{channel.title}</h1> */}
              <StyledChannel>
                {channel.schedules.map(show => (
                  // <StyledChannel key={Math.random()}>
                  <Show key={Math.random()} show={show} />
                  // </StyledChannel>
                ))}
              </StyledChannel>
            </li>

          ))
        }
      </StyledChannels>

      {/* </StyledPrograme> */}
    </StyledProgram>

  )
}

export default Program