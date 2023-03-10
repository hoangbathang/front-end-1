import {applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/CreateReducer';

const configguration = ()=>{
    const store = createStore(
        reducers,applyMiddleware(thunk), 
);
return store; 
}
export default configguration;