// admin.test.js
'use strict';

const { isStaff } = require('../middleware/auth.middleware');
const adminCtrl = require('../controllers/adminController');

describe('Middleware: isStaff', () => {
  test('Nên gọi next() nếu tài khoản là staff', () => {
    const req = { session: { user: { role: 'staff' } } };
    const res = {};
    const next = jest.fn();

    isStaff(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('Nên chặn và trả về lỗi 403 nếu tài khoản không phải staff', () => {
    const req = { session: { user: { role: 'customer' } } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    isStaff(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });
});

describe('Controller: adminController', () => {
  test('createProduct thành công với đầy đủ dữ liệu', () => {
    const req = { body: { name: 'Áo thun Test', price: 100 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    adminCtrl.createProduct(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
  });

  test('placeOrderForCustomer thành công với đầy đủ dữ liệu', () => {
    const req = { body: { customerEmail: 'khachhang@test.com', items: [] } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    adminCtrl.placeOrderForCustomer(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
  });
});