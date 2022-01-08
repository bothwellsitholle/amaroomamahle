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
  
  const Profile = () => {
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
                  <Label for='exampleText'>Name</Label>
                  <Input id='exampleText' name='text' type='text' placeholder="Sbusiso"/>
                </FormGroup>
                <FormGroup>
                  <Label for='exampleText'>Surname</Label>
                  <Input id='exampleText' name='text' type='text' placeholder="Nkala"/>
                </FormGroup>
                <FormGroup>
                  <Label for='exampleText'>Phone Number</Label>
                  <Input id='exampleText' name='number' type='text' placeholder="073 569 2145"/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="nkala44@gmail.com"
                    type="email"
                  />
                </FormGroup>
                <br />
                <br />
                <Button
                  className='mt-3'
                  color='primary'
                  href='https://wrappixel.com/templates/materialpro-react-admin/?ref=33'
                  target='_blank'
                >
                  Save Details
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Profile;
  