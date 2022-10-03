import React, { createContext, useState, useContext } from 'react'
const CartContext = createContext();

export const useCartContext = () => useContext( CartContext );

const CartProvider = ( { children } ) => {

  const [cart, setCart] = useState([]);


  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
      }));
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  }
  console.log('carrito: ', cart);



  return (
    <CartContext.Provider value= {{
      clearCart,
      isInCart,
      removeItem,
      addProduct
      }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider