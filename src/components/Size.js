import React, { useState } from "react"
import { useShop } from "../redux/ducks/cart"



export default function (props){
    return(
        <div className="sizes">
            <h3>Sizes:</h3>
            <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>Ml</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>


            </ul>
        </div>
    )
}