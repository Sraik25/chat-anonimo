import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutActions } from '../../app/actions/authActions';
import { RootState } from '../../app/store';
import { ButtonHeader, Container } from './styles';

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);
  // console.log(user.username);

  const handleSignOut = () => {
    dispatch(signOutActions());
  };

  if (!user) return null;
  return (
    <Container>
      <p>Bienvenido: {user?.username}</p>
      <ButtonHeader onClick={() => handleSignOut()}>Sign Out</ButtonHeader>
    </Container>
  );
};

export default Header;
