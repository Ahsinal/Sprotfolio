import React, { useState } from "react";
import "./counter.scss";
import CountUp from "react-countup";
import {
  BugReport,
  SentimentSatisfied,
  Task,
  Work,
} from "@mui/icons-material/";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const counterData = [
    {
      id: "1",
      icon: <Work />,
      count: "10",
      title: "Projects",
    },
    {
      id: "2",
      icon: <BugReport />,
      count: "100",
      title: "Bug Reports",
    },
    {
      id: "3",
      icon: <Task />,
      count: "50",
      title: "Testing",
    },
    {
      id: "4",
      icon: <SentimentSatisfied />,
      count: "15",
      title: "Happy Clients",
    },
  ];

  const [inView, setInView] = useState(false);

  const handleEnter = () => {
    console.log("Entered");
    setInView(true);
  };

  const handleExit = () => {
    console.log("Exited");
    setInView(false);
  };

  console.log("InView:", inView);

  return (
    <>
      {counterData.map((d, index) => (
        <ScrollTrigger key={d.id} onEnter={handleEnter} onExit={handleExit}>
          <div className="counter-card" key={d.id}>
            <h1>{d.icon}</h1>
            <h4>
              {inView && (
                <span>
                  <CountUp start={0} end={parseInt(d.count)} />
                </span>
              )}
              <span> +</span>
            </h4>
            <h5>{d.title}</h5>
          </div>
        </ScrollTrigger>
      ))}
    </>
  );
};

export default Counter;
