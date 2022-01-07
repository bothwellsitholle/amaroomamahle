import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import Message from "../Message"

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Alert
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <Alert color="primary">
              This is a primary alert— check it out!
            </Alert>
            <Alert color="secondary">
              This is a secondary alert— check it out!
            </Alert>
            <Alert color="success">
              This is a success alert— check it out!
            </Alert>
            <Alert color="danger">This is a danger alert— check it out!</Alert>
            <Alert color="warning">
              This is a warning alert— check it out!
            </Alert>
            <Alert color="info">This is a info alert— check it out!</Alert>
            <Alert color="light">This is a light alert— check it out!</Alert>
            <Alert color="dark">This is a dark alert</Alert>
          </div>
        </CardBody>
      </Card>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Alert with Links
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert color="primary">
              This is a primary alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="secondary">
              This is a secondary alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="success">
              This is a success alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="danger">
              This is a danger alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="warning">
              This is a warning alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="info">
              This is a info alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="light">
              This is a light alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="dark">
              This is a dark alert with
              <a href="/" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
        </CardBody>
      </Card> */} *
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-3*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Alert with Additional content
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert color="success">
              <h4 className="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </Alert>
          </div>
        </CardBody>
      </Card> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-4*/}
      {/* --------------------------------------------------------------------------------*/}
      
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Inbox
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert color="info" isOpen={visible} toggle={onDismiss.bind(null)}>
              <p>
              Good day, please note that amaroom amahle is going to have a system mantainance at 12:00 pm today
              </p>
            </Alert>
            <Alert color="info" isOpen={visible} toggle={onDismiss.bind(null)}>
              <p>
              Happy new year to all of our partners, we have a new year gift for you.
              </p>
            </Alert>
          </div>
        </CardBody>
      </Card> */}

      <Message title={"Viewing Request"} message={"Learmore Bango would like to view your property listing on 13 street South Gate JHB"} />
      <Message title={"Viewing Request"} message={"James Dube would like to view your property listing on 11 street Soweto JHB"}/>
      <Message title={"Viewing Request"} message={"Ronald Butheleziu would like to view your property listing on 11 street Soweto JHB"}/>
      
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-5*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Alert with Uncontrolled [disable] Alerts
        </CardTitle>
        <CardBody className="">
          <div>
            <UncontrolledAlert color="info">
              I am an alert and I can be dismissed!
            </UncontrolledAlert>
          </div>
        </CardBody>
      </Card> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-6*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Alerts without fade
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert
              color="primary"
              isOpen={visible}
              toggle={onDismiss.bind(null)}
              fade={false}
            >
              I am a primary alert and I can be dismissed without animating!
            </Alert>
            <UncontrolledAlert color="warning" fade={false}>
              I am an alert and I can be dismissed without animating!
            </UncontrolledAlert>
          </div>
        </CardBody>
      </Card> */}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Alerts;
