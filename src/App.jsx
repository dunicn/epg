
import './App.css';
import { useEffect, useCallback, useState } from 'react';
// import { useCallback } from 'react';
import { useQuery } from 'react-query'
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Programe from './components/Programe';
import Line from './components/Line';
import { getMomentInDay } from './helpers';
import styled from 'styled-components';


const StyledButton = styled.button`
  position: fixed;
  right: 15rem;
  bottom: 8rem;
  background-color: orange;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  z-index: 11;

`


const App = () => {

  const { isLoading, error, data } = useQuery('programe', ({ queryKey }) => {
    return fetch('http://localhost:1337/epg')
      .then(data => data.json())
  }
  )

  const [linePosition, setLinePosition] = useState((24 * 20) / (2400 / getMomentInDay(new Date())))

  const scrollToCurrent = () => {
    console.log('Hello scroll to current')
    window.scrollTo({
      top: 0,
      left: linePosition * 16 - window.innerWidth / 2 + 80,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    setTimeout(() => scrollToCurrent(), 100);
  }, []);


  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occured: ' + error.message
  }

  return (
    <div className="App">
      <Line channels={data.channels}></Line>
      <Timeline></Timeline>
      <Sidebar channels={data.channels} />
      <Programe channels={data.channels} />
      <StyledButton onClick={() => scrollToCurrent()}>Now</StyledButton>
    </div>
  );
}

export default App;
