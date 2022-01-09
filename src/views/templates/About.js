import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            <i className='bi bi-bell me-2'> </i>
            About Material Pro React
          </CardTitle>
          <CardBody className='p-4'>
            <Row justify-content>
              <Col lg='8'>
                <img
                  src='https://demos.wrappixel.com/free-admin-templates/angular/landingpage-styles/assets/images/screenshots/materialpro-react-pro-lp-img.jpg'
                  alt='my'
                  width='120'
                  height='120'
                  style={{ borderRadius: 60 }}
                />
                <h3 className='mt-4'>Sbusiso Nkala</h3>
                <br />
                <p className=' mb-4'>Agent’s no: 45144</p>
                <p className=' mb-4'>Status: Active</p>

                <br />
                <Button
                  className='mt-3'
                  color='primary'
                  href='http://localhost:3000/'
                  target='_blank'
                >
                  Logout
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
