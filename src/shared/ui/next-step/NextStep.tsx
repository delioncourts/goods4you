import styles from './NextStep.module.css';


type TApply = {
    className?: string;
}

const NextStep: React.FC<TApply> = (props) => {
    return (
        <button className={styles.button} type="button">Next step</button>
    );
};


export default NextStep;