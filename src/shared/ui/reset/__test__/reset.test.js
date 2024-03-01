import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Reset from '../Reset';

describe('check reset button', () => {
  test('test the button props', () => {
    render(<Reset label="next" />);
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });
});
