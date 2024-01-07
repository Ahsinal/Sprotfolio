
import { useEffect, useState } from 'react';
import Protfoliolist from '../protfolioList/Protfoliolist';
import './protfolio.scss'
import{zebecProtfolio,swiftProtfolio,lvfProtfolio} from '../../data';

const Protfolio = () => {

  const[selected,setSelected]=useState("zebec")
  const[data,setData]=useState([]);

  const list =[
    {
      id:"zebec",
      title:"Zebec"
    },
    {
      id:"swift",
      title:"Swift"
    },
    {
      id:"lvf",
      title:"LVF"
    },
    // {
    //   id:"cypress",
    //   title:"Cypress"
    // },
    // {
    //   id:"test-cases",
    //   title:"Test Cases"
    // }
  ];

  //useeffect
  useEffect(()=>{
    switch(selected){
      case "zebec":setData(zebecProtfolio);
      break;
      case "swift":setData(swiftProtfolio);
      break;
      case "lvf":setData(lvfProtfolio);
      break;
      // case "cypress":setData(cypressProtfolio);
      // break;
      // case "test-cases":setData(testcasesProtfolio);
      // break;
      default:
        setData(zebecProtfolio);
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