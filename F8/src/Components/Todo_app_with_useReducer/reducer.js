import {} from './actions'
import {SET_JOB,ADD_JOB,DELETE_JOB,REMOVE_ALL_JOBS} from './constants';
// 1.initState
export const initState = {
    job: "",
    jobs: [],
};

// 3.reducer
const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        case REMOVE_ALL_JOBS:
            newState = {
                ...state,
                jobs: []
            };
            break;
        default:
            throw new Error("Invalid action ");
    }
    return newState;
};

export default reducer;