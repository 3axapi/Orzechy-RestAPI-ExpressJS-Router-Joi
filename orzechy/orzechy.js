const fs = require("fs");
const path = require("path");
let orzechy = require("./orzechyBD");

function listOrzechy () {
    return parseOrzech(orzechy);
} // dostać wszyskie orzechy z jsona

function getOrzech (idOrzech) {
    let id = +idOrzech;
    let orzech = orzechy.find(o => o.id === id); // o — orzech
    return parseOrzech(orzech);
} // dostać konkretny orzech ze wskazanym id z jsona

function editOrzech (idOrzech, bodyOrzech) {
    let id = +idOrzech;
    let orzech = orzechy.find(o => o.id === id); // o — orzech
    
    orzech.title = bodyOrzech.title;
    orzech.tree = bodyOrzech.tree;
    orzech.protein = bodyOrzech.protein;
    orzech.price = bodyOrzech.price;

    saveOrzechy();
    return getOrzech(orzech.id);
}

function addOrzech (orzech) {
    let lastOrzech = orzechy[orzechy.length - 1];
    orzech.id = lastOrzech ? lastOrzech.id + 1 : 1;
    orzechy.push(orzech);

    saveOrzechy();
    return getOrzech(orzech.id);
} // dodać orzech do json

function deleteOrzech (idOrzech) {
    let id = +idOrzech;
    let orzech = orzechy.find(o => o.id === id); // o — orzech
    orzechy = orzechy.filter(o => o.id !== orzech.id); // o — orzech

    saveOrzechy();
    return orzech;
} // usunąć orzech z jsona

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
} // funkcja zapisywania zmian w json plik

module.exports = {
    list: listOrzechy,
    get: getOrzech,
    add: addOrzech,
    edit: editOrzech,
    delete: deleteOrzech
};