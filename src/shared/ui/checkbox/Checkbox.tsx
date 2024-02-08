type CheckboxProps = {
    label: string;
    value?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};


export default Checkbox;