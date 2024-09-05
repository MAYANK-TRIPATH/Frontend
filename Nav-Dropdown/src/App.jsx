import Navbar from './components/Navbar'
import Card from './components/Card'
import Timer from './components/Timer'
import './App.css'

function App() {

  
 
  const cardData = [
    {Heading: 'First', Description: 'wer werwerwer werwerwerwer'},
    {Heading: 'second', Description: 'qedqedqwdqwdqwdqw qwed wqedqwed'},
    {Heading: 'Mayank', Description: 'Look at this its the third one'}
  ]

  return (
    <>
      <Navbar/>

      <br/>

      <div>

      {cardData.map((data) => (
        <Card {...data}/> // spread opertor in js
      ))}
      </div> 

        <br/>

        
      <Timer/>

     
      
    
    </>
  )
}

export default App
