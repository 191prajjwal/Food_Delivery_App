import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/Auth/AuthPage';
import Homepage from './pages/Home/Homepage';
import ProductPage from "./pages/Product/ProductPage"
import CheckoutPage from './pages/Checkout/CheckoutPage';
import AddressPage from './pages/Address/AddressPage';
import PaymentPage from './pages/Payment/PaymentPage';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/Footer';




function App() {
 

  return (
    <> 
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        {/* login signup */}


        <Route path="/home" element={<Homepage/>}/>
        {/* app details and popular restaurants */}


        <Route path="/product" element={<ProductPage/>}/>
        {/* Product details, map, testimonials and all. cart is also there */}

        <Route path="/checkout" element={<CheckoutPage/>}/>    
        {/*order details pricing address , similar restaurants suggestion below*/}

        <Route path="/address" element={<AddressPage/>}/>
        {/* view and add address modal opens to add address*/}


        <Route path="/payment" element={<PaymentPage/>}/>
        {/* payment methods +successfull order */}


        <Route path="/profile" element={<Profile/>}/>
        {/* saved details + edit details + add details about payment and userProfile */}
      </Routes>
      </BrowserRouter>

    <Footer/>
    </>
  )
}

export default App
