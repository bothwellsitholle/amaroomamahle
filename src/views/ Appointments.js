import React, { useState } from 'react';
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';

const Appointments = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card>
        <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
          <i className='bi bi-bell me-2' />
          Appointments
        </CardTitle>
        <CardBody className=''>
          <div>
            <Alert
              color='primary'
              isOpen={visible}
              toggle={onDismiss.bind(null)}
            >
              You have no appointments set with clients.
            </Alert>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Appointments;
