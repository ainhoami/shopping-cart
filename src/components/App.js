import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Products from "./Products"
import Size from "./Size"
function App()
{
  return (
    <Provider store={store}>
      <div className="container">
        <Size/>
        <Products/>
      </div>
    </Provider>
  )
}

export default App