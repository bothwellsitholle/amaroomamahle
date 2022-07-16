import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
} from 'reactstrap'
import FormControlLabel from '@mui/material/FormControlLabel'
import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import Alert from './Alert'

const Notifications = () => {
  const settings = JSON.parse(localStorage.getItem('settings'))
  const [state, setState] = useState(
    settings
      ? settings
      : {
          email: true,
          text: false,
          phone: true,
          email1: true,
          text1: false,
          phone1: true,
        },
  )

  const [openAlert, setOpenAlert] = useState(false)

  const closeAlert = () => {
    setOpenAlert(false)
  }

  const onSubmit = () => {
    localStorage.setItem('settings', JSON.stringify(state));
    setOpenAlert(true)
  }

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }
  return (
    <Row className="mt-3">
      {openAlert && (
        <Alert message="successfully saved changes" closeAlert={closeAlert} />
      )}
      <Col xs="6">
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"></i>
            Updates
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.email1}
                      onChange={handleChange}
                      name="email1"
                    />
                  }
                  label="Email"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.text1}
                      onChange={handleChange}
                      name="text1"
                    />
                  }
                  label="Text"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.phone1}
                      onChange={handleChange}
                      name="phone1"
                    />
                  }
                  label="Phone Call"
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col xs="6">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text"> </i>
            Messages
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.email}
                      onChange={handleChange}
                      name="email"
                    />
                  }
                  label="Email"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.text}
                      onChange={handleChange}
                      name="text"
                    />
                  }
                  label="Text"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  }
                  label="Phone Call"
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <div style={{ with: 120 }}>
        <Button color="primary" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </Row>
  )
}

export default Notifications
