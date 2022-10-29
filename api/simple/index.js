const express = require('express');

const app = express()

app.use(express.json())

const carros = []

//Buscar todos
app.get('/cars', (req, res) => {
    return res.status(200).json({ carros })
})

// Buscar por id
app.get('/cars/:id', (req, res) => {
    const carro = carros.find(car => car.id == req.params.id)

    if (!carro) {
        return res.status(404).json({ message: 'Car not found' })
    }

    return res.status(200).json({ carro })
})

// Criar
app.post('/cars', (req, res) => {
    const { body } = req

    const carro = {
        ...body,
        id: carros.length + 1
    }

    carros.push(carro)

    return res.status(201).json()
})

// Atualizar
app.put('/cars/:id', (req, res) => {
    const { body } = req

    const carro = carros.find(car => car.id == req.params.id)

    if (!carro) {
        return res.status(404).json({ message: 'Car not found' })
    }

    Object.assign(carro, body)

    return res.status(201).json({ carro })
})

// Delete
app.delete('/cars/:id', (req, res) => {
    const carroIndex = carros.findIndex(car => car.id == req.params.id)
    if (carroIndex <= -1) {
        return res.status(404).json({ message: 'Car not found' })
    }

    carros.splice(carroIndex, 1);

    return res.status(200).json({ carros })
})

app.listen(3333, () => console.log('listening on port ' + 3333));