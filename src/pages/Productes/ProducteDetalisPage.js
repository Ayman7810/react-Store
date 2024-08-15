import React from 'react'
import CategoeyHeader from '../../components/Categoey/CategoeyHeader'
import ProducteDetalis from '../../components/Producte/ProducteDetalis'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const ProducteDetalisPage = () => {
  return (
    <div>
 <NavBarLogin />
    <div style={{minHeight:'650px'}}>
      <CategoeyHeader/>
      <ProducteDetalis/>
      
    </div>
    </div>
  )
}

export default ProducteDetalisPage
