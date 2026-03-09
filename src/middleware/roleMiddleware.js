const roleMiddleware = (role) => {

 return (req, res, next) => {

  // user JWT middleware se aata hai
  if (!req.user)
   return res.status(401).json("Unauthorized");

  // role check
  if (req.user.role !== role)
   return res.status(403).json("Access denied");

  next();
 };

};

module.exports = roleMiddleware;
