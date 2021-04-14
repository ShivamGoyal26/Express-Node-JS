// req => middleware => res

const logger = (req, res, next) => {                            // This logger function is the middleware 
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next()
}

module.exports = logger