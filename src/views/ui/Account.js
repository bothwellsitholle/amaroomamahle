import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  // FormGroup,
  // Input,
  CardTitle,
  // FormText, 
} from 'reactstrap'
import { useState } from 'react'
import Profile from './Profile'
import Alert from './Alert'
import user1 from '../../assets/images/users/user1.jpg'
import user2 from '../../assets/images/users/user2.jpg'
import user3 from '../../assets/images/users/user3.jpg'
import user4 from '../../assets/images/users/user4.jpg'
import user5 from '../../assets/images/users/user5.jpg'

const users = [user1, user2, user3, user4, user5]

const Account = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [changeImage, setChangeImage] = useState(false)


  

  const closeAlert = () => {
    setOpenAlert(false)
  }

  //   const onSubmit = () => {
  //     setOpenAlert(true);
  //   };

  return (
    <>
      <Row>
        <Col xs="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            {/* <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Profile Info
            </CardTitle> */}
            <CardBody className="p-4">
              {openAlert && (
                <Alert
                  message="picture successfully uploaded"
                  closeAlert={closeAlert}
                />
              )}
              <Row justify-content>
                <Col lg="8">
                  <img
                    src={localStorage.getItem('avatar') || user1}
                    alt="my"
                    width="120"
                    height="120"
                    style={{ borderRadius: 60 }}
                  />
                  <h3 className="mt-4">
                    {localStorage.getItem('fullname') || 'Sbusiso Nkala'}
                  </h3>
                  <br />
                  {/* <p className=' mb-4'>Agent’s no: 45144</p> */}
                  {/* <span className="p-2 bg-success rounded-circle d-inline-block ms-3"/> */}
                  <p className=" mb-4">Status: &nbsp; (Active) <span className="p-2 bg-success rounded-circle d-inline-block ms-3"/>  </p>
                  {/* <br /> */}
                  {/* <FormGroup>
                  <Input id='exampleFile' name='file' type='file' />
                  <FormText>
                    &nbsp; &nbsp; png and jpeg files only allowed
                  </FormText>
                </FormGroup> */}
                  <br />
                  {changeImage && <p className=" mb-4"> Choose Image: </p>}
                  <div style={{width: '100%'}}>
                  {changeImage && users.map((img) => (
                    <img src={img} alt="my" style={{cursor: 'pointer', margin: 10, borderRadius: 15}} onClick={() => {
                      localStorage.setItem('avatar', img)
                      setChangeImage(prev => !prev)
                      window.location.reload()
                    }}/>
                  ))}
                  </div>
                  {/* <br/> */}
                  {!changeImage && <Button
                    color="primary"
                    onClick={() => setChangeImage(prev => !prev)}
                    // disabled={disabled}
                  >
                    Change Image
                  </Button>}
                  <br/>
                  {/* <Button
                  className='mt-3'
                  color='primary'
                //   href='http://localhost:3000/about'
                  target='_blank'
                  onClick={onSubmit}
                >
                  Upload picture
                </Button> */}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              {/* <i className='bi bi-bell me-2'> </i> */}
              Personal Information
            </CardTitle>
            <CardBody className="p-4">
              <Row justify-content>
                <Col lg="12">
                  <Profile />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Account
