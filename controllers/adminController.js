// controllers/adminController.js
'use strict';

// Xử lý tạo sản phẩm (CRUD)
exports.createProduct = (req, res) => {
  // Giả lập logic lưu sản phẩm vào database
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ success: false, message: 'Thiếu thông tin sản phẩm' });
  }
  res.status(201).json({ success: true, message: 'Staff đã thêm sản phẩm thành công', product: { name, price } });
};

// Xử lý order đơn hàng cho khách (Customer)
exports.placeOrderForCustomer = (req, res) => {
  // Giả lập logic staff đặt hàng giùm khách
  const { customerEmail, items } = req.body;
  if (!customerEmail || !items) {
    return res.status(400).json({ success: false, message: 'Thiếu thông tin đơn hàng' });
  }
  res.status(201).json({ success: true, message: `Staff đã đặt hàng thành công cho khách: ${customerEmail}` });
};