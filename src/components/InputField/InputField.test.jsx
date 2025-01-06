// src/components/Button/Button.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

test('renders button with text and handles click', () => {
  const mockClickHandler = jest.fn();

  render(<InputField label="Click me" onClick={mockClickHandler} />);

  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(mockClickHandler).toHaveBeenCalledTimes(1);
});
