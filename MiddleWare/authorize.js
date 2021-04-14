const authorize = (req, res, next) => {
    console.log("This is the request", req.query)
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize

