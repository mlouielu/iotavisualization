import React from 'react';
import {render} from 'react-dom';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TangleContainer from './containers/TangleContainer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <div>
      <div className='title-bar-container'>
        <div className='left-title'>
          <h2>Iota Tangle Visualization</h2>
        </div>
        <div className='right-title'>
          <p>
            This demo shows the tangle structure behind Iota, as described in
            the <a href='https://iota.org/IOTA_Whitepaper.pdf'>white paper</a>.
          </p>
          <p>
            This is a modification from Louie Lu. The source code can be found on <a href="https://github.com/mlouielu/iotavisualization">github</a>.
          </p>
          <p>
            You can change the cumulative weight filter value to observe which transaction's
            cumulative weight have occur the threshold. When hover on the transaction,
            you can see the transaction's cumulative weight and score.</p>
        </div>
      </div>
      <TangleContainer />
    </div>
  </Provider>,
  document.getElementById('container')
);
