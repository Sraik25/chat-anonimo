import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserActions, signInActions } from '../../app/actions/authActions';
import { IUser } from '../../app/dtos/userDtos';
import { RootState } from '../../app/store';
import { ButtonHome, Container, InputHome } from './styles';

const Home = () => {
  const userAuth = useSelector((state: RootState) => state.auth.user);

  const history = useHistory();

  const dispatch = useDispatch();

  const [user, setUser] = useState<IUser>({
    id: '',
    username: '',
  });

  const { username } = user;

  useEffect(() => {
    const getUsers = () => {
      dispatch(getUserActions());
    };
    getUsers();

    if (userAuth) {
      history.push('/profile');
    }
  }, [userAuth, history]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim() === '') {
      console.log('Hubo un error');
      return;
    }

    console.log(user);

    dispatch(signInActions(user));

    setUser({
      id: '',
      username: '',
    });

    // history.push('/profile');
  };

  return (
    <Container>
      <p></p>
      <form onSubmit={handleSubmit}>
        <h1>Bienvenido a Chat Anonimo</h1>
        <InputHome
          type="text"
          placeholder="Ingresa tu nombre"
          name="username"
          value={username}
          onChange={onChangeInput}
        />
        <ButtonHome type="submit">Ingresar</ButtonHome>
      </form>
    </Container>
  );
};

export default Home;
