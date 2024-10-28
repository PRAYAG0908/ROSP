import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage';
import Cart from './../component/Cart/Cart';
import Navigation from '../component/Navigation/Navigation';
import Footer from '../component/Footer/Footer';
import Product from '../component/Product/Product';
import ProductDetails from '../component/ProductDetails/ProductDetails';
import Checkout from '../component/Checkout/Checkout';
import Order from '../component/Order/Order';
import OrderDetails from '../component/Order/OrderDetails';

const CustomerRoutes = () => {
  return (
    <div>
      
      <div>

      <Navigation/>

      </div>
      <Routes>
      <Route path='/login' element={<HomePage/>}></Route>
      <Route path='/register' element={<HomePage/>}></Route>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        

       
        


      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
