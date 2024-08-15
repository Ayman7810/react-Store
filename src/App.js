import React from 'react'
import HomePage from './pages/Home/HomePage'
import {  BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import NavBarLogin from './components/Uitilty/NavBarLogin'
import Footer from './components/Uitilty/Footer'
import LoginPage from './pages/Auth/LoginPage'
import RegesterPage from './pages/Auth/RegesterPage'
import CategoryPage from './pages/Categorise/CategoryPage'
import ProductesPage from './pages/Productes/ProductesPage'
import ProducteDetalisPage from './pages/Productes/ProducteDetalisPage'
import BrandsPage from './pages/BrandsPage/BrandsPage'

import CartPage from './pages/Cart/CartPage'
import PayMethodPage from './pages/PayMethod/PayMethodPage'
import AdminAllProductesPage from './pages/Admin/AdminAllProductesPage'
import AdminAllOrdersPage from './pages/Admin/AdminAllOrdersPage'
import AdminAddBrandPage from './pages/Admin/AdminAddBrandPage'
import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './pages/Admin/AdminAddSubCategoryPage'
import AdminAddProductsPage from './pages/Admin/AdminAddProductsPage'
import AdminOrderDetalisPage from './pages/Admin/AdminOrderDetalisPage'
import UserAllOrdersPage from './pages/User/UserAllOrdersPage'
import UserFavoriteProductsPage from './pages/User/UserFavoriteProductsPage'
import UserAllAddresPage from './pages/User/UserAllAddresPage'

import UserEditAddressPage from './pages/User/UserEditAddressPage'

import UserAddAddressPage from './pages/User/UserAddAddressPage'

import UserProfilePage from './pages/User/UserProfilePage'

const App = () => {
  return (
    <div className='text-center'>
      
      <HashRouter>
      <Routes>
        <Route>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/login' element={ <LoginPage/>}/>
          <Route path='/regester' element={ <RegesterPage/>}/>
          <Route path='/category-page' element={ <CategoryPage/>}/>
          <Route path='/brands-page' element={<BrandsPage/>}/>
          <Route path='/productes-page' element={<ProductesPage/>}/>
          <Route path='/producte-detalis/:id' element={<ProducteDetalisPage/>}/>
          <Route path='/cart-page' element={<CartPage/>}/>
          <Route path='/pay-methde-page' element={<PayMethodPage/>}/>
         
          {/* Admin */}
          <Route path='/Admin/all-productes' element={<AdminAllProductesPage/>}/>
          <Route path='/Admin/all-orders' element={<AdminAllOrdersPage/>}/>
          <Route path='/Admin/all-orders/:id' element={<AdminOrderDetalisPage/>}/>
          <Route path='/Admin/add-brand' element={<AdminAddBrandPage/>}/>
          <Route path='/Admin/add-category' element={<AdminAddCategoryPage/>}/>
          <Route path='/Admin/add-sub-category' element={<AdminAddSubCategoryPage/>}/>
          <Route path='/Admin/add-Products' element={<AdminAddProductsPage/>}/>

          {/* User */}
          <Route path='/User/all-orders' element={<UserAllOrdersPage/>}/>
          <Route path='/User/favorite-products' element={<UserFavoriteProductsPage/>}/>
          <Route path='/User/addresses' element={<UserAllAddresPage/>}/>
          <Route path='/User/add-address' element={<UserAddAddressPage/>}/>
          <Route path='/User/edit-address' element={<UserEditAddressPage/>}/>
          <Route path='/User/Profile' element={<UserProfilePage/>}/>

        </Route>
      </Routes>
      </HashRouter>
      <Footer/>

       
    </div>
  )
}

export default App
