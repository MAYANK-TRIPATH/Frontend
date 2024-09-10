import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface DataType {
  data: string;
}

function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get<DataType[]>('link');
      setData(response.data);
    } catch (err: any){
      setError(err.message);
    }
  }
 })

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            {item.data}
          </div>
        ))}
      </div>
      {error && <div>{error}</div>}
    </>
  )
}

export default App;


