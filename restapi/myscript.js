// npm init --yes
// npm install express -save
// npm install nodemon --save-dev
// npm install joi --save

const express = require("express");
const Joi = require("joi");
const joi = require("joi");
const app = express();
app.use(express.json());

const piwa = [
    {id:1, name:"pesco"},
    {id:2, name:"łomża"},
    {id:3, name:"perła"},
    {id:4, name:"corona"}
];

app.get("/", (req, res) => {
    res.send("ok");
});

app.get("/api/piwa", (req, res) => {
    res.send(piwa);
});

app.get("/api/piwa/:id", (req,res) => {
    let toPiwo = piwa.find( (piwo) => piwo.id === +req.params.id );
    if (!toPiwo) res.status(404).send(`Nie znaleziono piwa o id ${req.params.id}`);
    res.send(toPiwo);
});

app.post("/api/piwa", (req, res) => {
    const schema = joi.object({
        name:joi.string().min(3).required()
    });

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const piwo = {
        id: piwa.length+1,
        name: req.body.name
    };

    piwa.push(piwo);
    // res.send(piwo); bo wysyła dane i przyrywa połączenie
});

app.put("/api/piwa/:id", (req, res) => {
    const piwo = piwa.find((p) => p.id === +req.params.id);

    const schema = joi.object({
        name: joi.string().min(3).required()
    });

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    piwo.name = req.body.name;
    res.send("okokokok")
})

app.listen(8080, () => console.log("Serwer localhost 8080"));