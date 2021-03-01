import { render } from '@testing-library/react';
import * as React from 'react';
import CodeSmithyApp from '..';

describe('when the application spins up', () => {
  it('should render without crashing', () => {
    const { container } = render(<CodeSmithyApp />);

    expect(container).not.toBeNull();
  });
});