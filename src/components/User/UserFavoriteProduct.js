import React from 'react'
import { Pagination, Row } from 'react-bootstrap'
import ProducteCard from '../Producte/ProducteCard'

const UserFavoriteProduct = () => {
  return (
    <div>
    <div className="admin-content-text pb-4">قائمة المفضلة</div>
    <Row className='justify-content-start'>
        <ProducteCard />
        <ProducteCard />
        <ProducteCard />
        <ProducteCard />
        <ProducteCard />
        <ProducteCard />
        <ProducteCard />
        <ProducteCard />
        
    </Row>
    <Pagination />
</div>
  )
}

export default UserFavoriteProduct
