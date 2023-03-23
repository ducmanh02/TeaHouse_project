import React from 'react'
import './Style.css'
import '../../../App.css'
import TitleBase from '../../../assets/img/title_base_2.webp'

import BodyTimePicture from '../../../assets/img/body__time-picture.webp'

const Booking = () => {
  return (
    <div className='product--content'>
      <div className="info-time">
      <div className="time-left">
        <div className="time-content">
          <div className="time-img">
            <img src={TitleBase} alt="" />
          </div>
          <h1>THỜI GIAN MỞ CỬA</h1>
          <p>
            "Cà phê nhé" - Một lời hạn rất riêng của người việt. Một lời ngỏ
            mộc mạc để mình ngồi lại bên nhau và chia sẻ câu chuyện riêng của
            mình. Tea House hẹn gặp bạn chốn quen thuộc.
          </p>
          <div className="time-open">
            <h6>T2-T6: 8h30 - 21h30</h6>
            <h6>T7-CN: 8h00 - 22h00</h6>
          </div>
          <div className="order-btn">
            <button>Đặt bàn ngay</button>
          </div>
          
        </div>
      </div>
      <div className="img-right">
        <img src={BodyTimePicture} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Booking