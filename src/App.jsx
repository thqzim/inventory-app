import { useEffect, useState } from 'react'


function App() {
  const [stock, setStock] = useState(null)


  useEffect(() => {
    fetch("http://localhost:5000/stock")
    .then(res => res.json())
    .then(data => setStock(data.stock))
    }, [])
  
  const updateStock = () => {
      fetch("http://localhost:5000/stock", {method: "POST"})
      .then(res => res.json())
      .then(data => setStock(data.stock))
    }


  return (
    <div>
    <h1>Inventory dashboard</h1>
    <h2>Stock: {stock}</h2>
    <button onClick={(updateStock)}>
      Click to request stock
    </button>
</div>
  )
}
export default App

