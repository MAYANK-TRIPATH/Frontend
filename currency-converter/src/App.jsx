import { useState } from 'react';
import './App.css';
import Temp from './components/Temp'

function App() {
  const [currency, setCurrency] = useState(0);

  const convert = (e) => {
    e.preventDefault();
    const inrValue = parseFloat(e.target.inr.value);
     setCurrency((inrValue * 82)); 
  };

   return (
    <>
      <div>
        <h1>Convert INR into USD</h1>
        <form onSubmit={convert}>
          <label>Enter in INR: </label>
          <input name="inr" type="number"/>
          <button type="submit">Convert</button>
        </form>
        <h2>Converted Amount: Rs-{currency}</h2>
      </div>
      <br/>
      <Temp/>
    </>
 
   );
}

export default App;
