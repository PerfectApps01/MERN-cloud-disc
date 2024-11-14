import React from 'react';
import App from './components/App';
import {store} from "./reducers";
import {Provider} from "react-redux";
import {createRoot} from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);