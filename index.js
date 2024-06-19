const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

calculadoraBackend.get("/hola", (req, res) =>{
    res.send("Hola Calculadora")
})

const suma = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var resultado = sumando1 + sumando2
    
    res.send(`SUMA: ${sumando1} + ${sumando2} = ${resultado}`)
}

calculadoraBackend.get("/calculo", suma)

 const resta = (req, res) => {
    var restando1 = Number(req.query.parametro1)
    var restando2 = Number(req.query.parametro2)
    var resultado = restando1 - restando2

    res.send(`resta: ${restando1} - ${restando2} = ${resultado}`)
 }

calculadoraBackend.get("/resta", resta)

const multi = (req, res) => {
    var multi1 = Number(req.query.parametro1)
    var multi2 = Number(req.query.parametro2)
    var resultado = multi1 * multi2

    res.send(`multi: ${multi1} * ${multi2} = ${resultado}`)
}

calculadoraBackend.get("/multi", multi)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
