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

const Notifications = () => {
  return (
    <Row className='mt-3'>
      <Col xs='6'>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            <i className='bi bi-bell me-2'> </i>
            Notifications
          </CardTitle>
          <CardBody>
          <Form>
              <FormGroup check>
                {/* <legend>Notifications</legend> */}
                <Input type='checkbox' checked={true}/> <Label check>Email</Label>
              </FormGroup>
              <FormGroup check>
                <Input type='checkbox' checked={false}/> <Label check>Text</Label>
              </FormGroup>
              <FormGroup check>
                <Input type='checkbox' checked={true}/> <Label check>Phone call</Label>
              </FormGroup>
              {/* <Button>Submit</Button> */}
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col xs='6'>
      <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            <i className='bi bi-card-text'> </i>
            Messages
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup check>
                {/* <legend>Notifications</legend> */}
                <Input type='checkbox' checked={true}/> <Label check>Email</Label>
              </FormGroup>
              <FormGroup check>
                <Input type='checkbox' checked={true}/> <Label check>Text</Label>
              </FormGroup>
              <FormGroup check>
                <Input type='checkbox' /> <Label check>Phone call</Label>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <div style={{with: 120}}>
      <Button>Save</Button>
      </div>
    </Row>
  );
};

export default Notifications;
