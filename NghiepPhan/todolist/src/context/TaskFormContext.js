import { useState, useRef, createContext } from 'react';

const TaskFormContext = createContext();

function TaskFormProvider({ children }) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false);
    const [indexEdit, setIndexEdit] = useState(-1);
    const nameInput = useRef();

    return (
        <TaskFormContext.Provider
            value={{
                name,
                setName,
                status,
                setStatus,
                indexEdit,
                setIndexEdit,
                nameInput
            }}
        >
            {children}
        </TaskFormContext.Provider>
    );
}

export { TaskFormContext, TaskFormProvider }
