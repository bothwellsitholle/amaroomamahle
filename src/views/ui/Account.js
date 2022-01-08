import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import Profile from './Profile';

const Account = () => {
  return (
    <Row className='mt-3'>
      <Col xs='6'>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          {/* <CardTitle tag='h6' className='border-bottom p-3 mb-0'> */}
          {/* <i className='bi bi-bell me-2'> </i> */}
          {/* Profile
          </CardTitle> */}
          <CardBody className='p-4'>
            <Row justify-content>
              <Col lg='12'>
                <Profile />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xs='6'>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            {/* <i className='bi bi-bell me-2'> </i> */}
            Update Profile
          </CardTitle>
          <CardBody className='p-4'>
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
                <Button
                  className='mt-3'
                  color='primary'
                  href='http://localhost:3000/'
                  target='_blank'
                >
                  Upload picture
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Account;
