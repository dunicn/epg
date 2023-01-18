import { useEffect, useState } from 'react';
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

  const scrollToCurrent = () => {
    window.scrollTo({
      top: 0,
      left: linePosition * 16 - window.innerWidth / 2 + 80 * 1.5,
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
    <StyledApp>
      <Sidebar channels={data.channels} />
      <StyledWrapper>
        <Line channels={data.channels} />
        <Timeline />
        <Program channels={data.channels} />
        <Button scrollToCurrent={scrollToCurrent} />
      </StyledWrapper>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
  width: fit-content;
  height: 100vh;
  background-color: #323232;
`

const StyledWrapper = styled.div`
  position: relative;
`

export default App;