import React from 'react'
import styled from 'styled-components'

const StyledChannels = styled.ul`
  /* margin-top: 5rem; */
  position: sticky;
  width: 5rem;
  float: left;
  left: 0;
  top: 0;
  z-index: 4;
  list-style: none;
`

const StyledChannel = styled.li`
  width: 100%; 
  text-align:center;
  height: 5rem;
  box-shadow:1px 1px 1px 1px grey inset;  
  /* padding-top: 1rem; */
  /* text-align: center; */
  background-color: #202020;
  color: white;
  /* border-style: ridge; */
`

const Sidebar = ({ channels }) => {

  // console.log(channels)
  return (
    <StyledChannels>
      {
        channels.map(channel => <StyledChannel key={channel.id}>{channel.title}</StyledChannel>)
      }
    </StyledChannels>
  )
}

export default Sidebar