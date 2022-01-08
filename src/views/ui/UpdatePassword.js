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

const UpdatePassword = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          {/* <CardTitle tag="h6" className="border-bottom p-3 mb-0"> */}
          {/* <i className="bi bi-bell me-2"> </i> */}
          {/* Update Password
            </CardTitle> */}
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='examplePassword'>Password</Label>
                <Input
                  id='examplePassword'
                  name='password'
                  placeholder='********'
                  type='password'
                />
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>Confirm Password</Label>
                <Input
                  id='examplePassword'
                  name='password'
                  placeholder='********'
                  type='password'
                />
              </FormGroup>
              <Button className='mt-3' color='primary'>
                Save
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UpdatePassword;
