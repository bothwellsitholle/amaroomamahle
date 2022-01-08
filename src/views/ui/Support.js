import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import Alert from './Alert';

const Support = () => {
  const [openAlert, setOpenAlert] = useState(false);

  const closeAlert = () => {
    setOpenAlert(false);
  };

  const onSubmit = () => {
    setOpenAlert(true);
  };
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          {openAlert && (
            <Alert
              message='Successfully submitted request'
              closeAlert={closeAlert}
            />
          )}
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            {/* <i className="bi bi-bell me-2"> </i> */}
            Open Ticket
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='exampleEmail'>Name</Label>
                <Input
                  id='exampleName'
                  name='email'
                  placeholder='sbu'
                  type='text'
                />
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>Email</Label>
                <Input
                  id='exampleEMail'
                  name='email'
                  placeholder='sbu@gmail.com'
                  type='email'
                />
              </FormGroup>
              <FormGroup>
                <Label for='exampleSelect'>Priority</Label>
                <Input id='exampleSelect' name='select' type='select'>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='exampleEmail'>Subject</Label>
                <Input
                  id='exampleSubject'
                  name='email'
                  placeholder=''
                  type='text'
                />
              </FormGroup>
              <FormGroup>
                <Label for='exampleText'>Text Area</Label>
                <Input id='exampleText' name='text' type='textarea' />
              </FormGroup>
              <FormGroup>
                <Label for='exampleFile'>File</Label>
                <Input id='exampleFile' name='file' type='file' />
                <FormText>
                  Allowed File Extensions: .jpg, .gif, .jpeg, .png, .pdf, .bmp,
                  .zip, .txt, .csv, .sql, .msg, .eml (Max file size: 2048MB)
                </FormText>
              </FormGroup>
              <Button color='primary' onClick={onSubmit}>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Support;
