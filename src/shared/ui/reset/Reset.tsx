import styles from './Reset.module.css';

type TReset = {
    className?: string;
}

const Reset: React.FC<TReset> = (props) => {
    return (
        <input
            type="reset"
            value="Reset"
            {...props}
            className={styles.reset}
        />
    );
};


export default Reset;