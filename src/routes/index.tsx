import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatRoom from '../pages/ChatRoom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/chat-room" component={ChatRoom} />
    </Switch>
  );
};

export default Routes;
