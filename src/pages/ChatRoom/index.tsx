import React from 'react';
import Aside from '../../components/Aside';
import Chat from '../../components/Chat';
import Side from '../../components/Side';
import { ContainerGrid } from './styles';

const ChatRoom = () => {
  return (
    <>
      <h2>ChatRoom</h2>
      <ContainerGrid>
        <div>
          <Aside />
        </div>
        <div>
          <Chat />
        </div>
        <div>
          <Side />
        </div>
      </ContainerGrid>
    </>
  );
};

export default ChatRoom;
