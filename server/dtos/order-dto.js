module.exports = class OrderDto {
  id;
  order_amount;
  date;
  status;
  customer_name;
  customer_phone;
  customer_email;
  customer_address;
  delivery_date;
  payment_method;
  order_composition;

  constructor(model) {
    this.id = model._id;
    this.order_amount = model.order_amount;
    this.date = model.date;
    this.status = model.status;
    this.customer_name = model.customer_name;
    this.customer_phone = model.customer_phone;
    this.customer_email = model.customer_email;
    this.customer_address = model.customer_address;
    this.delivery_date = model.delivery_date;
    this.payment_method = model.payment_method;
    this.order_composition = model.order_composition;
  }
};
