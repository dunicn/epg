import './App.css';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Program from './components/Program';
import Line from './components/Line';
import { getMomentInDay } from './helpers';
import Button from './components/Button';

const App = () => {

  const { isLoading, error, data } = useQuery('programe', ({ queryKey }) => {
    return fetch('http://localhost:1337/epg')
      .then(data => data.json())
  }
  )

  const [linePosition, setLinePosition] = useState((24 * 20) / (2400 / getMomentInDay(new Date())))

  const scrollToCurrent = () => {
    console.log('Hello scroll to current', window.innerWidth)
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
    <div className="App">
      <Line channels={data.channels}></Line>
      <Timeline></Timeline>
      <Sidebar channels={data.channels} />
      <Program channels={data.channels} />
      <Button scrollToCurrent={scrollToCurrent}></Button>
    </div>
  );
}

export default App;