const express = require("express")
const router = express.Router()

const Template = require("../../models/Template")

router.get("/", (_, res) => {
  Template.find()
    .then((templates) => {
      res.json(templates)
    })
    .catch((err) => res.status(404).json(err))
})

router.post("/", (req, res) => {
  const newTemplate = new Template(req.body)

  newTemplate
    .save()
    .then((template) => {
      res.json(template)
    })
    .catch((error) => {
      res.status(400).json({ message: error })
    })
})

module.exports = router
