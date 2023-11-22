// orzechy migdałowe

const express = require("express");
const app = express();
const api = require("./api");

app.use(express.json());
app.use("/api", api);

app.get("/", (req, res) => {
    res.send("welcome");
})

app.listen(8080, () => console.log("wystartował się na 8080"));