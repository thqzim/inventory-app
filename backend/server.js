const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const inventory = [
    {name: "Blood Bags", stock: 12},
    {name: "IV Bags", stock: 62},
    {name: "Pills", stock: 25}
  ]

app.get(`/inventory`, (req, res) => {res.json(inventory)})

app.post(`/inventory/:index/request`, (req, res) => {
    const i = req.params.index
    if (inventory[i].stock > 0) {
        inventory[i].stock -= 1
    }
    res.json(inventory)
})

app.post(`/inventory/:index/donate`, (req, res) => {
    const i = req.params.index
    inventory[i].stock += 1
    res.json(inventory)
})

app.listen(5000, () => {console.log("Server has been opened at port 5000")})