const express = require("express");
const router = express.Router();
const orzechy = require("../orzechy");
const joi = require("joi");

router.get("/orzechy", (req, res) => {
    res.json(orzechy.list());
})

router.get("/orzechy/:id", (req, res) => {
    res.json(orzechy.get(req.params.id));
})

module.exports = router;