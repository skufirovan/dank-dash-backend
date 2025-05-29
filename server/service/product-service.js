const ProductModel = require('../models/microgreen-model');

class ProductService {
  async getAllProducts() {
    const products = await ProductModel.find();
    return products;
  }
}

module.exports = new ProductService();
