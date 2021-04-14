const express = require('express')
const router = express.Router()

let { people } = require('../data')

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        data: people
    })
})

// router.post('/api/postman/people', (req, res) => {
//     const { name } = req.body
//     if (!name) {
//         return res
//             .status(400)
//             .json({ sucess: false, msg: "Please provide name value" })
//     }
//     return res.status(201).send({ sucess: true, data: [...people, { id: 23, name }] })
// })

router.put('/:id/', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ sucess: false, msg: `No person with the id ${id}` })
    }
    const newpeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    return res.status(200).json({
        sucess: true,
        data: newpeople
    })
})

router.delete('/:id/', (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ sucess: false, msg: `No person with the id ${id}` })
    }
    const newpeople = people.filter((person) => person.id != Number(id))
    return res.status(200).send({
        sucess: true,
        data: newpeople
    })
})

router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            sucess: false,
            msg: 'please provide name value'
        })
    }
    return res.status(201).send({
        sucess: true,
        person: name
    })
})

module.exports = router