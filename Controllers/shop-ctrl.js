const Shop = require("../modules/shop-model");
const createShop = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide shop",
    });
  }

  const shop = new Shop(body);

  if (!shop) {
    return res.status(400).json({ success: false, error: err });
  }

  shop
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: shop._id,
        message: "shop created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "shop not created",
      });
    });
};
const getAllShop = async (req, res) => {
  try {
    const shops = await Shop.find({}).exec();

    if (!shops.length) {
      return res
        .status(404)
        .json({ success: false, error: "not a single shop was found" });
    }

    return res.status(200).json({ success: true, data: shops });
  } catch (error) {
    console.log("catch");
    return res.status(400).json({ success: false, error: err });
  }
};

const updateShop = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const shop = await Shop.findOne({ _id: req.params.id }).exec();

    shop.shop_Name = body.shop_Name;
    console.log(body.shop_Name);
    shop.brief_description = body.brief_description;
    shop.serviceSupplier = body.serviceSupplier;
    shop.colorAbove = body.colorAbove;
    shop.colorBottom = body.colorBottom;
    shop.dateEstablishmentOfBusiness = body.dateEstablishmentOfBusiness;
    shop.shop_fax = body.shop_fax;
    shop.shop_country = body.shop_country;
    shop.shop_city = body.shop_city;
    shop.shop_zipCode = body.shop_zipCode;

    shop.save().then(() => {
      return res.status(200).json({
        success: true,
        id: shop._id,
        message: "shop updated",
      });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};

const deleteShop = async (req, res) => {
  try {
    const shop = await Shop.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    if (!shop) {
      return res.status(404).json({ success: false, error: "shop not found" });
    }
    return res.status(200).json({ success: true, data: shop });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: err });
  }
};

const getShopById = async (req, res) => {
  try {
    const shop = await Shop.findOne({ _id: req.params.id }).exec();
    if (!shop) {
      return res.status(404).json({ success: false, error: "shop not found" });
    }

    return res.status(200).json({ success: true, data: shop });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};
module.exports = {
  createShop,
  getAllShop,
  updateShop,
  deleteShop,
  getShopById,
};
