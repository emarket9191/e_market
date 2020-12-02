// const User = require("../Modules/user-model");


// checkAuthentication = async (req, res) => {
//   // Search for a user by email
//   console.log(req.body.email);
//   if (!req.body) {
//     return res
//       .status(400)
//       .json({ success: false, error: "Invalid login credentials" });
//   }
//   const user = await User.findOne({ email: req.body.email }).exec();
//   if (!user) {
//     return res
//       .status(400)
//       .json({ success: false, error: "Invalid login credentials" });
//   }

//   if (req.body.password != user.password) {
//     return res.status(401).json({
//       success: false,
//       accessToken: null,
//       error: "Invalid login credentials",
//     });
//   }
//   return user;
// };

// module.exports = {
//   checkAuthentication,
// };
