import { useEffect, useState } from 'react'


function App() {

  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
    .then(res => res.json())
    .then(data => setInventory(data))
  }, [])

  const requestBloodBag = () => {
    fetch("http://localhost:5000/inventory", { method: "POST" })
    .then(res => res.json())
    .then(data => setInventory(data))
  }

  const BloodBag = inventory[0]

  return (
    <div>
      <h1>Hospital Inventory Dashboard</h1>
      {inventory.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.name}</h2>
          <p>Stock: {item.stock}</p>
          </div>
      ))}
      <h3>Click to request BloodBag</h3>
      <button onClick={requestBloodBag}>Request Blood Bag:</button>
    

    {BloodBag && (
      <div>
      <h4>Blood Bag Stock: {BloodBag.stock}</h4>
      </div>)
    }
    </div>
  )
}

export default App
