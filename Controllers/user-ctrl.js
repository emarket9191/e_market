const User = require("../modules/user-model");
createUser = (req, res) => {
    const body = req.body;
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "you must provide user",
      });
    }
  
    const user = new User(body);
  
    if (!user) {
  
      return res.status(400).json({ success: false, error: err });
    }
  
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          message: "user created!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "user not created",
        });
      });
  };
  deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: "user not found" });
      }
      return res.status(200).json({ success: true, data: user });
    }).catch((err) => console.log(err));
  };
  updateUser = async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
    try {
      const user = await User.findOne({ _id: req.params.id }).exec();
  
      user.first_Name = body.first_Name;
      user.last_Name = body.last_Name;
      user.user_Name  = body.user_Name ;
      user.gender = body.gender;
      user.birthday = body.birthday;
      user.profileImage= body.profileImage;
      user.business_name  = body.business_name ;
      user.password = body.password;
      user.email = body.email;
      user.save().then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: "user updated",
        });
      });
    } catch (error) {
      return res.status(400).json({ success: false, error: error });
    }
  };

  getUserById = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id }).exec();
      if (!user ) {
        return res
          .status(404)
          .json({ success: false, error: "shop not found" });
      }
      
      return res.status(200).json({ success: true, data: shop});
    } catch (error) {
      console.error(error);
      return res.status(400).json({ success: false, error: error });
    }
  };
  module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUserById
  };