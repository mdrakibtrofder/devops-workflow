import { render, screen } from '@testing-library/react';
import Workflow from './Workflow';

describe('Workflow', () => {
  it('renders the workflow component', () => {
    render(<Workflow />);
    expect(screen.getByText(/The DevOps/i)).toBeInTheDocument();
    expect(screen.getByText(/Pipeline Flow/i)).toBeInTheDocument();
  });
});
