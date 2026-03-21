completed ts why that's commented to run another

const express = require('express')
const app = express()
const port = 3000

app.get('/product', (req, res) => {
  res.json({
    name: "shirt",
    price: 900,
    catagory: "cloths"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

2.

// dividing line --------------------------------------------------------------

const express = require('express')
const app = express()
const port = 3000

app.get('/products', (req, res) => {
  const products = [
    {product1: "shoe", price: 100, catagory: "cloths"},
    {product1: "pizza", price: 500, catagory: "foods"},
    {product1: "mouse", price: 1500, catagory: "electronics"}
  ];
  res.status(200).json({
    success: true,
    total: products.length,
    data: products
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
