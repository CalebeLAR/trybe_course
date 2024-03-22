/* eslint-disable no-alert */
// src/components/Button.tsx
import '../styles/Button.css';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  function handleClick() {
    alert('Meu primeiro event handler com React');
  }

  return <button onClick={ handleClick } className="styled-btn">{children}</button>;
}

export default Button;
