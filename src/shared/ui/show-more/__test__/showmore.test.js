import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ShowMore from '../ShowMore';

describe('check show more button', () => {
  test('test the button props', () => {
    render(<ShowMore label="next" />);
    expect(screen.getByRole('button', { name: 'Show more' })).toBeInTheDocument();
  });
});
