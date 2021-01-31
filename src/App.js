import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './containers/Messages'
function App() {
  return (
    <Provider store={store}>
      <Messages/>
    </Provider>
  );
}

export default App;
