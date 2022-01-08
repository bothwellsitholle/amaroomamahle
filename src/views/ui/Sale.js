import {
  Card,
  Row,
  Col,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Sale = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='exampleText'>Client's Name</Label>
                <Input id='exampleText' name='text' type='text' />
              </FormGroup>
              <FormGroup>
                <Label for='exampleText'>Surname</Label>
                <Input id='exampleText' name='text' type='text' />
              </FormGroup>
              <FormGroup>
                <Label for='exampleText'>Phone Number</Label>
                <Input id='exampleText' name='number' type='text' />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="e.g linda@gmail.com"
                  type="email"
                />
              </FormGroup>
              <br />
              <Button color="primary">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Sale;
