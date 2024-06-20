// src/App.test.tsx

import { screen } from '@testing-library/react';
import renderWithRedux from './utils/renderWithRedux';

import App from './App';

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const state = {
    counterReducer: {
      count: 10,
    },
  };
  renderWithRedux(<App />, state);

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('Incrementa o valor da store ao clicar no botão', async () => {
  const { store, user } = renderWithRedux(<App />);
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(0);

  const button = screen.getByText('Incrementa 1');
  await user.click(button);

  expect(screen.getByText('1')).toBeInTheDocument(); // testa se o valor 1 é renderizado
  expect(store.getState().counterReducer.count).toBe(1); // testa se o count do Redux é 1
});

test('Incrementa o valor da store ao clicar no botão', async () => {
  const { store, user } = renderWithRedux(<App />);
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(0);

  const button = screen.getByText('Incrementa 1');
  await user.click(button);

  expect(screen.getByText('1')).toBeInTheDocument(); // testa se o valor 1 é renderizado
  expect(store.getState().counterReducer.count).toBe(1); // testa se o count do Redux é 1
});
