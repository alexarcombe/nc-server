const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TemplateSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  content: [
    {
      selector: { type: String, require: true },
      props: [{ name: String }],
      children: String,
    },
  ],
})

module.exports = Template = mongoose.model("templates", TemplateSchema)
