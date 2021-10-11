import React, { useState } from 'react';
import './css/About.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCard3 } from './components/ItemCard3'

export const About = () => {

    return (
        <React.Fragment>
            <div className="about-page">
                <div className="about-background">
                    <img src='http://innetvn.com/vnt_upload/weblink/employment-screening-company-about.jpg' alt='' />
                    <div className='about-title'>
                        About us
                    </div>
                </div>
                <Container>
                    <div className='about-sesion-content'>
                        <p>Purus non enim praesent elementum facilisis.
                            <span className='text-decoration-line-through'>Neque vitae tempus quam
                                pellentesque. Facilisis mauris s
                                it amet</span>
                            <span className='text-decoration-underline'> massa vitae tortor lorem sit lacinia. Rhoncus dolor
                                purus non enim praesent elementum facilisis leo. Quisque non
                                tellus orci ac auctor augue mauris.</span>
                            Lobortis mattis aliquam faucibus purus. Cras pulvinar mattis nunc
                            sed blandit libero volutpat. Amet porttitor eget dolor morbi non
                            arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna neque
                            viverra. Molestie at elementum eu facilisis sed. In aliquam sem
                            fringilla ut morbi. Ut placerat orci nulla pellentesque dignissim
                            enim sit amet venenatis.
                            <span className="yellow-text">Lacus sed turpis tincidunt id aliquet
                                risus feugiat in diam sit at ultrices. Nec tincidunt praesent semper
                                feugiat nibh sed pulvinar ornare aenean.</span></p>
                        <a className='mb-4' href='#'>View more</a>
                        <p>Purus non enim praesent elementum facilisis.
                            <span className='text-decoration-line-through'>Neque vitae tempus quam
                                pellentesque. Facilisis mauris s
                                it amet</span>
                            <span className='text-decoration-underline'> massa vitae tortor lorem sit lacinia. Rhoncus dolor
                                purus non enim praesent elementum facilisis leo. Quisque non
                                tellus orci ac auctor augue mauris.</span>
                            Lobortis mattis aliquam faucibus purus. Cras pulvinar mattis nunc
                            sed blandit libero volutpat. Amet porttitor eget dolor morbi non
                            arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna neque
                            viverra. Molestie at elementum eu facilisis sed. In aliquam sem
                            fringilla ut morbi. Ut placerat orci nulla pellentesque dignissim
                            enim sit amet venenatis.
                            <span className="yellow-text">Lacus sed turpis tincidunt id aliquet
                                risus feugiat in diam sit at ultrices. Nec tincidunt praesent semper
                                feugiat nibh sed pulvinar ornare aenean.</span></p>
                        <a className='mb-4' href='#'>View more</a>
                        <Row>
                            <Col md={4}>
                                <ItemCard3 name='something' itemLink='link' itemCardUrl='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' itemCardHoverInfo='info' />
                            </Col>
                            <Col md={4}>
                                <ItemCard3 name='something' itemLink='link' itemCardUrl='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' itemCardHoverInfo='info' />
                            </Col>
                            <Col md={4}>
                                <ItemCard3 name='something' itemLink='link' itemCardUrl='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' itemCardHoverInfo='info' />
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    );
}