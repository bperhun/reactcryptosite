import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mediumRiskReducer from './mediumRiskReducer';
import newTradersReducer from './newTradersReducer';
import noRiskReducer from './noRiskReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    newTradersData: newTradersReducer,
    noRiskData: noRiskReducer,
    mediumRiskData: mediumRiskReducer,
    auth: authReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;