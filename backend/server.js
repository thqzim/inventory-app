const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const inventory = [ 
    {name: "Blood Bags", stock: 21 },
    {name: "IV Bags", stock: 12},
    {name: "Syringes", stock: 95}
  ]

app.get("/inventory", (req, res) => {res.json(inventory)})
app.post("/inventory", (req, res) => {
    inventory[0].stock = inventory[0].stock - 1
    res.json(inventory)
})

app.listen(5000, () => {console.log("Server has opened at port 5000")})