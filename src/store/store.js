import thunk from 'redux-thunk';
 
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
 
import storage from 'redux-persist/lib/storage';
 
import baseReducer from '../reducers';
 
const initialState = {};
 
const persistConfig = {
 key: 'root',
 storage,
};
 
const globalPersistedReducers = persistReducer(persistConfig, baseReducer);
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(globalPersistedReducers, initialState, composeEnhancers(applyMiddleware(thunk)));
 
const globalPersistedStore = persistStore(store);
 
export { store, globalPersistedStore };