import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import { HelloWorldContainer } from './components';
import { NameEditContainer } from './components/nameEditContainer';

const nonTypedWindow : any = window as any;

const store = createStore(reducers,
    nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__ && nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__()
);



ReactDOM.render(
    <Provider store={store}>
        <div>
            <HelloWorldContainer />
            <NameEditContainer />
        </div>
    </Provider>,
    document.getElementById('root')
)