import React from "react";
import { useReducer, useRef } from "react";
import reducer , {initState} from "./reducer";
import { setJob,addJob,deleteJob,removeAllJobs } from "./actions";
import logger from "./logger";
// useReducer

// 4.dispatch

const USEREDUCERv2 = () => {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    console.log(state);

    const inputRef = useRef(null);

    const { job, jobs } = state;

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));

        inputRef.current.focus();
    };

    return (
        <div style={{ padding: "0 20px" }}>
            <h3>TODO</h3>
            <input
                type="text"
                placeholder="Enter todo..."
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                ref={inputRef}
            />
            <button onClick={handleSubmit}>ADD</button>
            {jobs.length > 1 && (<button onClick={() => dispatch(removeAllJobs())}>REMOVE ALL</button>)}
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default USEREDUCERv2;
