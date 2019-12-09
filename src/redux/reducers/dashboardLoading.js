const DEFAULT_STATE = {
    loading: {
        patients: false
    }
}

const dashboardReducer = (state = DEFAULT_STATE, action) => {
    return {
        ...state
    }
}

export default dashboardReducer;