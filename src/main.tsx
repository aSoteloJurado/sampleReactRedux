import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { HelloWorldContainer } from './components';
import { NameEditContainer } from './components/nameEditContainer';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <HelloWorldContainer />
            <NameEditContainer />
        </div>
    </Provider>,
    document.getElementById('root')
)