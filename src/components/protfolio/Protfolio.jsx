
import { useState } from 'react';
import Protfoliolist from '../protfolioList/Protfoliolist';
import './protfolio.scss'
const Protfolio = () => {
  const[selected,setSelected]=useState("manual")
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
  return (
    <div className='protfolio' id='protfolio'>
      <h1>Portfolio</h1>
      <ul>
        {
          list.map((item)=>(
            <Protfoliolist  
            title={item.title} 
            active={selected===item.id} 
            setSelected={setSelected}
            />
          ))
        }
      </ul>

      <div className="container">
        <div className="item">
          <img src="assets/portfolioImg.png" alt="pic" />
          <h3>Zebec 1</h3>
        </div>

        <div className="item">
          <img src="assets/portfolioImg.png" alt="pic" />
          <h3>Zebec 2</h3>
        </div>

        <div className="item">
          <img src="assets/portfolioImg.png" alt="pic" />
          <h3>Zebec</h3>
        </div>

        <div className="item">
          <img src="assets/portfolioImg.png" alt="pic" />
          <h3>Zebec</h3>
        </div>

        <div className="item">
          <img src="assets/portfolioImg.png" alt="pic" />
          <h3>Zebec</h3>
        </div>

        <div className="item">
          <img src="assets/portfolioImg.png" alt="pic" />
          <h3>Zebec</h3>
        </div>

        
      </div>
    </div>
  )
}

export default Protfolio