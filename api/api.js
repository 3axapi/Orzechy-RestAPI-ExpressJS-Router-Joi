const express = require("express");
const router = express.Router();
const orzechy = require("../orzechy");
const joi = require("joi");

router.get("/orzechy", (req, res) => {
    res.json(orzechy.list());
});

router.get("/orzechy/:id", (req, res) => {
    res.json(orzechy.get(req.params.id));
});

router.put("/orzechy/:id", (req, res) => {
    res.json(orzechy.edit(req.params.id, req.body));
})

router.post("/orzechy", (req, res) => {
    res.json(orzechy.add(req.body));
});

router.delete("/orzechy/:id", (req, res) => {
    res.json(orzechy.delete(req.params.id));
});

module.exports = router;