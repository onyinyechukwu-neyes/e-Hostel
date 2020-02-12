const express = require("express");
const { categories, schools } = require("../APIData/APi");
const router = express.Router();

router.get("/categories", (req, res, next) => {
  res.json(categories);
});

router.get("/schools/:id", (req, res, next) => {
  res.json(schools.filter(s => s.catId === parseInt(req.params.id)));
});

router.get("/school/:id", (req, res, next) => {
  res.json(schools.find(s => s.id === parseInt(req.params.id)));
});

module.exports = router;
