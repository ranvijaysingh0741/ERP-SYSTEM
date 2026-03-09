const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  // Authorization Header
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided"
    });
  }

  // Bearer TOKEN
  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // attach user data
    req.user = decoded;

    next();

  } catch (err) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }
};