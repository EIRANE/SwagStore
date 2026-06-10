// middleware/auth.middleware.js
'use strict';

exports.isStaff = (req, res, next) => {
  if (req.session && req.session.user && req.session.user.role === 'staff') {
    return next();
  }
  return res.status(403).json({ success: false, message: 'Forbidden: Chỉ Staff mới có quyền thực hiện hành động này.' });
};