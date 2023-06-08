import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.product_id === item.product_id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        count: updatedCartItems[existingItemIndex].count + 1,
        overall_price: Number(item.main_cost) * (updatedCartItems[existingItemIndex].count + 1)
      };
      setCartItems(updatedCartItems);
    } else {
      const productData = {
        overall_price: Number(item.main_cost) * 1,
        count: 1,
        cp_count: item.cp_count,
        cp_id: item.cp_id,
        main_cost: item.main_cost,
        product_id: item.product_id,
        product_image: item.product_image[0],
        product_name: item.product_name,
        product_volume: item.product_volume,
        queue: 0
      };
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems, productData];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return updatedItems;
      });
    }
  };

  const decreaseFromCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.product_id === item.product_id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].count > 1) {
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          count: updatedCartItems[existingItemIndex].count - 1,
          overall_price: Number(item.main_cost) * (updatedCartItems[existingItemIndex].count - 1)
        };
        setCartItems(updatedCartItems);
      } else {
        updatedCartItems.splice(existingItemIndex, 1);
        setCartItems(updatedCartItems);
      }
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.product_id !== item.product_id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};