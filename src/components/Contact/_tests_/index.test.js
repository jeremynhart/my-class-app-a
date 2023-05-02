import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays header text', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('contact-header')).toHaveTextContent('Contact me');
  });

  it('displays submit button text', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('contact-submit')).toHaveTextContent('Submit');
  });
});
