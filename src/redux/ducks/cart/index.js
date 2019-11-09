import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

const GET_PRODUCTS = "cart/GET_PRODUCTS"

const initialState = {
    products:[]
}

export default function (state = initialState, action){

    switch (action.type) {
        case GET_PRODUCTS:
          return { ...state, products: action.payload }
        default:
          return state
      }

}

function getProducts(){
    return dispatch =>{
        Axios.get("/products").then(resp =>
            {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: resp.data
                })
            })
    }
}

export function useShop(){
    const dispatch = useDispatch()
    const prods = useSelector(appState => appState.cartReducer.products)
    const fetch = () => dispatch(getProducts())

    useEffect(() => {
        fetch()
      }, [])

      return { prods }

  }