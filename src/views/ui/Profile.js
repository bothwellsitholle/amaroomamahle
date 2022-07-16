import { useState } from 'react'

import {
  Row,
  Col,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import Alert from './Alert'

const Profile = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const profile = JSON.parse(localStorage.getItem('profile'))
  const [state, setState] = useState(
    profile
      ? profile
      : {
          name: localStorage.getItem('fullname').split(" ")[0] || "",
          surname: localStorage.getItem('fullname').split(" ")[1] || "",
          phone: "",
          email: localStorage.getItem('email') || ""
        },
  )

  const handleChange = (event, name) => {
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const closeAlert = () => {
    setOpenAlert(false)
  }

  const onSubmit = () => {
    localStorage.setItem('profile', JSON.stringify(state));
    localStorage.setItem('email', state.email);
    localStorage.setItem('fullname', `${state.name} ${state.surname}`);
    // setOpenAlert(true)
    window.location.reload()
  }
  return (
    <Row>
      {openAlert && (
        <Alert message="Successfully saved changes" closeAlert={closeAlert} />
      )}
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        {/* <Card> */}
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleText">Name</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  placeholder="Sbusiso"
                  value={state.name}
                  onChange={(e) => handleChange(e, 'name')}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Surname</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  placeholder="Nkala"
                  value={state.surname}
                  onChange={(e) => handleChange(e, 'surname')}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Phone Number</Label>
                <Input
                  id="exampleText"
                  name="number"
                  type="text"
                  placeholder="073 569 2145"
                  value={state.phone}
                  onChange={(e) => handleChange(e, 'phone')}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="nkala44@gmail.com"
                  type="email"
                  value={state.email}
                  onChange={(e) => handleChange(e, 'email')}
                />
              </FormGroup>
              <br />
              <br />
              <Button
                className="mt-3"
                color="primary"
                target="_blank"
                onClick={onSubmit}
              >
                Save Details
              </Button>
            </Form>
          </CardBody>
        {/* </Card> */}
      </Col>
    </Row>
  )
}

export default Profile
