const Category = require("../Modules/category-model");

const createCategory = (req, res) => {
    const body = req.body;
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "you must provide category",
      });
    }
  
    const category = new Category(body);
  
    if (!category ) {
      return res.status(400).json({ success: false, error: err });
    }
  
    category 
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: category._id,
          message: "category created!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "category not created",
        });
      });
  };
  
  const deleteCategory  = async (req, res) => {
      try {
        const category = await Category.findOneAndDelete({
          _id: req.params.id,
        }).exec();
        if (!category) {
          return res.status(404).json({ success: false, error: "category not found" });
        }
        return res.status(200).json({ success: true, data: category });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: err });
      }
    };
  
  const updateCategory = async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
    try {
      const category = await Category.findOne({ _id: req.params.id }).exec();
  
      category.category_Name = body.category_Name;
      category.submit_time = body.submit_time;
     
      category.save().then(() => {
        return res.status(200).json({
          success: true,
          id: category._id,
          message: "category updated",
        });
      });
    } catch (error) {
      return res.status(400).json({ success: false, error: error });
    }
  };
  
  const getCategoryById = async (req, res) => {
    try {
      const category = await Category.findOne({ _id: req.params.id }).exec();
      if (!category) {
        return res
          .status(404)
          .json({ success: false, error: "category not found" });
      }
  
      return res.status(200).json({ success: true, data: category });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ success: false, error: error.message });
    }
  };
 const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find({}).exec();
  
      if (!categories.length ) {
        return res
          .status(404)
          .json({ success: false, error: "not a single category was found" });
      }
  
      return res.status(200).json({ success: true, data: categories });
    } catch (error) {
     
      return res.status(400).json({ success: false, error: err });
    }
  };
  module.exports = {
    createCategory,
    deleteCategory,
    updateCategory,
    getCategoryById,
    getAllCategories
  };