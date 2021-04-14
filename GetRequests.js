const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const productId = req.params.productID
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct) {
        return res.status(404).send("Product Doesn't Exist")
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send("Hello there")
})

app.get('/api/v1/query', (req, res) => {
    let sortedProducts = [...products];
    const { search, limit } = req.query
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ sucess: true, data: [] })
    }
    return res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log("Server listening on the port 5000...")
})