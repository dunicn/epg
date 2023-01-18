import React from 'react'
import styled from 'styled-components'
import media from '../media'

const StyledChannels = styled.ul`
 /* margin-top: 5rem; */
  position: sticky;
  width: 10rem;
  float: left;
  left: 0;
  top: 0;
  z-index: 4;
  list-style: none;
`

const StyledChannel = styled.li`
  width: 100%; 
  display: flex;
  align-items: center;

  justify-content: center;
  height: 5rem;
  box-shadow:1px 1px 1px 1px grey inset;  
  background-color: purple;
  color: white;
  font-family: "Courier";
  ${media.tablet`
  background-color: green;
    
    /* height: 245px; */
    /* padding: 3rem 6rem; */
  `};
  ${media.desktop`
  background-color: #323232;
    /* padding: 3rem 6rem;
    height: 345px; */
  `};
  
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