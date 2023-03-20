import React from 'react'
import './Style.css'

import Slider from '../../../assets/img/slider_1.webp'
import NewTitle from '../../../assets/img/title_base.webp'
import Product1 from '../../../assets/img/product-1.webp'
import Product2 from '../../../assets/img/product-2.webp'
import Product3 from '../../../assets/img/product-3.webp'
import Product4 from '../../../assets/img/product-4.webp'

const Intro = () => {
  return (
    <div>
      <div className="slider">
      <img id="slider" src={Slider} alt="" />
    </div>
    <div className="list__product">
      <div className="product--content">
        <div className="content-img">
          <img src={NewTitle} alt="" />
        </div>
        <div id="content-title" className="content-title">
          <h1>DANH MỤC SẢN PHẨM</h1>
        </div>
      </div>
      <div className="product--item">
        <ul className="wrapper-item">
          <li className="wrapper-box">
            <img src={Product1} alt="" />
            <h2>Trà nóng</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product2} alt="" />
            <h2>Trà hoa quả</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product3} alt="" />
            <h2>Nước ép</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product4} alt="" />
            <h2>Bánh ngọt</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product1} alt="" />
            <h2>Trà hoàng kim</h2>
          </li>
          <li className="wrapper-box">
            <img src={Product1} alt="" />
            <h2>Trà dâu</h2>
          </li>
        </ul>
      </div>
    </div>
    
    </div>
  )
}

export default Intro