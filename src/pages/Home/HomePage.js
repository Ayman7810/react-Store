import React from 'react'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import ProducteCardContainer from '../../components/Producte/ProducteCardContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandCardContainer from '../../components/Brand/BrandCardContainer'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'


const HomePage = () => {
  return (
    <div style={{background:'#f8fffe'}} >
      <NavBarLogin/>
      <Slider/>
      <HomeCategory/>
      <ProducteCardContainer  pathCard={'producte-detalis/:id'} title ='الاكثر مبيعاً' btntitle="المزيد"  path='/productes-page'/>
      <DiscountSection/>
      <ProducteCardContainer pathCard={'producte-detalis/:id'} title ='أحدث المنتجات' btntitle="المزيد"  path='/productes-page'/>
      <BrandCardContainer  title ='أشهر الماركات' btntitle="المزيد" path='/brands-page' />
 
    </div>
  )
}

export default HomePage
