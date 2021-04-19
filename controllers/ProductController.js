class ProductController {
  constructor(ProductServices) {
    this.ProductServices = ProductServices;
  }
  async registerProduct(req, res) {
    const product = req.body;
    try {
      const response = await this.ProductServices.createProduct(product);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: `Server Error Type: ${error}` });
    }
  }
  async getAProduct(req, res) {
    const { id } = req.params;
    try {
      const response = await this.ProductServices.getProductById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: `Server Error Type: ${error}` });
    }
  }
  async getAllProducts(req, res) {
    try {
      const response = await this.ProductServices.getAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: `Server Error Type: ${error}` });
    }
  }
  async updateProduct(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      if (data) {
        await this.ProductServices.updateProduct(id, data);
        res.status(200).json({
          msg: `Se actualizo el producto con id: ${id} correctamente`,
        });
      } else {
        res.status(500).json({ msg: `Falta los datos para actualizar` });
      }
    } catch (error) {
      res.status(500).json({ msg: `Server Error Type: ${error}` });
    }
  }
  async deleteAProduct(req, res) {
    const { id } = req.params;
    try {
      await this.ProductServices.deleteProduct(id);
      res.status(200).json({ msg: `Producto Eliminado correctamente` });
    } catch (error) {
      res.status(500).json({ msg: `Server Error Type: ${error}` });
    }
  }
}
module.exports = ProductController;
