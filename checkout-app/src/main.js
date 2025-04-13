import './assets/main.css'

import {createApp, defineCustomElement} from 'vue'
import App from './App.vue'

// Create the Vue app
const app = createApp(App)

// Convert the Vue app to a web component
const CheckoutApp = defineCustomElement({
  ...app._component,
  styles: app._component.styles || []
})

// Define the custom element
customElements.define('checkout-app', CheckoutApp)
