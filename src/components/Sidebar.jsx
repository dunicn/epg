import React from 'react'
import styled from 'styled-components'
import media from '../media'



const Sidebar = ({ channels }) => {

  return (
    <StyledChannels>
      {
        channels.map(channel => <StyledChannel key={channel.id}>{channel.title}</StyledChannel>)
      }
    </StyledChannels>
  )
}

const StyledChannels = styled.ul`
  position: sticky;
  left: 0;
  margin-top: 3rem;
  width: 80px;
  float: left;
  z-index: 11;
  list-style: none;
  background-color: #323232;
    ${media.tablet`
      background-color: #323232;
      width: 160px;
      `};
    ${media.desktop`
      background-color: #323232;
      width: 160px;
      `};
`

const StyledChannel = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  box-shadow:1px 1px 1px 1px grey inset;  
  background-color: #323232;
  color: white;
  font-family: "Courier";
  ${media.tablet`
  background-color: #323232;
  `};
  ${media.desktop`
  background-color: #323232;
  `};
`

export default Sidebar