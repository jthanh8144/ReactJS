

function TaskForm() {
    return (
        <>
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required">
                            <option value="1">Kích Hoạt</option>
                            <option value="0">Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <i className="fa fa-solid fa-plus"></i>
                                Thêm
                            </button>&nbsp;
                            <button type="submit" className="btn btn-danger">
                                <i className="fa fa-solid fa-xmark"></i>
                                Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TaskForm;
