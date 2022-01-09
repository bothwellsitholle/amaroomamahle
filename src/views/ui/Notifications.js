import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
} from 'reactstrap';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Alert from './Alert'

const Notifications = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
    gilad1: true,
    jason1: false,
    antoine1: true,
  });


  const [openAlert, setOpenAlert] = useState(false)

    const closeAlert = () => {
        setOpenAlert(false);
    }

    const onSubmit = () => {
        setOpenAlert(true)
    }

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Row className='mt-3'>
        {openAlert && <Alert message='successfully saved changes'  closeAlert={closeAlert}/>}
      <Col xs='6'>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            <i className='bi bi-bell me-2'></i>
            Updates
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.gilad1}
                      onChange={handleChange}
                      name='gilad1'
                    />
                  }
                  label='Email'
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason1}
                      onChange={handleChange}
                      name='jason1'
                    />
                  }
                  label='Text'
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.antoine1}
                      onChange={handleChange}
                      name='antoine1'
                    />
                  }
                  label='Phone Call'
                />
              </FormGroup>
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.gilad}
                      onChange={handleChange}
                      name='gilad'
                    />
                  }
                  label='Email'
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name='jason'
                    />
                  }
                  label='Text'
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.antoine}
                      onChange={handleChange}
                      name='antoine'
                    />
                  }
                  label='Phone Call'
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <div style={{ with: 120 }}>
        <Button color='primary' onClick={onSubmit}>Save</Button>
      </div>
    </Row>
  );
};

export default Notifications;
