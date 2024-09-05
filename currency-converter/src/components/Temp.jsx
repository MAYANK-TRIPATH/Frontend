import React, { useState } from 'react'

const Temp = () => {

const [temp, setTemp] = useState(0);

const celcius = (e) => {
e.preventDefault();
const fvalue = parseFloat(e.target.cel.value)
setTemp(((fvalue - 32) * 5) / 9);
}

  return (
    <div>
        <h1>Convert Fahrenheit into Celcius</h1>
        <form onSubmit={celcius}>
            <label>Enter into celcius: </label>
            <input type="number" name="cel"></input>
            <button type='submit'> Convert</button>

        </form>
        <h1>Celcius: {temp}</h1>
    </div>
  )
}

export default Temp