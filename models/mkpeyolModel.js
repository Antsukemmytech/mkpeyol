const mongoose = require("mongoose");

const mkpeyolSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: [String],
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

const mkpeyolMenu = mongoose.model('mkpeyolMenu', mkpeyolSchema);

module.exports = mkpeyolMenu;