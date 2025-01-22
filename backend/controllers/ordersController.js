import { OrderModel } from "../models/orderModel.js";

const createUserOrder = async (req, res) => {
  const { reference, checkOutFormData, userCartSummary, cartItems } = req.body;

  if (!reference) {
    return res
      .status(400)
      .send({ message: "Please provide transaction reference" });
  }
  if (!checkOutFormData) {
    return res.status(400).send({ message: "Please provide customer details" });
  }

  if (!userCartSummary) {
    return res.status(400).send({ message: "Please cart summary is required" });
  }
  if (!cartItems) {
    return res
      .status(400)
      .send({ message: "Please provide customer cart items" });
  }

  try {
    const result = await OrderModel.create({
      transaction_reference: {
        transaction: reference.transaction,
        status: reference.status,
        message: reference.message,
        trxref: reference.trxref,
      },
      customer_delivery_info: checkOutFormData,
      user_cart_summary: userCartSummary,
      cartItems: cartItems,
    });

    res
      .status(201)
      .send({ data: result, message: "Order created successfully" });
  } catch (error) {
    return res.status(400).send({ error, message: "Sorry an error occurred" });
  }
};

export { createUserOrder };
