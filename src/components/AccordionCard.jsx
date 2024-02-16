import arrow from '../images/arrow-down.svg'
import './AccordionCard.css'


function AccordionCard(props) {
    const {handleClick, activeAccordionNumber, question, answer, itemNumber} = props
    
    return(
        <div className='questionAndAnswerWrapper'>
            <div 
                className="question" 
                onClick={() => {handleClick(itemNumber)}
            }>
                    <h3
                        style={{fontWeight: activeAccordionNumber == itemNumber ? "bold" : "normal"}}  
                    >
                        {question}</h3>
                    <img src={arrow} alt="arrow-down" />
            </div>
            {activeAccordionNumber == itemNumber ? 
                <div className='answer'>
                    <h4>{answer}</h4>
                </div> 
                : 
            null}
        </div>
    )
}

export default AccordionCard