import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// context imports
import { ProductsProvider } from "./context/products_context"
import { FilterProvider } from "./context/filter_context"
import { CartProvider } from "./context/cart_context"
import { UserProvider } from "./context/user_context"
import { Auth0Provider } from "@auth0/auth0-react"

/**
 * Auth0
 * Domain: dev-penxv1w4.us.auth0.com
 * Client ID: TTa8m4dNDAAPcuJOXI2XSu03lpUpIlEw
 * Secret: dd1h6S90w_bVLJVOdCP-M6k_Uj2xdSq3-i9jqyhrb1HvfkMUdJXHpuuA_2Fz3UMi
 */

// authentication imports
// import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <Auth0Provider
    domain="dev-penxv1w4.us.auth0.com"
    clientId="TTa8m4dNDAAPcuJOXI2XSu03lpUpIlEw"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById("root")
)
