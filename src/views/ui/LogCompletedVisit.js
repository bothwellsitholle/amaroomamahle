import React, {useState} from 'react';
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
// import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Alert from './Alert';

const Forms = () => {
    const [openAlert, setOpenAlert] = useState(false)

    const closeAlert = () => {
        setOpenAlert(false);
    }

    const onSubmit = () => {
        setOpenAlert(true)
    }

  return (
    <Row>
      {openAlert && <Alert message='Successfully logged a visit'  closeAlert={closeAlert}/>}
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          {/* <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Form Example
            </CardTitle> */}
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='exampleSelect'>Select client's name</Label>
                <Input id='exampleSelect' name='select' type='select'>
                  <option>Learmore Bango (12 white city soweto)</option>
                  <option>Rajesh Mohammed (10 elloff JHB</option>
                  <option>Ben Smith (12 white city soweto)</option>
                  <option>Jame Kobbs (12 white city soweto)</option>
                  <option>Amanda Nkala (12 white city soweto)</option>
                </Input>
              </FormGroup>
              <br />
              <FormGroup>
                <Label for='exampleSelect'>Select Date & Time Completed</Label>
                <Stack>
                  <TextField
                    id='datetime-local'
                    label=''
                    type='datetime-local'
                    sx={{ width: 250 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
              </FormGroup>
              <br />
              <Button color='primary' onClick={() => onSubmit()}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
