import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RootRouter from './components/router';

class App extends React.Component {
  render(): ReactNode {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootRouter />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
