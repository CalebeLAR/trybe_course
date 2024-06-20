import '../styles/Button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  function handleClick() {
    alert('Meu primeiro event handler com React');
  }

  if (onClick) {
    return <button onClick={ onClick } className="styled-btn">{children}</button>;
  }

  if (!onClick) {
    return <button onClick={ handleClick } className="styled-btn">{children}</button>;
  }
}

export default Button;
