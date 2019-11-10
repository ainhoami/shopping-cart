import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import produce from "immer"

const GET_PRODUCTS = "db/GET_PRODUCTS"
const ADD_ITEMS="cart/ADD_ITEMS"
const SUBS_ITEMS="cart/SUBS_ITEMS"


const initialState = {
    products:[],
    productsCart:[]
}
export default function (state = initialState, action){

    switch (action.type) {
        case GET_PRODUCTS:
          return { ...state, products: action.payload }
          case ADD_ITEMS:
              let checkItem = state.productsCart.find (item=>item.id===action.payload.id)
             if(checkItem)
             {
                 console.log("iguales")
                 checkItem.quantity = checkItem.quantity +1
                 checkItem.sumItemPrice = checkItem.price * checkItem.quantity
               //  checkItem.price = checkItem.price + checkItem.price
                 return {...state, productsCart: [...state.productsCart] } 
             }else{
                return { ...state, productsCart: [ ...state.productsCart, action.payload ] }

             }
            case SUBS_ITEMS:
                    let checkItem2 = state.productsCart.find (item=>item.id===action.payload.id)
                    if(checkItem2 && checkItem2.quantity>1)
                    {
                        console.log("iguales")
                        checkItem2.quantity = checkItem2.quantity - 1
                        checkItem2.sumItemPrice = checkItem2.price * checkItem2.quantity
                      //  checkItem.price = checkItem.price + checkItem.price
                        return {...state, productsCart: [...state.productsCart] } 
                    }
                    // else{
                    //    return { ...state, productsCart: [ ...state.productsCart, action.payload ] }

                    // }
                // console.log(state.productsCart)
                // console.log("payload" + action.payload.id)
              
            
               
        default:
          return state
      }

}

function getProducts(){
    return dispatch =>{
        Axios.get("/products/").then(resp =>
            {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: resp.data
                })
            })
    }
}

 function addToCart(idProduct){
       return dispatch =>{
        Axios.get("/products/"+ idProduct).then(resp =>
            {
                dispatch({
                    type: ADD_ITEMS,
                    payload:{ ...resp.data, quantity: 1, sumItemPrice:resp.data.price }
                    
                })
            })
    }
    
}

function subsItem(idProduct){
    return dispatch =>{
        Axios.get("/products/"+ idProduct).then(resp =>
            {
                dispatch({
                    type: SUBS_ITEMS,
                    payload:{ ...resp.data, quantity: 1, sumItemPrice:resp.data.price }
                    
                })
            })
    }
    
}


export function useShop(){
    const dispatch = useDispatch()
    const prods = useSelector(appState => appState.cartReducer.products)
    const prodsCart = useSelector(appState => appState.cartReducer.productsCart)
    const fetch = () => dispatch(getProducts())
    const addProd=(id) => dispatch(addToCart(id))
    const subsIt=(id) => dispatch(subsItem(id))
    
    useEffect(() => {
        fetch()
      }, [])
    //   console.log(prodsCart)
      return { prods, addProd, prodsCart, subsIt }
     
  }