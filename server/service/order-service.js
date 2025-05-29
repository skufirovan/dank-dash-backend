const UserModel = require('../models/user-model');
const OrderModel = require('../models/order-model');
const mailService = require('./mail-service');
const ApiError = require('../exceptions/api-error');
const UserDto = require('../dtos/user-dto');
const OrderDto = require('../dtos/order-dto');

class OrderService {
  async order(
    order_amount,
    customer_name,
    customer_phone,
    customer_email,
    customer_address,
    delivery_date,
    payment_method,
    order_composition
  ) {
    const user = await UserModel.findOne({ email: customer_email });

    if (!user) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${customer_email} не найден`
      );
    }

    const userDto = new UserDto(user);
    const now = new Date().toISOString();

    const order = await OrderModel.create({
      user: userDto.id,
      order_amount,
      date: now,
      status: 'new',
      customer_name,
      customer_phone,
      customer_email,
      customer_address,
      delivery_date,
      payment_method,
      order_composition,
    });

    const orderDto = new OrderDto(order);

    await mailService.sendOrderInformationMail(
      customer_email,
      order_composition
    );

    return { user: userDto, order: orderDto };
  }
}

module.exports = new OrderService();
