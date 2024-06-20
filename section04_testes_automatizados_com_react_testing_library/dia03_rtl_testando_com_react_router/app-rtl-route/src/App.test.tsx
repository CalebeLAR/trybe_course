// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './utils/renderWithRouter';

import App from './App';

it('Renderiza texto da página inicial', async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})

it('Renderiza página inicial', () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});


it('Navega para a página About', async () => {
  const { user } = renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});