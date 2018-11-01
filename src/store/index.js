import { createStore, applyMiddleware  } from 'redux';
import { rootReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import  watchFetch from '../Components/Sagas'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetch);
store.subscribe(()=>{
    console.log('subscribe', store.getState())
});