import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-15.4';
import App from './containers/App';
import './index.css';
import store from './store';

import { iTest } from './index.itest';

if (process.env.NODE_ENV === 'test') {
  Enzyme.configure({ adapter: new Adapter() });

  const wrap = (<Provider store={store}><App />< /Provider>);

  const el = Enzyme.mount(wrap,
    { attachTo: document.getElementById('root') }
  );
  iTest(el);
} else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
