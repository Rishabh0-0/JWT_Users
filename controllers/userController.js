const User = require('../models/UserModel');

//================= Get All Users ====================//
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.json({
    success: true,
    results: users.length,
    data: users,
  });
};

//================= Create a new User ====================//
exports.createUser = async (req, res, next) => {
  const { username, password, email } = req.body;

  const user = await User.create({ username, password, email });

  res.status(201).json({
    success: true,
    message: 'Created a new user successfully',
    user: { id: user._id, username: user.username, email: user.email },
  });
};

//================= Get Current User ====================//

//================= Delete a User ====================//
exports.deleteUser = async (req, res, next) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    return res.json({
      success: false,
      message: 'cannot find the user',
    });
  }

  res.status(204).json({
    data: null,
  });
};
