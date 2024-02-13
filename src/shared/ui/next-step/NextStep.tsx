import styles from './NextStep.module.css';


type TApply = {
    className?: string;
    ariaLabel?: string;
}

const NextStep: React.FC<TApply> = (props) => {
    return (
        <button {...props} className={styles.button} type="button">Next step</button>
    );
};


export default NextStep;