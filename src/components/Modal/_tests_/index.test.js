import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../../Modal';

// declare mock toggleModal function
const mockToggleModal = jest.fn();
u
// declare currentPhoto variable
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

// cleanup after each test
afterEach(cleanup);

describe('Modal component', () => {
  // baseline test
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });

  // snapshot test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);

    expect(asFragment()).toMatchSnapshot();
  });

  // click event test
  describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
      fireEvent.click(getByText('Close this modal'));

      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  });
});