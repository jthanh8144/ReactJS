import classNames from "classnames";

import styles from "./Notification.module.scss";

function Notification({ message }) {
    return (
        <div class={classNames(styles.notification, "is-danger", "bg-danger")}>
            {message}
        </div>
    );
}

export default Notification;
