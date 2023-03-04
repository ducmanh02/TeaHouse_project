import { SET_TODO_INPUT } from "./constant";

const initState = {
    todos :[],
    todoInput : ''

}
function Reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput : action.payload
                
            }
        default:
            throw new Error('Invalid action');
            
    }
}

export {initState}
export default Reducer;