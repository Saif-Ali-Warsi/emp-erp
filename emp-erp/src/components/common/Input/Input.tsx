import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, name, error, required, ...rest }: InputProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>

      <input
        id={name}
        name={name}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        {...rest}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
