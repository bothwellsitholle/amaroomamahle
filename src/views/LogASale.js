import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import Sale from './ui/Sale';
import SaleList from './ui/SalesList';

const LogASale = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Log A Sale
            </CardTitle>
            <CardBody className="">
              <Sale/>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Your Recent Sales
            </CardTitle>
            <CardBody className="">
              <SaleList />
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
  );
};

export default LogASale;
