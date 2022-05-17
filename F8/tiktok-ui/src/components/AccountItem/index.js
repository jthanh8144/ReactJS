import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import Image from "~/components/Image"
const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652454000&x-signature=Q8Z1kSNJ1hExC3SfcUKjhV17lPk%3D" alt="Han"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                   <span>Võ Văn Thành</span>
                   <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                    jThanh8144
                </span>
            </div>
        </div>
     );
}

export default AccountItem;