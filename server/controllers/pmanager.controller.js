const { Product } = require("../models/pmanager.model");

module.exports.findAllProducts = (req, res) => {
   Product.find()
      .then(allProducts => res.json(allProducts))
      .catch(err => res.json(err));
};

module.exports.findOneSingleProduct = (req, res) => {
   Product.findOne({ _id: req.params.id })
      .then(oneSingleProduct => res.json(oneSingleProduct))
      .catch(err => res.json(err));
};

module.exports.createNewProduct = (req, res) => {
   Product.create(req.body)
      .then(newlyCreatedProduct => res.json(newlyCreatedProduct))
      .catch(err => res.json(err));
};

module.exports.updateExistingProduct = (req, res) => {
   Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedProduct => res.json(updatedProduct ))
      .catch(err => res.json(err));
};

module.exports.deleteAnExistingProduct = (req, res) => {
   Product.deleteOne({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.json(err));
};

module.exports.exists = (req, res) => {
   Product.exists({name: req.body.name})
      .then(productExists => {
      if (productExists) {
         // Promise.reject() will activate the .catch() below.
         return Promise.reject('Error Message Goes Here');
      }
      return Product.create(req.body);
   })
   .then(saveResult => res.json(saveResult))
   .catch(err => res.json(err));
}

module.exports.index = (request, response) => {
   response.json({
      message: "Hello World"
   });
}