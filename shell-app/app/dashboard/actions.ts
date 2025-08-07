export const getConfig = async () => {
  // const resp = await fetcher(`${process.env.NEXT_PUBLIC_MOCK_API_URL}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        headerConfig: [
          {
            id: "clothing",
            path: "/shopping/clothing",
            title: "Clothing",
            active: false
          },
          {
            id: "electronics",
            path: "/shopping/electronics",
            title: "Electronics",
            active: false,
            baseUrl: ""
          },
          {
            id: "mobiles",
            path: "/shopping/mobiles",
            title: "Mobiles",
            active: false,
            baseUrl: ""
          }
        ],
        leftNavConfig: [
          {
            id: "profile",
            path: "/profile",
            title: "Profile",
            active: false,
            baseUrl: ""
          },
          {
            id: "cart",
            path: "/cart",
            title: "Cart",
            active: false,
            baseUrl:
              "https://dynamic-microfrontends-ui.vercel.app/cart-app/cartApp.js",
            webComponent: "cart-app"
          },
          {
            id: "orders",
            path: "/orders",
            title: "Orders",
            active: false,
            baseUrl: ""
          }
        ],
        secondaryConfig: [
          {
            id: "checkout",
            path: "/cart/checkout",
            title: "Checkout",
            active: false,
            baseUrl:
              "https://dynamic-microfrontends-ui.vercel.app/checkout-app/checkoutApp.js",
            webComponent: "checkout-app"
          },
          {
            id: "payment",
            path: "/orders/payment",
            title: "Payment",
            active: false,
            baseUrl: ""
          }
        ]
      });
    }, 2000);
  });
};
