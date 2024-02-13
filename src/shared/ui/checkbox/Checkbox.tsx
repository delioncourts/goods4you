import styles from './Checkbox.module.css';

type CheckboxProps = {
    label: string;
    value?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({ label }: CheckboxProps) => {
    return (
      
        <label className={styles.custom_checkbox}>
            <input className={styles.custom_check_icon} type="checkbox" />
            <span className={styles.label}>{label}</span>
        </label>
    );
};


export default Checkbox;