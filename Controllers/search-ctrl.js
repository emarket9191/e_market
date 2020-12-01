const Product = require("../modules/product-model");
const User = require("../modules/user-model");
const Shop = require("../modules/shop-model");

searchProductByCategories = async (req, res) => {
    try {
     
      const category = await Subject.findOne({
        subject_name: req.body.subject_name,
      })
        .populate("lectures")
        .exec();
      console.log("category:", category);
      console.log("lectures:", category.lectures);
      if (category.lectures.length === 0) {
        return res
          .status(404)
          .json({ success: false, error: "lectures not found" });
      }
      return res.status(200).json({ data: category.lectures });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ success: false, error: error });
    }
  };