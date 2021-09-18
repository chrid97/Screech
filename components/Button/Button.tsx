import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: (a: any) => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
