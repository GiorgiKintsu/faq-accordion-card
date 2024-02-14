import { useState } from 'react'
import arrow from '../images/arrow-down.svg'
import './AccordionCard.css'


function AccordionCard(props) {
    const [clicked, setClicked] = useState(false);

    
    return(
        <div className='questionAndAnswerWrapper'>
            <div className="question" onClick={() => setClicked(!clicked)}>
                <h3>{props.question}</h3>
                <img src={arrow} alt="arrow-down" />
            </div>
            {clicked == true ? <div className='answer'>
                <h4>{props.answer}</h4>
            </div> : null}
        </div>
    )
}

export default AccordionCard