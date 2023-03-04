// 2.Actions
import {SET_JOB,ADD_JOB,DELETE_JOB,REMOVE_ALL_JOBS} from './constants';

export const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};
export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};
export const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};
export const removeAllJobs = (payload) => {
    return {
      type: REMOVE_ALL_JOBS,
      payload
    };
  };
