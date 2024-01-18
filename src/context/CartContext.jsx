import React, { useState, useContext } from "react"

export const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

function CartProvider({children}) {
    const [cart, setCart]= useState([])
    const clearCart = ()=>setCart([]);


    const removeProduct = (id)=> setCart(cart.filter(product=> product.id !== id))
    
    const isInCart = (id)=>cart.find(product => product.id === id) ? true: false;

    const addProduct = (product, newQuantity) =>{
        if(isInCart(product.id)){
         const carritoActualizado = cart.map((prod)=>{
             if(prod.id === product.id){
                 return {...prod, quantity:prod.quantity + newQuantity}
             }else{
                 return prod
             }
         })
         setCart(carritoActualizado )
            
        }else{
         setCart([...cart,  {...product, quantity: newQuantity} ])
        }
     }

    const totalPrice = ()=>{
        return cart.reduce((prev, act)=> prev + act.quantity * act.price, 0)
    }

   
    
    return(
        <CartContext.Provider value={{
            clearCart,
            removeProduct,
            addProduct,
            totalPrice,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider