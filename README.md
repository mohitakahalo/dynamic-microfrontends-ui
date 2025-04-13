# dynamic-microfrontends-ui
Deployment URL: https://dynamic-microfrontends-ui.vercel.app/dashboard

This is a basic setup for implementing a monorepo based micro-frontend architecture for multi-framework web apps. This is built using a flexible architecture that allows for independent development and deployment of microfrontends while maintaining a cohesive developer experience.

## Local Setup Guide

### Step 1: Clone the Repository

```
git clone https://github.com/mohitakahalo/dynamic-microfrontends-ui
cd dynamic-microfrontends-ui
```

### Step 2: Install Dependencies

```
npm install
cd shell-app && npm install && cd..
cd cart-app && npm install && cd..
cd checkout-app && npm install && cd..
```

### Step 3: Start Development Servers

#### Start the shell-app

```
cd shell-app
npm run dev
```

Runs on http://localhost:3000

#### Build the cart-app webcomponents

```
cd cart-app
npm run build:wc
```

Runs on http://localhost:3001/cartApp.js

#### Build the checkout-app webcomponents

```
cd checkout-app
npm run build:wc
```

Runs on http://localhost:3002/checkoutApp.js

Now you can see the dashboard in browser on http://localhost:3000

## Key components

### Orchestrator App: `shell-app` (Next.js)

The main orchestrator app is NextJS application which serves our base app. The base app consists of a dashboard and has a few other components like header, sidebar, footer and the main content which renders the selected micro-frontend app. In short, the shell app:

- Acts as the container/orchestrator
- Handles routing and layout
- Manages shared state using Nanostores
- Dynamically loads microfrontends

### Cart App `cart-app` (React.js) + Checkout App `checkout-app` (Vue.js):

- Built as a web component
- Handles cart & checkout functionality
- Communicates with shell via shared state

### State Management: Nanostores

We have used Nanostores for state management because:

- Lightweight and framework-agnostic
- Supports multiple frameworks (React, Vue)
- Simple API for state sharing between microfrontends
- No complex setup or boilerplate

State is shared between microfrontends using Nanostores.

### Web Components

Both microfrontends are built as web components to:

- Ensure framework independence
- Provide encapsulation
- Enable dynamic loading

### Build Tools

- Vite: Used for building both microfrontends
- Next.js: For the shell app

### Dynamic Loading

- Microfrontends are loaded dynamically based on route.
- The routes are fetched dynamically from the app config and can be edited anytime

### Event Communication

- We have used custom events for communicating between Microfrontends
- All the custom events can be passed to Web Components with payload / context and reused.

### App Configuration

We have used https://designer.mocky.io/ for implementing a mock API which returns the intial configuration. The initial config can be found on this link: https://run.mocky.io/v3/77d1579f-78d6-4e89-ad73-1863a2e7d264

- The initial app config is saved to localstorage if not found initially
- The app config can be edited by clicking on `upload config` button on the dashboard header
- Clear the localstorage if you want to restart the app from initial config.
