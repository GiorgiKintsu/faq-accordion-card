import { useState } from 'react'
import './App.css'
import AccordionCard from './components/AccordionCard'
import leftImage from './images/mention-isometric.svg'
import {DATA} from './data/Data'

function App() {

  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const handleClick = (itemNumber) => {
    if(activeAccordionNumber === itemNumber){
      setActiveAccordionNumber(null)
    }else{
      setActiveAccordionNumber(itemNumber)
    }
  }

  return (
    <div className='mainWrapper'>
      <main className='mainSection'>
        <aside className='leftSide'>
          <img src={leftImage} alt="mention-isometric" />
        </aside>
        <aside className="rightSide">
          <h2>faq</h2>

          {DATA.map((item) => (
            <AccordionCard
              key = {item.itemNumber} 
              handleClick = {handleClick}
              itemNumber = {item.itemNumber}
              question = {item.question} 
              answer = {item.answer}
              activeAccordionNumber = {activeAccordionNumber}
            />
          ))}
        </aside>
      </main>
    </div>
  )
}

export default App

