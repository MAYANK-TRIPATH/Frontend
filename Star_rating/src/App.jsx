import { useState } from 'react';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  const [showRating, setShowRating] = useState(false);

  const start = () => {
    setShowRating(true);
  }


  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <button onClick={start}>Give Rating</button>
      {showRating && <StarRating/>}
    </div>
  );
}

export default App;
