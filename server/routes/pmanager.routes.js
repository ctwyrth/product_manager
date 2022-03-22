const ProductController = require('../controllers/pmanager.controller')

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });
   app.post("/api/products", ProductController.createNewProduct);
   app.get("/api/products", ProductController.findAllProducts);
   app.get("/api/product/:id", ProductController.findOneSingleProduct);
   app.put("/api/product/:id/update", ProductController.updateExistingProduct);
   app.delete("/api/product/:id/delete", ProductController.deleteAnExistingProduct);
}