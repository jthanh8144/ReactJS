import { SET_TODO_INPUT, ADD_TODO, EDIT_TODO, DEL_TODO } from './constants';

const initState = {
    todos: [],
    todoInput: '',
};

function reducer(state, action) {
    let newTodos;
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case EDIT_TODO:
            newTodos = [...state.todos];
            newTodos[action.payload.index] = action.payload.value;
            return {
                ...state,
                todos: newTodos
            }
        case DEL_TODO:
            newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid action');
    }
}

export { initState }
export default reducer;
