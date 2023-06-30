import express from 'express'
import cors from 'cors'

//inicializar API
const app = express()

app.use(express.json())
app.use(cors())

//inicilizar puerto
const PORT = process.env.PORT || 3000;

//levantar API
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})

//crear endpoint
app.get('/ping', (req, res) => {
    console.log("Alguien ha dado ping :)")
    res.setHeader("Contet-Type", "applicaton/json")
    res.send("-pong");
})

app.get('/hola/:nombre/:apellido', (req, res) => {
    const { nombre, apellido } = req.params
    console.log("Alguien ha ingresado sus nombres")
    res.setHeader("Contet-Type", "applicaton/json")
    res.send({ nombre, apellido});
})