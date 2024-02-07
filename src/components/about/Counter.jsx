import React, { useState, useEffect } from 'react';
import './counter.scss';
import CountUp from 'react-countup';
import { BugReport, SentimentSatisfied, Task, Work } from '@mui/icons-material/';

const Counter = () => {
  const counterData = [
    {
      id: "1",
      icon: <Work />,
      count: "10",
      title: "Projects"
    },
    {
      id: "2",
      icon: <BugReport />,
      count: "100",
      title: "Bug Reports"
    },
    {
      id: "3",
      icon: <Task />,
      count: "50",
      title: "Testing"
    },
    {
      id: "4",
      icon: <SentimentSatisfied />,
      count: "15",
      title: "Happy Clients"
    }
  ];

  const [counterStates, setCounterStates] = useState(Array(counterData.length).fill(false));

  const handleScroll = (index, visible) => {
    if (visible && !counterStates[index]) {
      const updatedCounterStates = [...counterStates];
      updatedCounterStates[index] = true;
      setCounterStates(updatedCounterStates);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      counterData.forEach((_, index) => {
        const element = document.getElementById(`counter-card-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          handleScroll(index, isVisible);
        }
      });
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [counterData, counterStates]);

  return (
    <>
      {counterData.map((d, index) => (
        <div className={`counter-card ${counterStates[index] ? 'active' : ''}`} key={d.id} id={`counter-card-${index}`}>
          <h1>{d.icon}</h1>
          <h4>
            {counterStates[index] ? (
              <CountUp start={0} end={parseInt(d.count, 10)} duration={2} />
            ) : (
              <span>{d.count}</span>
            )}
            <span> +</span>
          </h4>
          <h5>{d.title}</h5>
        </div>
      ))}
    </>
  );
};

export default Counter;
