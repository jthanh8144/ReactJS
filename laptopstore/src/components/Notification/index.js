import classNames from "classnames";

import styles from "./Notification.module.scss";

function Notification({ message }) {
    return (
        <div className={classNames(styles.notification, "is-danger", "bg-danger")}>
            {message}
        </div>
    );
}

export default Notification;
