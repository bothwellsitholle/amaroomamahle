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
import {useState} from 'react'
import Alert from './Alert';


const UpdatePassword = () => {
    const [openAlert, setOpenAlert] = useState(false);

  const closeAlert = () => {
    setOpenAlert(false);
  };

  const onSubmit = () => {
    setOpenAlert(true);
  };
  return (
    <Row>
        {openAlert && (
            <Alert
              message='Successfully saved changes'
              closeAlert={closeAlert}
            />
          )}
      <Col>
      <Card>
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
              <Button className='mt-3' color='primary' onClick={onSubmit}>
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
