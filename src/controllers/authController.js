const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ mesage: "User registered Successfully." });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error.", err });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      req
        .status(404)
        .json({ message: `User with username ${username} not found.` });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      req.status(401).json({ message: "Invalid Credentials." });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

module.exports = { register, login };
