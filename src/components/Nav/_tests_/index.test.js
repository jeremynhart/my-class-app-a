import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' },
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

it('renders', () => {
  render(
    <Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />,
  );
});