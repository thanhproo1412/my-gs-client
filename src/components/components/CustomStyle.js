import React, { useState, useEffect } from 'react';
import Ripples from 'react-ripples';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CustomStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default class CustomStyle {
    render() {
        return (
            <div></div>
        );
    }
}
export const MyButton1 = (props) => {
    return (
        <Ripples color="rgba(255,255,255,0.5)" during={650}>
            <Button className='my-button-1' onClick={props.onClick}>{props.children}</Button>
        </Ripples>
    );
}
export const MyButton1Active = (props) => {
    return (
        <Ripples color="rgba(255,255,255,0.5)" during={650}>
            <Button className='my-button-1 my-button-active' onClick={props.onClick}>{props.children}</Button>
        </Ripples>
    );
}
export const MyButton2 = (props) => {
    return (
        <Ripples>
            <button className='my-button-2 ex-tb' onClick={props.onClick}>{props.children}</button>
        </Ripples>
    )
};
export const MyButton3 = (props) => {
    return (
        <Ripples>
            <button className='my-button-3' onClick={props.onClick}>{props.children}</button>
        </Ripples>
    )
};
export const MyButton4 = (props) => {
    return (
        <Ripples>
            <button className='my-button-4' onClick={props.onClick}>{props.children}</button>
        </Ripples>
    )
};
export const BackToTopArrow = () => {
    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />
    const [showButton, setShowButton] = useState('hide-back-to-top-btn');
    const [scrollY, setScrollY] = useState(0);
    const logit = () => {
        setScrollY(window.pageYOffset)
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
            if (scrollY > 20) {
                setShowButton('show-back-to-top-btn')
            }
            else {
                setShowButton('hide-back-to-top-btn')
            }
            // console.log(scrollY)
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <div onClick={scrollToTop} className={`back-to-top-btn ${showButton}`}>{faArrowUpIcon}
            <Ripples />
        </div>
    )
}
export const YoutubeVideo169 = ({ youtubeLink }) => {
    return (
        <div class="youtube-video-16-9">
            <iframe class="video" src={youtubeLink}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    )
};
export const Image169 = ({ src, alt }) => {
    return (
        <div class="image-16-9">
            <img src={src} alt={alt}/>
        </div>
    )
};
export const Image166 = ({ src, alt }) => {
    return (
        <div class="image-16-6">
            <img src={src} alt={alt}/>
        </div>
    )
};export const Image164 = ({ src, alt }) => {
    return (
        <div class="image-16-4">
            <img src={src} alt={alt}/>
        </div>
    )
};

export const ImageSquare = ({ src, alt }) => {
    return (
        <div class="image-square">
            <img src={src} alt={alt}/>
        </div>
    )
};