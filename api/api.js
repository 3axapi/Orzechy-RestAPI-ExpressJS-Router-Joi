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
    const schema = joi.object().keys({
        title: joi.string().min(7).max(40).required(),
        tree: joi.string().min(7).max(40).required(),
        protein: joi.number().less(26).greater(7.5).required(),
        price: joi.number().less(100).greater(14).required()
    });
    
    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    res.json(orzechy.edit(req.params.id, req.body));
})

router.post("/orzechy", (req, res) => {
    const schema = joi.object({
        title: joi.string().min(7).max(40).required(),
        tree: joi.string().min(7).max(40).required(),
        protein: joi.number().less(26).greater(7.5).required(),
        price: joi.number().less(100).greater(14).required()
    });

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    res.json(orzechy.add(req.body));
});

router.delete("/orzechy/:id", (req, res) => {
    res.json(orzechy.delete(req.params.id));
});

module.exports = router;