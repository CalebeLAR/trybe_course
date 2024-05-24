import { legacy_createStore as createStore, combineReducers } from 'redux';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import counterReducer from './redux/reducer/counterReducer';
import userEvent from '@testing-library/user-event';

import App, { RootState } from './App';

function renderWithRedux(
  component: JSX.Element,
  state: RootState | {} = {},
  store = createStore(combineReducers({ counterReducer }), state)
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}

describe('Testa o clique dos botões', () => {
  test('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente', async () => {
    const user = userEvent.setup();
    renderWithRedux(<App />);

    // busca os botões e espera que o valor do contador seja 0
    const incrementOne = screen.getByRole('button', { name: /incrementa 1/i });
    const incrementFive = screen.getByRole('button', { name: /incrementa 5/i });
    expect(screen.getByText('0')).toBeInTheDocument();

    // clica no botão +1 e espera que o contador altere para 1
    await user.click(incrementOne);
    expect(screen.getByText('1')).toBeInTheDocument();

    // clica no botão +5 e espera que o contador altere para 6
    await user.click(incrementFive);
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', async () => {
    const state = {
      counterReducer: {
        count: 5,
      },
    };

    const user = userEvent.setup();

    // renderiza o app alterando o valor do estado inicial
    renderWithRedux(<App />, state);

    const incrementOne = screen.getByRole('button', { name: /incrementa 1/i });
    const incrementFive = screen.getByRole('button', { name: /incrementa 5/i });

    // espera que o teste renderize o valor do estado inicial
    expect(screen.getByText('5')).toBeInTheDocument();

    // espera que o valor do estado inicial seja incrementado em 1
    await user.click(incrementOne);
    expect(screen.getByText('6')).toBeInTheDocument();

    // espera que o valor do estado inicial seja incrementado em 5
    await user.click(incrementFive);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});
