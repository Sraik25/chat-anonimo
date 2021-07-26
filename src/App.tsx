import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
