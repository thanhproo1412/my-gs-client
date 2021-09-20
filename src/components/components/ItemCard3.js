import React from 'react';
import "./css/ItemCard3.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MyButton2 } from './CustomStyle';

export const ItemCard3 = ({ itemLink, name, itemCardUrl, gamePlaform, gameTags, itemCardHoverLink, itemCardHoverInfo }) => {

    AOS.init();  // aos animation

    return (
        <div data-aos="fade-up" className="itemCard3">
            <img className='itemCardImg3' src={itemCardUrl} alt='Game img' />
            <div href={itemLink} className="itemCardTitle3">{name}
                <div href={itemLink} className="itemCardTitle3-2">{name}</div>
                <div className='itemCardInfo3'>{itemCardHoverInfo}</div>
            </div>

            <div className='itemCardButton3'>
                <MyButton2 >All Game</MyButton2>
            </div>
        </div>
    );
}