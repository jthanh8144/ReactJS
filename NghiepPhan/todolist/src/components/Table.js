import { useContext, useState } from "react";
import { AppContext } from "../App";
import TableItem from "./TableItem";

function Table() {
    const appContext = useContext(AppContext);

    const [filterName, setFilterName] = useState('');
    const [filterStatus, setFilterStatus] = useState(-1);
    const [sort, setSort] = useState(-1);

    let tasks = [...appContext.tasks];
    // filter
    if (filterName) {
        tasks = tasks.filter(task => {
            return task.name.toLowerCase().match(filterName.toLowerCase()) !== null;
        });
    }
    if (filterStatus !== -1) {
        if (filterStatus === 1) {
            tasks = tasks.filter(task => {
                return task.status === true;
            });
        } else {
            tasks = tasks.filter(task => {
                return task.status === false;
            });
        }
    }
    // sort
    if (sort !== -1) {
        if (sort === 1) {
            tasks = tasks.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                } else {
                    return 0;
                }
            })
        } else {
            tasks = tasks.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA > nameB) {
                    return -1;
                } else if (nameA < nameB) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    }

    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                        />
                    </td>
                    <td>
                        <select
                            className="form-control"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(Number.parseInt(e.target.value))}
                        >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Đã hoàn thành</option>
                            <option value="1">Đang thực hiện</option>
                        </select>
                    </td>
                    <td>
                        <select
                            className="form-control"
                            value={sort}
                            onChange={(e) => setSort(Number.parseInt(e.target.value))}
                        >
                            <option value="-1">--Sắp xếp--</option>
                            <option value="1">Theo tên từ A-Z</option>
                            <option value="0">Theo tên từ Z-A</option>
                        </select>
                    </td>
                </tr>

                {tasks.map((task, index) => (
                    <TableItem key={index} content={[index, task]} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
