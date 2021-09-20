import React from 'react';
import "./css/ItemCard.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemCard = ({ itemLink, name, itemCardUrl, ngayPhatHanh, gioPhatHanh, muiGioPhatHanh, itemCardHoverLink, itemCardHoverInfo }) => {

    AOS.init();  // goi. animation cua aos

    return (
        <div data-aos="fade-up" className="itemCard ">
            <a href={itemCardHoverLink} className="itemCardHover">
                <div className="itemCardHoverTitle">Xem chi tiết</div>
                <div className='itemCardHoverInfo'>{itemCardHoverInfo}</div>
            </a>
            <div className='image-wrapper'>
                <img className='itemCardImg' src={itemCardUrl} alt='Game img' />
            </div>
            <div className="itemCardInfo">
                <div className="itemCardName">{name}</div>
                <div className="itemCardDate">
                    <span class="localdateandtime_DateAndTime_2V6GL">{ngayPhatHanh}
                        <span>&nbsp;</span>
                        {gioPhatHanh}
                        <span>&nbsp;{muiGioPhatHanh}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default ItemCard;