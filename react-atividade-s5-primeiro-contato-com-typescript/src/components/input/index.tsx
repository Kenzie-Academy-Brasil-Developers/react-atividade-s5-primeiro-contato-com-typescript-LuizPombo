import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => (
  <div>
    {label && <label>{label}</label>}
    <input {...rest} />
  </div>
);

export default Input;
