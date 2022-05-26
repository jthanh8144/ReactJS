import { useContext } from "react";
import { AppContext } from "../App";
import { TaskFormContext } from '../context/TaskFormContext';

function TableItem({ content }) {
    const appContext = useContext(AppContext);
    const taskFormContext = useContext(TaskFormContext);

    const getParent = (element) => {
        while (!element.matches('tr')) {
            element = element.parentElement;
        }
        return element;
    }

    const handleChangeStatus = (element) => {
        const id = getParent(element).id;
        const tasks = [...appContext.tasks];
        // eslint-disable-next-line
        const index = Array.from(tasks).findIndex(task => task.id == id);
        tasks[index].status = !tasks[index].status;
        appContext.setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const handleDelete = (element) => {
        const id = getParent(element).id;
        const tasks = [...appContext.tasks];
        // eslint-disable-next-line
        const index = Array.from(tasks).findIndex(task => task.id == id);
        tasks.splice(index, 1);
        appContext.setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const handleUpdate = (element) => {
        appContext.setIsDisplayForm(true);
        const id = getParent(element).id;
        // eslint-disable-next-line
        const index = Array.from(appContext.tasks).findIndex(task => task.id == id);
        taskFormContext.setName(appContext.tasks[id].name);
        taskFormContext.setStatus(appContext.tasks[id].status);
        taskFormContext.setIndexEdit(index);
    }

    return (
        <tr
            id={content[1].id}
        >
            <td>{content[0] + 1}</td>
            <td>{content[1].name}</td>
            <td className="text-center">
                <span
                    className={content[1].status ? 'label label-danger' : 'label label-success'}
                    onClick={e => handleChangeStatus(e.target)}
                >
                    {content[1].status ? 'Đang thực hiện' : 'Đã hoàn thành'}
                </span>
            </td>
            <td className="text-center">
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={e => handleUpdate(e.target)}
                >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={e => handleDelete(e.target)}
                >
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    );
}

export default TableItem;
