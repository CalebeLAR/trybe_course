/* eslint-disable react/require-default-props */
import './button.css';

type ButtonProps = {
  children: React.ReactNode | undefined;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return <button onClick={ onClick } className="styled-btn">{children}</button>;
}

export default Button;
