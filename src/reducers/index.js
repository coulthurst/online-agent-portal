import { combineReducers } from 'redux';
import agentReducer from './agentReducer';
import agentsReducer from './agentsReducer';
import agencyReducer from './agencyReducer';
import agenciesReducer from './agenciesReducer';

export default combineReducers({
    agents: agentsReducer,
    agent: agentReducer,
    agency: agencyReducer,
    agencies: agenciesReducer
})