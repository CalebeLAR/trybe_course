import Form from './components/form';
import './App.css';
import useToggle from './hooks/useToggle';

function App() {
  const toggle = useToggle(false);

  return (
    <div className="container">
      {toggle.value ? (
        <Form toggle={toggle.toggleValue} />
      ) : (
        <button onClick={toggle.toggleValue}>Cadastre-se agora!</button>
      )}
    </div>
  );
}

export default App;
