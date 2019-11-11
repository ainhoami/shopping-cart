import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"


export default function (props){
    const { prods, addProd } = useShop()
    
    

    function installments (number, price){
       return number ? ("or " + number + " x " + parseFloat(parseFloat((price/number).toFixed(2))).toFixed(2)): ""
    }

function handleClick(id){
addProd(id)
  }    


// console.log(prodsCart)
return(
    <div className="right">
        <div className="header">
            <p>{prods.length} Product(s) found.</p>
            <div>
            <label id="order">
                order by
            </label>
            <select id="order">
            <option selected >select</option> 
        <option value="lowest" >Lowest to highest </option> 
        <option value="high">Highest to lowest</option>
            </select>
            </div>
           
        </div>
         <div className="products">
             {prods.map((p,i)=>(
                 <div key={"prod" + i} className="oneproduct" onClick={e=>handleClick(p.id)}>
                <img src={`assets/${p.sku}_1.jpg`}/>
               
                    <p>{p.title}</p>
                    <div className="uine"></div>
                    <div className="priceandinstallm">
                        <p className="orange">{parseFloat(p.price).toFixed(2)}</p>
                        <p className="grey">{installments(p.installments, p.price)}</p>
                    </div>
                    <button className="btn">Add to cart</button>

                </div>
                ))}
         </div>
    </div>


    
)}


