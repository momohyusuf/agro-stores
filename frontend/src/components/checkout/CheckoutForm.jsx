import { Input } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Payment from "./Payment";

const CheckoutForm = () => {
  const [checkOutFormData, setCheckOutFormData] = useState({
    name: "",
    email: "",
    deliveryAddress: "",
  });

  const { cartItems, userCartSummary } = useSelector((state) => state.cart);

  //   console.log("My cart items", cartItems);
  //   console.log("My order summary", userCartSummary);

  if (cartItems.length < 1 || userCartSummary < 0) {
    return <Navigate to={"/marketplace"} />;
  }

  return (
    <>
      <form className="grid gap-5">
        <Input
          onChange={(e) =>
            setCheckOutFormData({ ...checkOutFormData, name: e.target.value })
          }
          placeholder="Enter your name"
          size="large"
        />
        <Input
          onChange={(e) =>
            setCheckOutFormData({ ...checkOutFormData, email: e.target.value })
          }
          placeholder="Enter your email"
          size="large"
        />
        <Input
          onChange={(e) =>
            setCheckOutFormData({
              ...checkOutFormData,
              deliveryAddress: e.target.value,
            })
          }
          placeholder="Enter your Delivery address"
          size="large"
        />
      </form>
      <Payment checkOutFormData={checkOutFormData} />
    </>
  );
};

export default CheckoutForm;
