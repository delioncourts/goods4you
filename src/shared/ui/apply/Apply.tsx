import styles from './Apply.module.css';


type TApply = {
    className?: string;
}

const Apply: React.FC<TApply> = (props) => {
    return (
        <input {...props} type="submit" name="apply" value="Apply" className={styles.apply} />
    );
};


export default Apply;