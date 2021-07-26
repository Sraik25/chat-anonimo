import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Index';
import { ButtonsChat, Container } from './styles';

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <Link to={'/chat-room'}>
          <ButtonsChat>ChatRoom</ButtonsChat>
        </Link>
        <ButtonsChat>Individual Chat</ButtonsChat>
      </Container>
    </>
  );
};

export default Profile;
