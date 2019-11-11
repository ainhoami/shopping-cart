import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Products from "./Products"
import Size from "./Size"
import Cart from "./Cart"
function App()
{
  return (
    <Provider store={store}>
      <div className="container">
        <Size/>
        <Products/>
        <Cart/>
      </div>
    </Provider>
  )
}

export default App