import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"
// const {add}=useShop()

export default function (props){
    const { prods, addProd, prodsCart } = useShop()
    

    function installments (number, price){
       return number ? ("or " + number + " x " + parseFloat(parseFloat((price/number).toFixed(2))).toFixed(2)): ""
    }

function handleClick(id){

  }    

// console.log(prodsCart)
return(
    <div className="right">
        <header></header>
         <div className="products">
             {prods.map((p,i)=>(
                 <div key={"prod" + i} className="oneproduct" onClick={e=>addProd(p.id)}>
                <img src={`assets/${p.sku}_1.jpg`}/>
               
                    <p>{p.title}</p>
                    <div className="uine"></div>
                    <p>{parseFloat(p.price).toFixed(2)}</p>
                    <p>{installments(p.installments, p.price)}</p>
                    <button className="btn">Add to cart</button>

                </div>
                ))}
         </div>
    </div>


    
)}


