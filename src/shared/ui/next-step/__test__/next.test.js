import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NextStep from '../NextStep';

// Mock state.
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));
const setState = jest.fn();

describe('check next step button', () => {
  test('test the button props', () => {
    render(<NextStep label="next" />);
    expect(screen.getByRole('button', { name: 'Next step' })).toBeInTheDocument();
  });
});
