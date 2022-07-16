import React, { useState } from 'react'
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  // Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import Alert from './Alert'

const Support = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState('')

  const closeAlert = () => {
    setOpenAlert(false)
  }

  const onSubmit = () => {
    setFullname('')
    setEmail('')
    setSubject('')
    setPriority('')
    setMessage('')
    setFile('')
    setOpenAlert(true)
  }
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          {openAlert && (
            <Alert
              message="Successfully opened ticket, we will get in touch with you"
              closeAlert={closeAlert}
            />
          )}
          <CardTitle tag="h5" className="border-bottom p-3 mb-0">
            {/* <i className="bi bi-bell me-2"> </i> */}
            Open Support Ticket
          </CardTitle>
          <CardBody>
            <div>
              <FormGroup>
                <Label for="exampleEmail">Full Name</Label>
                <Input
                  id="exampleName"
                  name="email"
                  // placeholder="sbu"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Email</Label>
                <Input
                  id="exampleEMail"
                  name="email"
                  placeholder="example@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Priority</Label>
                <Input id="exampleSelect" name="select" type="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Subject</Label>
                <Input
                  id="exampleSubject"
                  name="email"
                  placeholder=""
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                />
                <FormText>
                  Allowed File Extensions: .jpg, .gif, .jpeg, .png, .pdf, .bmp,
                  .zip, .txt, .csv, .sql, .msg, .eml (Max file size: 2048MB)
                </FormText>
              </FormGroup>
              <Button color="primary" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Support
