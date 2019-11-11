import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"
import "font-awesome/css/font-awesome.min.css"


export default function (props){
    const { addProd, prodsCart, subsIt, deleteProduct } = useShop()
    const [open, setOpen]=useState(false)
    

let arrayinstall =[]
 prodsCart.map(e=>{
    arrayinstall.push(e.installments)
})
console.log(Math.max(...arrayinstall))
function installments(number, subtotal){
    if (subtotal!=0)
    {
        return number ? ("or up to " + number + " x " + parseFloat(parseFloat((subtotal/number).toFixed(2))).toFixed(2)): ""
    }
    

}
    return(
        
<div className= "open cartContainer">
        
         <div className={open?"open cartSections": "closed cartSection"}>
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
                        <p>{p.description}</p>
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
         <div className={!open? "opened cartOpened" : "closed cartOpened"} onClick={e=>!open?setOpen(true):setOpen(false)}>
         
                <i className="fa fa-shopping-cart"><p className="totalItems">{prodsCart.reduce((a,b)=>{
                return a + b.quantity
           },0)}</p></i>
                
        </div>

        <div className={open? "opened square" : "closed square"} onClick={e=>!open?setOpen(true):setOpen(false)}>
                X
        </div>
    </div>

    )
}