const productService = require('../service/product-service');

class ProductController {
  async getProducts(req, res, next) {
    try {
      const productsFromDb = await productService.getAllProducts();

      const products = productsFromDb.map((product) => ({
        id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      }));

      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
