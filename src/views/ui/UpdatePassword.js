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
} from 'reactstrap'
import { useState } from 'react'
import Alert from './Alert'

const UpdatePassword = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [password, setPassword] = useState('')
  const [updatePassword, setUpdatePassword] = useState('')

  let disabled = true
  if (updatePassword && password && updatePassword === password) {
    disabled = false
  }

  console.log('disable', disabled)

  const closeAlert = () => {
    setOpenAlert(false)
  }

  const onSubmit = () => {
    localStorage.setItem('loginpassword', password)
    setOpenAlert(true)
  }
  return (
    <Row>
      {openAlert && (
        <Alert message="Successfully saved changes" closeAlert={closeAlert} />
      )}
      <Col>
        <Card>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="********"
                  type="password"
                  value={updatePassword}
                  onChange={(e) => setUpdatePassword(e.target.value)}
                />
              </FormGroup>
              <Button
                disabled={disabled}
                className="mt-3"
                color="primary"
                onClick={onSubmit}
              >
                Save
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default UpdatePassword
