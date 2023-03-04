import React from "react";
import { useStore , actions} from "./store";
import { setTodoInput } from './store/actions';
const Main78 = () => {
    const [state, dispatch] = useStore();

    const { todos, todoInput } = state;
    console.log(state);

    return (
        <div>
            <input value={todoInput} placeholder="What needs to be done?" onChange={e =>{
                dispatch(actions.setTodoInput(e.target.value));
                
            }}></input>
        </div>
    );
};

export default Main78;
