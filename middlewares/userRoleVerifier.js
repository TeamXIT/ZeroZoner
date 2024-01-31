const userRoleEnum = require('../helpers/userRole');

const verifyUserRole = (requiredRole) => {

  return (req, res, next) => {
    console.log(req.user);

     const userRole = req.user && req.user.role;

    if (!userRole || !userRoleEnum.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden - Invalid or missing user role' });
    }

    if (!requiredRole || !userRoleEnum.includes(requiredRole)) {
      return res.status(500).json({ message: 'Internal Server Error - Invalid required role' });
    }

    if (userRole !== requiredRole) {
      return res.status(403).json({ message: 'Forbidden - Insufficient privileges' });
    }

    next();
  };
};

module.exports = { verifyUserRole, userRoleEnum };
