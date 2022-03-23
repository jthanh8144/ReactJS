import { useState, createContext } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Table from './components/Table';
import { TaskFormProvider } from './context/TaskFormContext';

const AppContext = createContext();

function App() {
    const [tasks, setTasks] = useState(() => {
        if (localStorage.getItem('tasks')) {
            return JSON.parse(localStorage.getItem('tasks'));
        } else {
            return [];
        }
    });

    const [isDisplayForm, setIsDisplayForm] = useState(false);

    const handleGenData = () => {
        if (localStorage.getItem('tasks') === null || localStorage.getItem('tasks') === '[]') {
            const temp = [
                {
                    id: 0,
                    name: 'Công việc 1',
                    status: true,
                },
                {
                    id: 1,
                    name: 'Công việc 2',
                    status: false,
                },
                {
                    id: 2,
                    name: 'Công việc 3',
                    status: true,
                },
            ];
            setTasks(temp);
            localStorage.setItem('tasks', JSON.stringify(temp));
        }
    }

    const handleOpenForm = () => {
        if (isDisplayForm === false) {
            setIsDisplayForm(true);
        }
    }

    return (
        <AppContext.Provider
            value={{
                tasks,
                setTasks,
                isDisplayForm,
                setIsDisplayForm
            }}
        >
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <TaskFormProvider>
                    <div className="row">
                        {isDisplayForm && (
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <TaskForm />
                            </div>
                        )}
                        <div
                            className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}
                        >
                            <button
                                type="button"
                                className="btn btn-primary mb-10"
                                onClick={handleOpenForm}
                            >
                                <span className="fa fa-plus mr-5"></span>
                                Thêm Công Việc
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary mb-10 ml-5"
                                onClick={handleGenData}
                            >
                                Gen data
                            </button>
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <Table tasks={tasks} />
                                </div>
                            </div>
                        </div>
                    </div>
                </TaskFormProvider>
            </div>

        </AppContext.Provider>
    );
}

export { AppContext };
export default App;
