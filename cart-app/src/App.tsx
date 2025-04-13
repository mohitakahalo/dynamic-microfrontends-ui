import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const {products} = await response.json()
    setProducts(products.slice(0, 5))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const renderCheckoutApp = () => {
    const event = new CustomEvent('openNestedApp', {
      detail: {id: 'checkout'},
      bubbles: true,
      composed: true
    })
    document.dispatchEvent(event)
  }

  return (
    <div className="App">
      <header className="App-header flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-2xl font-bold">Cart Section</h1>
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="w-full flex flex-col items-start justify-start gap-y-4 p-4 m-4"
          >
            <ul className="w-full flex flex-row items-center justify-start text-sm gap-x-4 border border-gray-300 rounded-lg bg-white">
              <li>
                <img
                  src={product.thumbnail}
                  style={{width: '80px', height: '80px'}}
                  alt={product.title}
                />
              </li>
              <li>{product.title}</li>
              <li>${product.price}</li>
              <li>{product.availabilityStatus}</li>
            </ul>
          </div>
        ))}
        <button
          className="bg-white rounded-md text-black p-2 mx-auto border border-gray-600 cursor-pointer"
          onClick={renderCheckoutApp}
        >
          Checkout
        </button>
      </header>
    </div>
  )
}

export default App
