const permissionsEnum = require('../helpers/permissions');
const checkPermission = (requiredPermission) => {
    return (req, res, next) => {
      const userPermissions = req.user && req.user.permissions;

     console.log(userPermissions);
      if (!userPermissions || permissionsEnum.USER != requiredPermission) {
        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
      }
      next();
    };
  };
  
  module.exports = { checkPermission };