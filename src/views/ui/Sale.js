import { useState } from 'react'
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
import Alert from './Alert'

const Sale = (props) => {
  const [openAlert, setOpenAlert] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('')

  let disabled = true

  if (fullName && email && phone && amount && address) {
    disabled = false
  }

  const closeAlert = () => {
    setOpenAlert(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setAmount('')
    setAddress('')
  }

  const onSubmit = () => {
    props.onLogSale({
      fullname: fullName,
      email: email,
      phone: phone,
      amount: amount,
      address: address,
    })
    setOpenAlert(true)
  }
  return (
    <Row>
      {openAlert && (
        <Alert message="Successfully logged a sale" closeAlert={closeAlert} />
      )}
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleText">Client's Full Name</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="e.g example@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Phone Number</Label>
                <Input
                  id="exampleText"
                  name="number"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>

              {/* <FormGroup>
                <Label for='exampleSelect'>Select Date & Time Completed</Label>
                <Stack>
                  <TextField

                    id='datetime-local'
                    label=''
                    type='datetime-local'
                    style={{backgroundColor: '#f6f6f6'}}
                    sx={{ width: 250 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
              </FormGroup> */}
              <FormGroup>
                <Label for="exampleText">Amount (ZAR)</Label>
                <Input
                  id="exampleText"
                  name="number"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormGroup>
              <br />
              <Button color="primary" onClick={onSubmit} disabled={disabled}>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Sale
