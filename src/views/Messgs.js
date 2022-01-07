import React, { useState } from 'react';
import Message from './ui/Message';

const Messages = () => {
  // For Dismiss Button with Alert
  // const [visible, setVisible] = useState(true);

  // const onDismiss = () => {
  //   setVisible(false);
  // };

  return (
    <div>
      <Message
        title={'Viewing Request'}
        message={
          'Learmore Bango would like to view your property listing on 13 street South Gate JHB'
        }
      />
      <Message
        title={'Viewing Request'}
        message={
          'James Dube would like to view your property listing on 11 street Soweto JHB'
        }
      />
      <Message
        title={'Viewing Request'}
        message={
          'Ronald Butheleziu would like to view your property listing on 11 street Soweto JHB'
        }
      />
    </div>
  );
};

export default Messages;
