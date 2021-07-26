import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20%;

  form {
    width: 50%;

    h1 {
      margin: 0 auto;
      font-size: 3.6rem;
      margin-bottom: 20px;
    }
  }
`;

export const InputHome = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  margin-right: 2px;
`;

export const ButtonHome = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 10px;
  background: #53b8bb;
  font-family: 'Lato';
  font-size: 1.5rem;
  font-weight: bold;
  color: #F3F2C9;
`;
