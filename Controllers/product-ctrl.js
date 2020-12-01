const Product = require("../modules/product-model");
const createProduct = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide product",
    });
  }

  const product = new Product(body);

  if (!product) {
    return res.status(400).json({ success: false, error: err });
  }

  product
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: product._id,
        message: "product created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "product not created",
      });
    });
};
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({}).exec();

    if (!product.length) {
      return res
        .status(404)
        .json({ success: false, error: "not a single product was found" });
    }

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log("catch");
    return res.status(400).json({ success: false, error: err });
  }
};
const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({
        _id: req.params.id,
      }).exec();
      if (!product) {
        return res.status(404).json({ success: false, error: "product not found" });
      }
      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, error: err });
    }
  };

const updateProduct = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();

    product.product_Name = body.product_Name;
    product.serial_number = body.serial_number;
    product.category = body.category;
    product.password = body.password;
    product.package_dimension = body.package_dimension;
    product.package_weight = body.package_weight;
    product.price_per_unit = body.price_per_unit;
    product.unit_in_package = body.unit_in_package;
    product.quantity_in_stuck = body.quantity_in_stuck;
    product.product_description = body.product_description;
    product.shipment = body.shipment;
    product.product_description = body.product_description;
    product.service = body.service;
    product.fob = body.fob;
    product.submit_time = body.submit_time;
    product.pause_time = body.pause_time;

    product.save().then(() => {
      return res.status(200).json({
        success: true,
        id: product._id,
        message: "product updated",
      });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "product not found" });
    }

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
   
    const products = await Product.find({}).exec();
    if (!products.length ) {
      return res
        .status(404)
        .json({ success: false, error: "not a single product was found" });
    }

    return res.status(200).json({ success: true, data: products });
  } catch (error) {
   
    return res.status(400).json({ success: false, error: err });
  }
};



module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  getAllProducts
 
};
