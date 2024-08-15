import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">
        <Link to="/User/all-orders" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                اداره الطلبات
            </div>
        </Link>
        <Link to="/User/favorite-products" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                المنتجات المفضلة
            </div>
        </Link>
        <Link to="/User/addresses" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                العنوانين الشخصية
            </div>
        </Link>

        <Link to="/User/Profile" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                الملف الشخصي
            </div>
        </Link>


    </div>
</div>
  )
}

export default UserSideBar
