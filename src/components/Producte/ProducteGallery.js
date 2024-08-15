import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import BtnRight from './BtnRight'
import BtnLeft from './BtnLeft'
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from '../../images/mobile.png'
import mobile2 from '../../images/mobile1.png'
import mobile3 from '../../images/mobile2.png'
const ProducteGallery = () => {
    const images = [
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile2}`,
        },
        {
            original: `${mobile3}`,
        },
    ];
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2 mt-4">
        <ReactImageGallery items={images}
            defaultImage={mobile}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={BtnRight}
            renderLeftNav={BtnLeft}
        />
    </div>
  )
}

export default ProducteGallery
