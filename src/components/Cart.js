import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"
import "font-awesome/css/font-awesome.min.css"


export default function (props){
    const { addProd, prodsCart, subsIt, deleteProduct , openclose, openc} = useShop()
    // const [open, setOpen]=useState(false)
    // const {cart, openCart, closeCart} = useCart()


let arrayinstall =[]
 prodsCart.map(e=>{
    arrayinstall.push(e.installments)
})
function installments(number, subtotal){
    if (subtotal!=0)
    {
        return number ? ("or up to " + number + " x " + parseFloat(parseFloat((subtotal/number).toFixed(2))).toFixed(2)): ""
    }
    

}
// openclose(true)
console.log(openc+ " openclose")
    return(
        
<div className= "open cartContainer">
        
         <div className={openc?"open cartSections": "closed cartSection"}>
         <header>
             
         <i className="fa fa-shopping-cart cartopen"><p className="totalItemsup">{prodsCart.reduce((a,b)=>{
                return a + b.quantity
           },0)}</p></i>
           
         
         <p> Cart</p>
        </header>
        <div className="cartItems">
             {prodsCart.map((p,i)=>(
                 <div key={"prod" + i} className="oneItem" >
                     <img className="smallImg" src={`assets/${p.sku}_2.jpg`}/>

                     <div className="productDetails">
                        <p >{p.title}</p>
                        <p><span className="availableS">{p.availableSizes.join(", ")}</span> {p.style}</p>
                        <p>Quantity: {p.quantity}</p>
                    </div>
                    
                    <div className="buttons">
                    <button className="xclose" onClick={e=>deleteProduct(p.id)}>X</button>
                    <p>{p.currencyFormat}  {parseFloat(p.price).toFixed(2)}</p>
                    <div className="plmin">
                        <button className="" onClick={e=>subsIt(p.id)}>-</button>
                        <button className="" onClick={e=>addProd(p.id)}>+</button>
                    </div>
                    </div>
                
                </div>
                ))}
         </div>
        
         <footer>
             <div>
                <p>SUBTOTAL</p>
                <div className="subt">
                    <p> $ {prodsCart.reduce((a,b)=>{
                            return a + b.sumItemPrice
                    },0).toFixed(2)} </p>

                    <p>{installments(Math.max(...arrayinstall), prodsCart.reduce((a,b)=>{
                            return a + b.sumItemPrice
                    },0).toFixed(2))}</p>

                </div>
            </div>
            <button>CHECKOUT</button>
         </footer>
         
         </div>
         <div className={!openc? "opened cartOpened" : "closed cartOpened"} onClick={e=>!openc? openclose(true):openclose(false)}>
         
                <i className="fa fa-shopping-cart"><p className="totalItems">{prodsCart.reduce((a,b)=>{
                return a + b.quantity
           },0)}</p></i>
                
        </div>

        <div className={openc? "opened square" : "closed square"} onClick={e=>!openc?openclose(true):openclose(false)}>
                X
        </div>
    </div>

    )
}