const express = require("express")
const router = express.Router()

const Page = require("../../models/Page")

router.get("/", (_, res) => {
  pages(res)
})

router.post("/", (req, res) => {
  const newPage = new Page(req.body)

  newPage
    .save()
    .then((page) => {
      pages(res, page._id)
    })
    .catch((error) => {
      res.status(400).json({ message: error })
    })
})

router.patch("/:id", (req, res) => {
  Page.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      pages(res)
    })
    .catch((error) => {
      res.status(400).json({ message: error })
    })
})

router.delete("/:id", (req, res) => {
  Page.findByIdAndDelete(req.params.id)
    .then(() => {
      pages(res)
    })
    .catch((error) => {
      res.status(400).json({ message: error })
    })
})

function pages(res, id) {
  Page.find()
    .then((pages) => {
      id ? res.json({ pages, id }) : res.json(pages)
    })
    .catch((error) => {
      res.status(400).json({ message: error })
    })
}

module.exports = router
