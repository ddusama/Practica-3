import express from "express";
import cors from 'cors'
import multer from 'multer';
import * as dotenv from 'dotenv';
import {process_doc} from "./langchain";

//inicializar API
const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './archivos')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({
    storage,
    fileFilter(req, file, callback: multer.FileFilterCallback) {
        const fileExtension = path.extname(file.originalname)
        if (!fileExtension.includes('.pdf')) {
            callback(new Error('Only pdfs ara allowed'))
        }
        callback(null, true)
    }
})

//inicilizar puerto
const PORT = process.env.PORT || 3000;

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

app.post('/archivos', upload.single('file'), async (req, res) => {
    if (!req.file || !req.body?.question) {
        return res.status(400).send()
    }
    const response = await process_doc(req.file?.filename, req.body.question)
    res.send(response)
})

//levantar API
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})