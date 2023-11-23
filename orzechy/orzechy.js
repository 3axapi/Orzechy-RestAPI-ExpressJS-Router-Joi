const fs = require("fs");
const path = require("path");
const orzechy = require("./orzechyDB");

function listOrzechy () {
    return parseOrzech(orzechy);
} // dostać wszyskie orzechy

function getOrzech (idOrzech) {
    let id = +idOrzech;
    let orzech = orzechy.find(o => o.id === id);
    return parseOrzech(orzech);
} // dostać konkretny orzech ze wskazanym id

function addOrzech () {
    
}

function deleteOrzech (idOrzech) {}

function parseOrzech (obj) {
    return JSON.parse(JSON.stringify(obj));
} // dostać object z jsona

function saveOrzechy () {
    fs.writeFile (
        path.join(__dirname, "orzechyBD.json"),
        JSON.stringify(orzechy, null, "\t"),
        err => {
            if (err) console.log("Błąd podczas zapisywania danych");
            else console.log("Plik został zapisany");
        }
    );
} // zapisać zmiany w json

module.exports = {
    list: listOrzechy,
    get: getOrzech
};