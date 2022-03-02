import { useContext, useState } from "react";
import { AppContext } from "../App";
import TableItem from "./TableItem";

function Table() {
    const appContext = useContext(AppContext);

    const [filterName, setFilterName] = useState('');
    const [filterStatus, setFilterStatus] = useState(-1);

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
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                
                {appContext.tasks.map((task, index) => (
                    <TableItem key={index} content={[index, task]} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
