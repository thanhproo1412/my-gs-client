import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyButton4 } from './components/CustomStyle';
import './css/AdminPostSanPham.css'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector';

const fileParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' }
}
const onFileChange = ({ meta, file }, status) => {
    console.log(status, meta, file)
}
const onSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())
}
const getFilesFromEvent = e => {
    return new Promise(resolve => {
        getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject))
        })
    })
}
const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const textMsg = files.length > 0 ? 'Upload More' : 'Select Files'
    return (
        <label className="btn btn-danger mt-4">
            {textMsg}
            <input
                style={{ display: 'none' }}
                type="file"
                accept={accept}
                multiple
                onChange={e => {
                    getFilesFromEvent(e).then(chosenFiles => {
                        onFiles(chosenFiles)
                    })
                }}
            />
        </label>
    )
}

export const AdminPostSanPham = () => {
    return (
        <React.Fragment>
            <div className="adminPostSanPham">
                <h1 className='text-center'></h1>
                <Container className='mt-5 mb-4'>
                    <div className="contact-form-title">
                        Thêm sản phẩm vào cửa hàng của bạn
                    </div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Tên sản phẩm</Form.Label>
                                    <Form.Control type="name" placeholder="Your name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='form-label'>Thương hiệu</Form.Label>
                                    <Form.Control type="brand" placeholder="Your email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Thông tin sản phẩm:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <MyButton4 variant="primary" type="submit">
                            Submit
                        </MyButton4>

                        <Dropzone
                            onSubmit={onSubmit}
                            onChangeStatus={onFileChange}
                            InputComponent={selectFileInput}
                            getUploadParams={fileParams}
                            getFilesFromEvent={getFilesFromEvent}
                            accept="image/*,audio/*,video/*"
                            maxFiles={5}
                            inputContent="Drop A File"
                            styles={{
                                dropzone: { width: 600, height: 400 },
                                dropzoneActive: { borderColor: 'green' },
                            }}
                        />
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    );
}