import { combineReducers, legacy_createStore as createStore } from 'redux';
import mediumRiskReducer from './mediumRiskReducer';
import newTradersReducer from './newTradersReducer';
import noRiskReducer from './noRiskReducer';

let reducers = combineReducers({
    newTradersData: newTradersReducer,
    noRiskData: noRiskReducer,
    mediumRiskData: mediumRiskReducer,
});

let store = createStore(reducers);

export default store;