import { useState } from 'react'


function App() {
  const Inventory = [
    {name: "Blood Bags", quantity: 12},
    {name: "Pills", quantity: 64},
    {name: "Carrots", quantity: 12}
  ]
  
  const [count, setCount] = useState(0)

  return (
    <div> 
      <h1>Inventory Dashboard of Chicago Hospital</h1>
      {Inventory.map((item, index) =>   (
        <div key={index}>
        <h2>Item: {item.name}</h2>
        <p>quantity: {item.quantity}</p>
        </div>
      ))}

      <h3>Click the number to update the counter</h3>
        <button>
            click the number:
          </button>
            <button onClick={() => setCount(count+1)}>
              {count}
            </button>
      </div>
  )

  

}

export default App
