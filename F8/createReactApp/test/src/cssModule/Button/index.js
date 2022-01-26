import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ primary }) {
    const classes = clsx(styles.btn, 'd-flex', {
        [styles.primary]: primary,
        'a-bc': false,
    });
    return (
        // <>
        //     <button className={styles.btn}>
        //         Click me
        //     </button>
        //     <button className={clsx(styles.btn, {
        //         [styles.active]: false,
        //     })}>
        //         Click me
        //     </button>
        // </>
        <button className={classes}>
            Click me
        </button>
    );
};

export default Button;