import { fireEvent, render, screen, within } from '@testing-library/react';
import Topics from './Components/Producs/Topics';
import FloorTopics from './Components/Floors/Topics';
import ConstructionTopics from './Components/Construction/Topics';
import ProductImage from './shared/ProductImage';
import cards from './Components/Producs/Topics/info';

const openCard = name => fireEvent.click(screen.getByRole('button', { name: `Ver ${name}`, exact: true }));

test('PerfectSense mantiene fichas separadas, fuentes argentinas y límite de aplicación de Matt', () => {
  render(<Topics />);
  openCard('PerfectSense');
  fireEvent.click(screen.getByRole('button', { name: 'PerfectSense Matt · MDF laqueado' }));
  expect(screen.getByText(/No se recomienda para superficies de trabajo de cocinas/)).toBeVisible();
  const region = screen.getByRole('region', { name: 'PerfectSense Matt · MDF laqueado' });
  expect(within(region).getByRole('link', { name: /Ficha oficial/ })).toHaveAttribute('href', 'https://www.egger.com/es/mobiliario-e-interiorismo/productos/perfectsensepmmdf?country=AR');
  fireEvent.click(screen.getByRole('button', { name: 'PerfectSense Gloss · MDF laqueado' }));
  expect(screen.getByText(/no se atribuye a esta variante/)).toBeVisible();
  fireEvent.click(screen.getByRole('button', { name: 'Cerrar producto' }));
  expect(screen.queryByRole('heading', { name: 'PerfectSense' })).not.toBeInTheDocument();
});

test('compactos y categorías sin ficha conservan la consulta sin mensajes internos', () => {
  render(<Topics />);
  openCard('Tableros decorativos');
  fireEvent.click(screen.getByRole('button', { name: 'Compactos' }));
  expect(screen.getByText('Consultanos por este producto.')).toBeVisible();
  expect(screen.queryByText(/pendiente|validación|identificar el producto/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Cerrar producto' }));
  openCard('Adhesivos');
  expect(screen.getByText('Consultanos por este producto.')).toBeVisible();
  expect(screen.queryByRole('link', { name: /Ficha oficial/ })).not.toBeInTheDocument();
  expect(screen.queryByText(/Lorem ipsum/i)).not.toBeInTheDocument();
});

test.each([
  [FloorTopics, 'Decks WPC'],
  [ConstructionTopics, 'Tableros OSB'],
])('conserva la categoría ambigua y permite consultar sin inventar una ficha', (Component, name) => {
  render(<Component />);
  openCard(name);
  expect(screen.getByText('Consultanos por este producto.')).toBeVisible();
  expect(screen.queryByText(/Lorem ipsum/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Consultar' }));
  expect(screen.queryByText('Consultanos por este producto.')).not.toBeInTheDocument();
});


test('ninguna ficha pública incluye anotaciones de auditoría', () => {
  render(<Topics />);
  for (const card of cards) {
    openCard(card.topic);
    for (const family of card.accordeonItems || []) {
      fireEvent.click(screen.getByRole('button', { name: family.title, exact: true }));
    }
    expect(document.body.textContent).not.toMatch(/pendiente|validación|lorem|\bTODO\b|falta confirmar|requiere identificar|categoría original|referencia EGGER/i);
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar producto' }));
  }
});

test('una imagen ausente o fallida conserva el espacio sin exponer texto interno ni imagen rota', () => {
  const { container, rerender } = render(<ProductImage src={null} alt="Adhesivos" style={{height: '200px'}} />);
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
  expect(container.textContent).toBe('');
  expect(container.firstChild).toHaveStyle({height: '200px'});
  rerender(<ProductImage src="/no-existe.png" alt="Adhesivos" />);
  fireEvent.error(screen.getByRole('img'));
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
  expect(container.textContent).toBe('');
  rerender(<ProductImage src="/images/egger/absedging.png" alt="Cantos" />);
  expect(screen.getByRole('img', {name:'Cantos'})).toBeInTheDocument();
});
