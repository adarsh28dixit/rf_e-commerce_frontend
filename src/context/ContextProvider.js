import { createContext, useState } from "react";

export const EcommerceContext = createContext();

export const ContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState([]);

  return (
    <EcommerceContext.Provider value={{cartItems, setCartItems}}>
      {props.children}
    </EcommerceContext.Provider>
  );
};
