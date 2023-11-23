const fs = require("fs");
const path = require("path");
const orzechy = require("./orzechyDB");

function copyOrzechy (obj) {
    return JSON.parse(JSON.stringify(obj))
}

function listOrzechy () {
    return copyOrzechy(orzechy);
}

function getOrzech (idOrzech) {
    let id = +idOrzech;
    let orzech = orzechy.find(o => o.id === id);
    return copyOrzechy(orzech);
}

module.exports = {
    list: listOrzechy,
    get: getOrzech
}