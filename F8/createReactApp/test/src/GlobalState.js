import { useRef, useState } from 'react';
import { useStore, actions } from './store';
import './App.css';

function Content() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const [mode, setMode] = useState('add');

    const inputRef = useRef();
    const lisRef = useRef([]);
    const indexEdit = useRef();

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(''));
        inputRef.current.focus();
    }

    const handleEdit = (todo, index) => {
        dispatch(actions.setTodoInput(todo));
        setMode('edit');
        inputRef.current.focus();
        lisRef.current[index].classList.add('editting');
        indexEdit.current = index;
    }

    const handleDoneEdit = () => {
        const payload = {
            index: indexEdit.current,
            value: todoInput
        }
        dispatch(actions.editTodo(payload));
        setMode('add');
        lisRef.current[indexEdit.current].classList.remove('editting');
        dispatch(actions.setTodoInput(''));
        inputRef.current.focus();
    }

    return (
        <>
            <input
                ref={inputRef}
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={ mode === 'add' ? handleAdd : handleDoneEdit }>
                {mode === 'add' ? 'Add' : 'Done'}
            </button>
            {todos.map((todo, index) => (
                <li key={index} ref={el => {lisRef.current[index] = el}} >
                    {todo}
                    <span 
                        style={{
                            marginLeft: '20px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleEdit(todo, index)}
                    >
                        Edit
                    </span>
                    <span 
                        style={{
                            marginLeft: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={() => dispatch(actions.delTodo(index))}
                    >
                        Delete
                    </span>
                </li>
            ))}
        </>
    );
}

export default Content;
