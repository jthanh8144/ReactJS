import { useContext } from 'react';
import { AppContext } from '../App';
import { TaskFormContext } from '../context/TaskFormContext';

function TaskForm() {
    const appContext = useContext(AppContext);
    const taskFormContext = useContext(TaskFormContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskFormContext.name !== '') {
            if (taskFormContext.indexEdit === -1) {
                handleAddTask();
            } else {
                handleUpdateTask();
            }
        }
    }

    const handleAddTask = () => {
        let id = 0;
        if (appContext.tasks !== []) {
            id = appContext.tasks.length;
        }
        appContext.setTasks(prev => {
            const temp = [...prev, {
                id,
                name: taskFormContext.name,
                status: taskFormContext.status
            }];
            localStorage.setItem('tasks', JSON.stringify(temp));
            return temp;
        });

        taskFormContext.setName('');
        taskFormContext.setStatus(false);
        taskFormContext.nameInput.current.focus();
    }

    const handleUpdateTask = () => {
        const index = taskFormContext.indexEdit;
        appContext.setTasks(prev => {
            const temp = [...prev];
            temp[index].name = taskFormContext.name;
            temp[index].status = taskFormContext.status;
            localStorage.setItem('tasks', JSON.stringify(temp));
            return temp;
        });
        taskFormContext.setName('');
        taskFormContext.setStatus(false);
        appContext.setIsDisplayForm(false);
    }

    const handleCloseForm = (e) => {
        e.preventDefault();
        taskFormContext.setName('');
        appContext.setIsDisplayForm(false);
    }

    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={taskFormContext.name}
                            onChange={e => taskFormContext.setName(e.target.value)}
                            ref={taskFormContext.nameInput}
                        />
                    </div>
                    <label>Trạng Thái</label>
                    <select
                        className="form-control"
                        required="required"
                        name="status"
                        value={taskFormContext.status}
                        onChange={(e) => taskFormContext.setStatus(e.target.value)}
                    >
                        <option value={true}>Đang thực hiện</option>
                        <option value={false}>Đã hoàn thành</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-warning"
                            onClick={handleSubmit}
                        >
                            <i className={
                                ['fa', 'fa-solid', taskFormContext.indexEdit !== -1 ? 'fa-check' : 'fa-plus'].join(' ')
                            }></i>

                            {taskFormContext.indexEdit !== -1 ? 'Lưu lại' : 'Thêm'}
                        </button>&nbsp;
                        <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={e => handleCloseForm(e)}
                        >
                            <i className="fa fa-solid fa-xmark"></i>
                            Hủy bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
