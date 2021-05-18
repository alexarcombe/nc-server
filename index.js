// require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
const { mongoURI } = require("./config/db")

const templates = require("./routes/api/templates")
const pages = require("./routes/api/pages")

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err))

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "public", "admin", "index.html"))
})
app.get("/admin", (_, res) => {
  res.sendFile(path.resolve(__dirname, "public", "admin", "index.html"))
})

app.use("/api/templates", templates)
app.use("/api/pages", pages)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
