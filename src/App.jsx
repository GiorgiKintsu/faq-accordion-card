import './App.css'
import AccordionCard from './components/AccordionCard'
import leftImage from './images/mention-isometric.svg'

function App() {
  const questions = [
    "How many team members can I invite?",
    "What is the maximum file upload size?",
    "How do I reset my password?",
    "Can I cancel my subscription?",
    "Do you provide additional support?"
  ]
  const answers = [
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "No more than 2GB. All files in your account must fit your allotted storage space."
  ]
  return (
    <div className='mainWrapper'>
      <main className='mainSection'>
        <aside className='leftSide'>
          <img src={leftImage} alt="mention-isometric" />
        </aside>
        <aside className="rightSide">
          <h2>faq</h2>
          <AccordionCard question={questions[0]} answer={answers[0]}/>
          <AccordionCard question={questions[1]} answer={answers[1]}/>
          <AccordionCard question={questions[2]} answer={answers[2]}/>
          <AccordionCard question={questions[3]} answer={answers[3]}/>
          <AccordionCard question={questions[4]} answer={answers[4]}/>
        </aside>
      </main>
    </div>
  )
}

export default App

