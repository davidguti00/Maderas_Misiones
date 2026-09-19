import { fireEvent, render, screen, within } from '@testing-library/react';
import FloorTopics from './index';

test('Pisos conserva una card EGGER con cuatro familias informativas y los dos decks', () => {
  render(<FloorTopics />);
  expect(screen.getAllByRole('button', {name: /^Ver /})).toHaveLength(3);
  expect(screen.getByRole('button', {name: 'Ver Decks Madera'})).toBeVisible();
  expect(screen.getByRole('button', {name: 'Ver Decks WPC'})).toBeVisible();
  fireEvent.click(screen.getByRole('button', {name: 'Ver Pisos laminados EGGER'}));
  expect(screen.getByText(/Consultanos por las líneas, formatos y diseños/)).toBeVisible();
  expect(screen.getByRole('link', {name: /Ver diseños/})).toHaveAttribute('href', 'https://www.egger.com/es/pisos/busqueda-disenos?country=AR');
  for (const family of ['NatureSense', 'NatureSense Herringbone', 'NatureSense Aqua', 'NatureSense Aqua+']) {
    fireEvent.click(screen.getByRole('button', {name: family, exact: true}));
    const region = screen.getByRole('region', {name: family, exact: true});
    expect(within(region).getByRole('link', {name: /Ficha oficial/})).toHaveAttribute('href', 'https://www.egger.com/es/pisos/productos/naturesense?country=AR');
    expect(screen.getByRole('img', {name: family, exact: true})).toHaveAttribute('src', expect.stringContaining('/images/egger/naturesense'));
  }
  expect(screen.getByText(/hasta 24 horas/)).toBeVisible();
  expect(document.body.textContent).not.toMatch(/AquaDura|pendiente|validación|Lorem|stock disponible|disponibilidad inmediata/i);
  fireEvent.click(screen.getByRole('link', {name: 'Consultar', exact: true}));
  expect(screen.queryByRole('heading', {name: 'Pisos laminados EGGER'})).not.toBeInTheDocument();
});
