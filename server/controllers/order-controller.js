const orderService = require('../service/order-service');

class OrderController {
  async order(req, res, next) {
    try {
      const {
        order_amount,
        customer_name,
        customer_phone,
        customer_email,
        customer_address,
        delivery_date,
        payment_method,
        order_composition,
      } = req.body;
      const orderData = await orderService.order(
        order_amount,
        customer_name,
        customer_phone,
        customer_email,
        customer_address,
        delivery_date,
        payment_method,
        order_composition
      );
      return res.json(orderData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new OrderController();
