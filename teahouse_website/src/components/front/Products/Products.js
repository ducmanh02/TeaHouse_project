import React from 'react'
import './Style.css'
import { useState } from 'react'
import DataProducts from '../../back/Data/DataProducts'
import '../../../App.css'
import Logo from '../../../assets/img/title_base.webp'
import {FaShoppingCart} from 'react-icons/fa'

const Products = () => {
    const sanpham = DataProducts
    const HotTea = sanpham.filter(el => el.type === 'HotTea')
    const Smoothies = sanpham.filter(el => el.type === 'Smoothies')
    const Cake = sanpham.filter(el => el.type === 'Cake')
    console.log(Cake)

    const [activeItem,setActiveItem] = useState([
        {
            type : 'HotTea',
            active : true,
        },
        {
            type : 'HotTea2',
            active : false,
        },
        {
            type : 'Smoothies',
            active : false,
        },
        {
            type : 'Cake',
            active : false,
        }
    ])
    console.log(activeItem)


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
                    <li className='ckeck-list-item active'>
                        <div className='check-list-item-link' >Trà nóng</div>
                    </li>
                    <li className='ckeck-list-item'>
                        <div className='check-list-item-link'>Trà hoa quả</div>
                    </li>
                    <li className='ckeck-list-item'>
                        <div className='check-list-item-link'>Smoothies</div>
                    </li>
                    <li className='check-list-item'>
                        <div className='check-list-item-link'>Bánh ngọt</div>
                    </li>

                </ul>
            </div>
            <div class="list-tea">
                {HotTea.map((el, index) => (
                    <div key={index} class="box-tea">
                        <div class="img-tea">
                            <img src={el.image} alt="" />
                        </div>
                        <div class="tea-info">
                            <div class="info-left">
                                <h3>{el.title.toUpperCase()}</h3>
                                <p>Giá: <strong>{el.price}đ</strong></p>
                            </div>
                            <div class="shopping-cart-button">
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products