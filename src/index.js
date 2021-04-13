import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// context imports
import { ProductsProvider } from "./context/products_context"
import { FilterProvider } from "./context/filter_context"
import { CartProvider } from "./context/cart_context"
import { UserProvider } from "./context/user_context"

/**
 * Auth0
 * Domain: dev-penxv1w4.us.auth0.com
 * Client ID: TTa8m4dNDAAPcuJOXI2XSu03lpUpIlEw
 */

// authentication imports
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
)
