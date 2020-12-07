import styles from './FormValid.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                {props.children}
            </div>
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}