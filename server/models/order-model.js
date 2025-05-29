const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  order_amount: { type: Number, required: true },
  date: { type: Date },
  status: {
    type: String,
    enum: ['new', 'processing', 'shipped', 'delivered'],
    default: 'new',
  },
  customer_name: { type: String, required: true },
  customer_phone: { type: String, required: true },
  customer_email: { type: String, required: true },
  customer_address: { type: String, required: true },
  delivery_date: { type: Date, required: true },
  payment_method: {
    type: String,
    enum: ['CASH', 'CARD'],
    default: 'CASH',
    required: true,
  },
  order_composition: { type: String, required: true },
});

module.exports = model('Order', OrderSchema);
