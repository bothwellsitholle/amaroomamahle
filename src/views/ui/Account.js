import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  CardTitle,
  FormText,
} from 'reactstrap';
import { useState } from 'react';
import Profile from './Profile';
import Alert from './Alert';

const Account = () => {
  const [openAlert, setOpenAlert] = useState(false);

  const closeAlert = () => {
    setOpenAlert(false);
  };

//   const onSubmit = () => {
//     setOpenAlert(true);
//   };
  return (
      <>
    
      <Row>
      <Col xs='12'>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            {/* <i className='bi bi-bell me-2'> </i> */}
            Profile Info
          </CardTitle>
          <CardBody className='p-4'>
            {openAlert && (
              <Alert
                message='picture successfully uploaded'
                closeAlert={closeAlert}
              />
            )}
            <Row justify-content>
              <Col lg='8'>
                <img
                  src='https://khangelaindustries.co.za/wp-content/uploads/2021/11/sbu.jpeg'
                  alt='my'
                  width='120'
                  height='120'
                  style={{ borderRadius: 60 }}
                />
                <h3 className='mt-4'>Sbusiso Nkala</h3>
                <br />
                <p className=' mb-4'>Agent’s no: 45144</p>
                <p className=' mb-4'>Status: Active</p>
                {/* <br /> */}
                <FormGroup>
                  {/* <Label for="exampleFile">File</Label> */}
                  <Input id='exampleFile' name='file' type='file' />
                  <FormText>
                    &nbsp; &nbsp; png and jpeg files only allowed
                  </FormText>
                </FormGroup>
                {/* <Button
                  className='mt-3'
                  color='primary'
                //   href='http://localhost:3000/about'
                  target='_blank'
                  onClick={onSubmit}
                >
                  Upload picture
                </Button> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row className='mt-2'>
      <Col xs='12'>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
          {/* <i className='bi bi-bell me-2'> </i> */}
          Personal Information
          </CardTitle>
          <CardBody className='p-4'>
            <Row justify-content>
              <Col lg='12'>
                <Profile />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      </Row>
    </>
  );
};

export default Account;
