const { Schema, model } = require('mongoose');

const MicrogreenSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = model('Microgreen', MicrogreenSchema);
