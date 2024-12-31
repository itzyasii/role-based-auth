const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, Authorization failed." });
    }
    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("The Decoded User is ", req.user);
      next();
    } catch (err) {
      res.status(400).json({ Messsage: "Token is not Valid or expired." });
    }
  } else {
    return res.status(401).json({ message: "No token, Authorization failed." });
  }
};

module.exports = verifyToken;
