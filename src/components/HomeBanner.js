import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyButton2 } from "./components/CustomStyle";
import { Container, Row, Col } from 'react-bootstrap'

const Styles = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
  .my-banner {
  }
  .my-carousel {
  }
  ,
  my-carousel-item {
  }
  .my-carousel-item img {
  }
  .my-carousel-caption{
      width:100%;
    position:absolute;
    top:-5%;
    text-align:center;
    color:white;
    padding:15%;
  }
  .my-carousel-caption h3{
    font-family: 'Carter One', cursive;
    text-transform: uppercase;
    font-weight:1000;
    font-size:3em;
  }
  .my-carousel-caption p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;  
    -webkit-box-orient: vertical;
  }
  .my-carousel-item img{
    filter: brightness(70%)
  }
`;

export const HomeBanner = () => (
    <Styles>
        <div className="my-banner">
            <div className="sixteen-by-nine.aspect-ratio"></div>
            <Carousel
                className="my-carousel"
                touch={true}
                fade={true}
                slide={true}
                interval="5000"
            >
                <Carousel.Item className="my-carousel-item">
                    <img alt='' className="d-block w-100" src={process.env.PUBLIC_URL + "/imgs/background/banner1.jpg"} />
                    <Carousel.Caption bsPrefix='my-carousel-caption'>
                        <h3>BATTLEFIELD</h3>
                        <p className='mt-md-4'>Với Engine đồ họa Frostbite, Battlefield 4 sẽ khoác lên
                            mình một lớp áo hào nhoáng với những hiệu ứng vật lí như
                            va chạm, cháy nổ cũng như hình ảnh chân thực. Sẽ có những
                            điểm mới lạ như thủy quân hay những nhân vật nữ. Multiplayer
                            rất hoành tráng, quy mô và hấp đẫn hơn bao giờ hết.</p>
                        <Container>
                            <Row className='mt-md-5'>
                                <Col className='d-flex flex-row-reverse'><MyButton2>Chi Tiết</MyButton2></Col>
                                <Col className='d-flex flex-row'><MyButton2>Mua Ngay</MyButton2></Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img alt='' className="d-block w-100" src={process.env.PUBLIC_URL + "/imgs/background/banner2.jpg"} />
                    <Carousel.Caption bsPrefix='my-carousel-caption'>
                        <h3>BATTLEFIELD</h3>
                        <p className='mt-md-4'>Với Engine đồ họa Frostbite, Battlefield 4 sẽ khoác lên
                            mình một lớp áo hào nhoáng với những hiệu ứng vật lí như
                            va chạm, cháy nổ cũng như hình ảnh chân thực. Sẽ có những
                            điểm mới lạ như thủy quân hay những nhân vật nữ. Multiplayer
                            rất hoành tráng, quy mô và hấp đẫn hơn bao giờ hết.</p>
                        <Container>
                            <Row className='mt-md-5'>
                                <Col className='d-flex flex-row-reverse'><MyButton2>Chi Tiết</MyButton2></Col>
                                <Col className='d-flex flex-row'><MyButton2>Mua Ngay</MyButton2></Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img alt='' className="d-block w-100" src={process.env.PUBLIC_URL + "/imgs/background/banner3.jpg"} />
                    <Carousel.Caption bsPrefix='my-carousel-caption'>
                        <h3>BATTLEFIELD</h3>
                        <p className='mt-md-4'>Với Engine đồ họa Frostbite, Battlefield 4 sẽ khoác lên
                            mình một lớp áo hào nhoáng với những hiệu ứng vật lí như
                            va chạm, cháy nổ cũng như hình ảnh chân thực. Sẽ có những
                            điểm mới lạ như thủy quân hay những nhân vật nữ. Multiplayer
                            rất hoành tráng, quy mô và hấp đẫn hơn bao giờ hết.</p>
                        <Container>
                            <Row className='mt-md-5'>
                                <Col className='d-flex flex-row-reverse'><MyButton2>Chi Tiết</MyButton2></Col>
                                <Col className='d-flex flex-row'><MyButton2>Mua Ngay</MyButton2></Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </Styles>
);
