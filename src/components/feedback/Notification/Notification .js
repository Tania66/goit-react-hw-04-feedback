import React from 'react';
import { Title } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <Title>
      <h3>{message}</h3>
    </Title>
  );
};

export default Notification;
