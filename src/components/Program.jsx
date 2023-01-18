import React from 'react'
import styled from 'styled-components'
import Show from './Show'

const Program = ({ channels }) => {
  return (
    <StyledProgram>
      <StyledChannels>
        {
          channels.map(channel => (
            <li key={channel.id}>
              <StyledChannel>
                {channel.schedules.map(show => (
                  <Show key={Math.random()} show={show} />
                ))}
              </StyledChannel>
            </li>

          ))
        }
      </StyledChannels>
    </StyledProgram>

  )
}

const StyledProgram = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  list-style: none;
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
  box-shadow:1px 1px 1px black;
`

export default Program