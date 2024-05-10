import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from './utils/renderWithRouter';

import About from './pages/About';
import App from './App';

it('Renderiza o componente About', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Renderiza diretamente na rota /about', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});