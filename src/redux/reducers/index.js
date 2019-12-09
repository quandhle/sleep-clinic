import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaireReducer';
import dashboardLoadingReducer from './dashboardLoading';

const rootReducer = combineReducers({
    dashboardLoading: dashboardLoadingReducer,
    questionnaire: questionnaireReducer
})

export default rootReducer;
