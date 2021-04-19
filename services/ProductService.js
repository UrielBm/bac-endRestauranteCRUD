const Product = require("./../models/ProductModel");
class ProductService {
  createProduct(product) {
    const newProduct = new Product(product);
    return newProduct.save();
  }
  getProductById(id) {
    const response = Product.findById(id);
    return response;
  }
  getAll() {
    const arrayProduct = Product.find().sort({ registro: -1 }).exec();
    return arrayProduct;
  }
  updateProduct(id, data) {
    const response = Product.findByIdAndUpdate({ _id: id }, data).exec();
    return response;
  }
  deleteProduct(id) {
    const response = Product.findByIdAndRemove(id);
    return response;
  }
}
module.exports = ProductService;
