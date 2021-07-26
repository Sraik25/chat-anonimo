import React from 'react';
import Message from '../Message';
import { ChatContainer, SenderContainer } from './styles';

const Chat = () => {
  return (
    <>
      <ChatContainer>
        <Message />
      </ChatContainer>
      <SenderContainer>
        <textarea name="" id=""></textarea>
        <button>Send</button>
      </SenderContainer>
    </>
  );
};

export default Chat;
