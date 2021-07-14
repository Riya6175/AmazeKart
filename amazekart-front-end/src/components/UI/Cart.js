import React from "react";
import { IoIosCart } from "react-icons/io";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          width: "15px",
          height: "15px",
          fontSize: "12px",
          textAlign: "center",
          alignSelf: "center",
          top: "-14px",
          right: "3px",
        }}
      >
        {props.count}
      </span>
      <ShoppingCartIcon />
    </div>
  );
};

export default Cart;