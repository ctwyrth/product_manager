const ProductController = require('../controllers/pmanager.controller')

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });
   app.post("/api/products", ProductController.createNewProduct);
   app.get("/api/products", ProductController.findAllProducts);
   app.get("/api/products/:id", ProductController.findOneSingleProduct);
   app.put("/api/products/update/:id", ProductController.updateExistingProduct);
   app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
}