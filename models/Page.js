const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PageSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  index: Number,
  templateId: {
    type: Schema.Types.ObjectId,
    ref: "templates",
  },
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "fields",
    },
  ],
  content: [
    {
      selector: { type: String, require: true },
      props: [{ name: String, value: String }],
      children: Schema.Types.Mixed,
    },
  ],
})

module.exports = Page = mongoose.model("pages", PageSchema)
