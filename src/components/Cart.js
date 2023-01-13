import React, { useContext, useEffect } from "react";
import { EcommerceContext } from "../context/ContextProvider";

export default function Cart({onRemove}) {
  const { cartItems } = useContext(EcommerceContext);

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);
  //const totalQuantity = cartItems.reduce((acc, item) => acc + item, 0);
  
 
  console.log(cartItems.length);
  return (
    <div className="cart-col">
      <header>
        <h3>CART</h3>
        <div><i className="fa fa-shopping-cart"></i></div>
      </header>
      <div className="cart-main">
       

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((s) => {
              return (
                <div className="cart-items" key={s.id}>
                  <img src={s.image} alt="" className="cart-item-image" />
                  <div className="cart-items-info">
                    <strong>{s.name}</strong><strong ><i className="fa fa-close" onClick={() => onRemove(s.id)} style={{color: 'red', float: 'right'}}></i></strong>
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

        {/* <div className="cart-items">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="cart-item-image"
          />
          <div className="cart-items-info">
            <strong>KSL 01</strong>
            <div>by KICKSUP and you</div>
            <p>Rs. 2000/-</p>
          </div>
        </div> */}
      </div>
      <div className="cart-bottom">
      
        <div>
          <strong>Total :</strong> {totalCost}
        </div>
        <button>order now</button>
      </div>
    </div>
  );
}
