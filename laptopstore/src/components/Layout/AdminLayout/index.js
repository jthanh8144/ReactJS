import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBagShopping,
    faEnvelopeOpenText,
    faLaptop,
    faTachometerAlt,
    faUser,
    faUserShield,
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "~/context/AuthContext";

function AdminLayout({ children }) {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };

    return (
        <>
            <div className="header-adm">
                <div className="container-fluid">
                    <div className="row align-items-center row-top-adm">
                        <div className="col-12 dp-flex">
                            <div className="logo-adm">
                                <i>
                                    <FontAwesomeIcon icon={faUserShield} />
                                </i>
                                <Link to="/admin">
                                    <span>Admin</span>
                                </Link>
                            </div>
                            <div className="logout-adm mg-right-20">
                                <span
                                    className="cursor-poin"
                                    onClick={handleLogout}
                                >
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faArrowRightFromBracket}
                                        />
                                    </i>
                                    <span>Logout</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-color-brown">
                <div className="row">
                    <div className="col-md-2 col-4 bg-color-admin">
                        <div className="left-adm">
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faTachometerAlt} />
                                </i>
                                <Link to="/admin">
                                    <span>Dashboard</span>
                                </Link>
                            </div>
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faUser} />
                                </i>
                                <span>User</span>
                            </div>
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faLaptop} />
                                </i>
                                <Link to="/admin/products">
                                    <span>Product</span>
                                </Link>
                            </div>
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </i>
                                <Link to="/admin/orders">
                                    <span>Orders</span>
                                </Link>
                            </div>
                            <div>
                                <i>
                                    <FontAwesomeIcon
                                        icon={faEnvelopeOpenText}
                                    />
                                </i>
                                <Link to="/admin/feedbacks">
                                    <span>Feedback</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 col-8">{children}</div>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
