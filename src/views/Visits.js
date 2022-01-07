import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import CompletedVisits from './ui/CompletedVisits';
import LogCompletedVisit from './ui/LogCompletedVisit';


const Visits = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs='12' md='12' sm='12'>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag='h4' className='border-bottom p-3 mb-0'>
              Log a completed visit
            </CardTitle>
            <CardBody className=''>
              <LogCompletedVisit />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='12' sm='12'>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag='h4' className='border-bottom p-3 mb-0'>
              Completed visits
            </CardTitle>
            <CardBody className=''>
              <CompletedVisits />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Visits;
