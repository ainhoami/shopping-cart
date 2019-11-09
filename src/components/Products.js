import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"


export default function (props){
    const { prods } = useShop()

return(
    <div className="right">
        <header></header>
         <div className="products">
             {prods.map((p,i)=>(
                 <div key={"prod" + i} className="oneproduct">
                {/* <img src={`assets/${p.sku}_1.jpg`}/> */}

                    <p>{p.title}</p>
                    <div className="uine"></div>
                    <p>{p.price}</p>
                    <p>or {p.installments} x {p.installments ? parseFloat((p.price/p.installments).toFixed(2)): ""}</p>
                    <button>Add to cart</button>

                </div>
                ))}
         </div>
    </div>


    
)}


{/* <div key={"product" + i} className="oneproduct">
                <img/>
                <p>{p.title}</p>
                
            </div> */}




{/* <div className="products">
            {prods.map((p,i)=>{
            <p>{p.title}</p>
        })}

        </div> */}
    