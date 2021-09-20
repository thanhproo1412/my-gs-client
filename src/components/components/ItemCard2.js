import React from 'react';
import "./css/ItemCard2.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTags } from '@fortawesome/free-solid-svg-icons';

export const ItemCard2 = ({ itemLink, name, itemCardUrl, gamePlaform, gameTags, itemCardHoverLink, itemCardHoverInfo }) => {

    const faDesktopIcon = <FontAwesomeIcon icon={faDesktop} />
    const faTagsIcon = <FontAwesomeIcon icon={faTags} />

    AOS.init();  // aos animation

    return (
        <div data-aos="fade-up" className="itemCard2">
            <a href={itemCardHoverLink} className="itemCardHover2">
                    <div className="itemCardHoverTitle2">{name}</div>
                    <div className='itemCardHoverInfo2'>{itemCardHoverInfo}</div>
            </a>
            <div className='image-wrapper2'>
                <img className='itemCardImg2' src={itemCardUrl} alt='Game img' />
            </div>
            <div className="itemCardInfo2">
                <div className="itemCardName2">{name}</div>
                <div className="itemCardDate2 d-flex">
                    <div className='gamePlaform2'>
                        {faDesktopIcon}<span>{gamePlaform}game plaform PS4 PC</span>
                    </div>
                    <div className='gameTags2'>
                        {faTagsIcon}<span>{gameTags} game tag</span>
                    </div>
                </div>
            </div>
        </div>
    );
}