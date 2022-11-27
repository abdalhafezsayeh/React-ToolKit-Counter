import React from 'react'
import Counter from './Counter';

// Redux 
import {store} from './redux/Store'
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );



}

export default App;
