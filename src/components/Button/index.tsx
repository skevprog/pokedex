import './styles.css';

interface ButtonProps {
  label: string;
  onClick: (params?) => void;
  disabled: boolean;
}

export default function Button({ label, onClick, disabled = false }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button"
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
}
