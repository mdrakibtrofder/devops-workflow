import { render, screen } from '@testing-library/react';
import Topics from './Topics';

describe('Topics', () => {
  it('renders the topics component', () => {
    render(<Topics />);
    expect(screen.getByText('Master DevOps')).toBeInTheDocument();
  });
});
