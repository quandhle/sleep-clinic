import { dashboardTypes } from '../actions/types';

const DEFAULT_STATE = {
    loading: false
}

const dashboardQuestionnaire = (state = DEFAULT_STATE, action) => {
    const { type } = action;

    switch(type) {
        case dashboardTypes.UPDATE_PATIENT_ID:
            return {
                ...state
            }
        default:
            return DEFAULT_STATE;
    }
}

export default dashboardQuestionnaire;
