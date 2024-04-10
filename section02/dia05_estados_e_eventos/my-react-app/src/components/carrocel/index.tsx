import { useState } from 'react';
import { toolKit } from '../../data';
import './carousel.css';

function Carousel() {
  const [index, setIndex] = useState(0);
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o primeiro elemento
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1); // Vai para o último elemento
    }
  }

  function handleAddClick() {
    if (inputValue) {
      setToolList([...toolList, inputValue]);
    }
    setInputValue('');
    setIndex(0);
  }
  return (
    <div className="carousel">
      <h1 className="carousel-header">
        Caixa de ferramentas de uma Pessoa Desenvolvedora
      </h1>
      <h2>{toolList[index]}</h2>
      <div>
        <button className="carousel-btn" onClick={ handlePreviousClick }>Anterior</button>
        <button className="carousel-btn" onClick={ handleNextClick }>Próximo</button>
      </div>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input
          value={ inputValue }
          onChange={ ({ target }) => setInputValue(target.value) }
        />
        <button onClick={ handleAddClick }>Adicionar</button>
      </section>
    </div>
  );
}

export default Carousel;
