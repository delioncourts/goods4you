import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Apply from '../Apply';

// Mock state.
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));
const setState = jest.fn();

describe('check next step button', () => {
  test('test the button props', () => {
    render(<Apply />);
    expect(screen.getByDisplayValue('Apply')).toBeInTheDocument();
  });
});
