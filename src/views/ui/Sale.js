import { useState } from 'react';
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
import Alert from './Alert'

const Sale = () => {
    const [openAlert, setOpenAlert] = useState(false)

    const closeAlert = () => {
        setOpenAlert(false);
    }

    const onSubmit = () => {
        setOpenAlert(true)
    }
  return (
    <Row>
         {openAlert && <Alert message='Successfully logged a sale'  closeAlert={closeAlert}/>}
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
              <Button color="primary" onClick={onSubmit}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Sale;
