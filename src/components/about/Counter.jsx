import React from 'react'
import './counter.scss'
import CountUp from 'react-countup';

import {BugReport, SentimentSatisfied, Task, Work} from '@mui/icons-material/';
import { useState } from 'react';
const Counter = () => {
    const counterData=[
        {
            id:"1",
            icon:<Work/>,
            count:"10",
            title:"Projects"
        },
        {
            id:"2",
            icon:<BugReport/>,
            count:"100",
            title:"Bug Reports"
        },
        {
            id:"3",
            icon:<Task/>,
            count:"50",
            title:"Testing"
        },
        {
            id:"4",
            icon:<SentimentSatisfied/>,
            count:"15",
            title:"Happy Clients"
        }
    ];

  return (
    <>
    {counterData.map((d)=>(
        <div className='counter-card'>
        <h1>{d.icon}</h1> 
        <h4><CountUp start={0} end={d.count} duration={2}/><span> +</span></h4>
        <h5>{d.title}</h5>
      </div>
    ))}
    </>
  )
}

export default Counter