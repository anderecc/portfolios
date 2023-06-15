import { configureStore } from '@reduxjs/toolkit';
import contextReducer from './reducers/contextReducer';

const storeConfig = configureStore({
    reducer: {
        context: contextReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default storeConfig;
