// import React, { useState } from "react"
// import { useShop } from "../redux/ducks/cart"


// export default function (props){
//     let arrayid=[]
//     const { prods, prodsCart } = useShop()
//     // {prodsCart.map(e=>(
//     //     arrayid.push(e.id)
            
//     //   ))}
//     // console.log()
//     // console.log("includes" + arrayid.includes())

    
//     function handleClick(){
    
//     //    console.log(Array.from(prodsCart))


//     }
//     //later sizes. 
//     return(
        
// <div className="sizes">
//         <header></header>
//          <div className="">
//              {prodsCart.map((p,i)=>(
//                  <div key={"prod" + i} className="oneproduct" onClick={e=>handleClick(p.id)}>
//                     <p>{p.title}</p>
//                    <p>id {p.id}</p>
//                     <div className="uine"></div>
//                     <p>{parseFloat(p.price).toFixed(2)}</p>
//                     <p>{p.quantity}</p>
//                     <button className="btn">Add to cart</button>

//                 </div>
//                 ))}

//                { console.log(prodsCart)}
//          </div>
//     </div>

//     )
// }