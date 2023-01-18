import './App.css';
import { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query'
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Program from './components/Program';
import Line from './components/Line';
import { getMomentInDay } from './helpers';
import Button from './components/Button';
import styled from 'styled-components';

const App = () => {

  const { isLoading, error, data } = useQuery('programe', ({ queryKey }) => {
    return fetch('http://localhost:1337/epg')
      .then(data => data.json())
  }
  )

  const [linePosition, setLinePosition] = useState((24 * 20) / (2400 / getMomentInDay(new Date())))
  const ref = useRef()

  const scrollToCurrent = () => {


    console.log('Hello scroll to current', ref.current)
    window.scrollTo({
      top: 0,
      left: linePosition * 16 - window.innerWidth / 2 + 160,
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
    <div ref={ref} className="App">
      <StyledWrapper >

        <Line channels={data.channels}></Line>
        <Timeline></Timeline>
        <Sidebar channels={data.channels} />
        <Program channels={data.channels} />
      </StyledWrapper>
      <Button scrollToCurrent={scrollToCurrent}></Button>

    </div>
  );
}

const StyledWrapper = styled.div`
  /* overflow: scroll; */
  /* width: 24 * 20 + 10 + "rem";
  height: 100%;
  display: flex;
  z-index: -1; */
`

export default App;