import React, { useContext, useEffect } from "react";
import { EcommerceContext } from "../context/ContextProvider";

export default function Cart({ onRemove }) {
  const { cartItems } = useContext(EcommerceContext);

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);
  //const totalQuantity = cartItems.reduce((acc, item) => acc + item, 0);

  console.log(cartItems.length);
  return (
    <div className="cart-col">
      <header>
        <h3>CART</h3>
        <div>
          <i className="fa fa-shopping-cart"></i>
        </div>
      </header>
      <div className="cart-main">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((s) => {
              return (
                <div className="cart-items" key={s.id}>
                  <strong>
                    <i
                      className="fa fa-close"
                      onClick={() => onRemove(s.id)}
                      style={{ color: "red" }}
                    ></i>
                  </strong>
                  <img src={s.image} alt="" className="cart-item-image" />
                  <div className="cart-items-info">
                    <strong>{s.name}</strong>
                    <div>{s.description}</div>
                    <p>Rs. {s.price}/-</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="empty-cart-text">What's stopping you?</div>
        )}

        
      </div>
      <div className="cart-bottom">
        <div>
          <strong>Total :</strong> ₹{totalCost}/-
        </div>
        <button>order now</button>
      </div>
    </div>
  );
}
