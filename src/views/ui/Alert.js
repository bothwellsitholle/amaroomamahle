import React, { useState } from 'react';
import {
  Alert,
  Card,
  CardBody,
} from 'reactstrap';

const AlertMessage = ({message, closeAlert}) => {
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
