
import { useEffect, useState } from 'react';
import Protfoliolist from '../protfolioList/Protfoliolist';
import './protfolio.scss'
import{manualProtfolio,
  automationProtfolio,
  scrumProtfolio,
  cypressProtfolio,
  testcasesProtfolio} from '../../data';

const Protfolio = () => {

  const[selected,setSelected]=useState("manual")
  const[data,setData]=useState([]);

  const list =[
    {
      id:"manual",
      title:"Manual"
    },
    {
      id:"automation",
      title:"Automation"
    },
    {
      id:"scrum",
      title:"Scrum"
    },
    {
      id:"cypress",
      title:"Cypress"
    },
    {
      id:"test-cases",
      title:"Test Cases"
    }
  ];

  //useeffect
  useEffect(()=>{
    switch(selected){
      case "manual":setData(manualProtfolio);
      break;
      case "automation":setData(automationProtfolio);
      break;
      case "scrum":setData(scrumProtfolio);
      break;
      case "cypress":setData(cypressProtfolio);
      break;
      case "test-cases":setData(testcasesProtfolio);
      break;
      default:
        setData(manualProtfolio);
    }
  },[selected])


  return (
    <div className='protfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {
          list.map((item)=>(
            <Protfoliolist  
            title={item.title} 
            active={selected===item.id} 
            setSelected={setSelected}
            id={item.id}
            />
          ))
        }
      </ul>

      <div className="container">
        {data.map((d)=>(
          <div className="item">
          <img src={d.img} alt="pic" />
          <h3>{d.title}</h3>
        </div>
        ))}       
      </div>
    </div>
  )
}

export default Protfolio