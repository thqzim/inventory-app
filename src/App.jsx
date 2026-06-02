import { useEffect, useState } from 'react'


function App() {

const [inventory, setInventory] = useState([]) //setting up inventory/setinventory

useEffect(() => {
  fetch(`http://localhost:5000/inventory`)  //fetch
  .then(res => res.json())
  .then(data => setInventory(data))
}, [])

const requestStock = (index) => {
  fetch(`http://localhost:5000/inventory/${index}/request`, {method : "POST"})
  .then(res => res.json())
  .then(data => setInventory(data))
}

const donateStock = (index) => {
  fetch(`http://localhost:5000/inventory/${index}/donate`, {method: "POST"})
  .then(res => res.json())
  .then(data => setInventory(data))
}

  return (
    <div>
      <h1>Hospital Inventory Dashboard</h1>
      {inventory.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.name}</h2>
          <p>Stock: {item.stock}</p>
          <button onClick={() => requestStock(index)}>Request {item.name}</button>
          <button onClick={() => donateStock(index)}>Donate {item.name}</button>
          <h3>----------------------------------------------------------------</h3>
          </div>
      ))}


    </div>
  )
}

export default App
