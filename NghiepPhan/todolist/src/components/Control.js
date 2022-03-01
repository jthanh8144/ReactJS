
import Search from "./Search";
import Sort from "./Sort";

function Control() {
    return (
        <div className="row mt-10">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort />
            </div>
        </div>
    );
}

export default Control;
