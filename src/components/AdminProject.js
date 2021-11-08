import React, {useState} from 'react';
import { FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AdminProject.css'

export const AdminProject = () => {
    const [numb1, setNumb1] = useState(0);
    const [numb2, setNumb2] = useState(0);
    const [numb3, setNumb3] = useState(0);
    const updateNumb1 = (e) =>{
        setNumb1(e.target.value)
    }
    const updateNumb2 = (e) =>{
        setNumb2(e.target.value)
    }
    const calculator = () =>{
        setNumb3(+numb1+numb2)
        console.log(numb3)
    }

    return (
        <React.Fragment>
            <div className="adminProject">
                <>
                    <Row className='pt-5'>
                        <div className='pt-5'></div>
                        <Col xs={2} />
                        <Col xs={2}>
                            <FloatingLabel
                                controlId="Number1"
                                label="1st number"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="" onChange={updateNumb1} value={numb1}/>
                            </FloatingLabel>
                        </Col>
                        <Col xs={1}>Plus</Col>
                        <Col xs={2}>
                            <FloatingLabel controlId="Number2" label="2nd number">
                                <Form.Control type="number" placeholder="" onChange={updateNumb2} value={numb2}/>
                            </FloatingLabel>
                        </Col>
                        <Col xs={2}>
                            <Button onClick={calculator}>calculate</Button>
                        </Col>
                        <Col xs={2} className='project-result'>
                            {numb3}
                        </Col>
                        <Col xs={12} className=''>
                            {numb1}
                        </Col>
                        <Col xs={12} className=''>
                            {numb2}
                        </Col>
                    </Row>
                </>
            </div>
        </React.Fragment>
    );
}