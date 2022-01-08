import React, { useState } from 'react';
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';

const AlertMessage = ({message, closeAlert}) => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
    closeAlert();
  };

  return (
    <div>
      <Card>
        <CardBody className=''>
          <div>
            <Alert color='success' isOpen={visible} toggle={onDismiss}>
              {message}
            </Alert>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AlertMessage;
