import React from 'react'
import './Style.css'
import DataProducts from '../../back/Data/DataProducts'

import Logo from '../../../assets/img/title_base.webp'

const Products = () => {
  const sanpham = DataProducts
  const HotTea = sanpham.filter(el => el.type === 'HotTea')
  const Smoothies = sanpham.filter(el => el.type === 'Smoothies')
  const Cake = sanpham.filter(el => el.type === 'Cake')
  console.log(Cake)


    return (
    <div>
        <div className="Menu-item">
      <div className="product--content">
        <div className="content-img">
          <img src={Logo} alt="" />
        </div>
        <div className="content-title">
          <h1>MENU HÔM NAY</h1>
        </div>
      </div>
      <ul className="check-list">
        <di className='ckeck-list-item'>Trà nóng</di>
        <li className='check-list-item'>Trà hoa quả</li>
        <li>Nước ép</li>
        <li>Bánh ngọt</li>
      </ul>
      </div>
    </div>
  )
}

export default Products