import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

export default () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
