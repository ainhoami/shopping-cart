import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"



export default function (props){
    let arraySums=[]
    const { addProd, prodsCart, subsIt } = useShop()
    // {prodsCart.map(e=>(
    //     arrayid.push(e.id)
            
    //   ))}
    // console.log()
    // function creaSubtotal(){
    //     prodsCart.map(p=>(
    //         arraySums.push(p.sumItemprice)
    //     ))
    //    // const red = (a,b)=> a + b
    //     console.log("arraysums " + arraySums)
    // }
    function createSubtotal(){
        
     
    }
    
    function handleClick(){
    
    //    console.log(Array.from(prodsCart))


    }

    //later sizes. 
    return(
        
<div className="cartContainer">
        
         <div className="cartSections">
         <header>
            header
            <p> {prodsCart.reduce((a,b)=>{
                return a + b.quantity
           },0)} total items</p>
            {/* {console.log(productsCart + "holi")} */}
        </header>
        <div className="cartItems">
             {prodsCart.map((p,i)=>(
                 <div key={"prod" + i} className="oneItem" onClick={e=>handleClick(p.id)}>
                    <p>{p.title}</p>
                    <p>id {p.id}</p>
                    <div className="uine"></div>
                    <p>{parseFloat(p.price).toFixed(2)}</p>
                    <p>{p.quantity}</p>
                    <button className="" onClick={e=>addProd(p.id)}>+</button>
                    <button className="" onClick={e=>subsIt(p.id)}>-</button>
                    <button className="" >X</button>
             {/* <p>{p.sumPrice} sumprice </p> */}
             { console.log(prodsCart + " holi")}
            {/* { console.log("fucking item price sum " + p.sumItemPrice)} */}

                </div>
                ))}

              
               
              
              
         </div>
         <footer>
             footer
           <p>  {prodsCart.reduce((a,b)=>{
                return a + b.sumItemPrice
           },0).toFixed(2)}
         </p>
         </footer>
         </div>
    </div>

    )
}