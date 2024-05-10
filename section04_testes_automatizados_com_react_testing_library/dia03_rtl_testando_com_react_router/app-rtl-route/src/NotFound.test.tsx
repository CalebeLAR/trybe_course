import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';

import App from './App';

it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});