import { useState } from 'react'


function App() {
  const Inventory = [
    {name: "Blood Bags", quantity: 21},
    {name:"Ventilators", quantity: 12},
    {name: "IV Bags", quantity: 24}
  ]

  return (
    <div>
      <h1>Hospital Inventory Dashboard</h1>
      {Inventory.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.name}</h2>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  )

}

export default App
