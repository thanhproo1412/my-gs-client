import React, { useState } from 'react';
import './css/News.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyButton4 } from './components/CustomStyle'


export const News = () => {

    return (
        <React.Fragment>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.6442085895914!2d106.73223882915308!3d10.843660316675725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527daf11916bf%3A0xe6c2b66b0fd1205c!2zNTIvMTcgS2hhIFbhuqFuIEPDom4sIEhp4buHcCBCw6xuaCBDaMOhbmgsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1633772359312!5m2!1svi!2sus" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <Container className='mt-5 mb-4'>
                <div className="contact-form-title">
                    Hãy liên hệ với chúng tôi
                </div>
                <Form>
                    <Row>
                        <Col>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="name" placeholder="Your name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='form-label'>Email của bạn</Form.Label>
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Thông tin yêu cầu:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <MyButton4 variant="primary" type="submit">
                        Submit
                    </MyButton4>
                </Form>
            </Container>
        </React.Fragment>
    );
}