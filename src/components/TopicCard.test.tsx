import { render, screen } from '@testing-library/react';
import TopicCard from './TopicCard';
import { GitBranch } from 'lucide-react';

describe('TopicCard', () => {
  it('renders the topic card component', () => {
    render(
      <TopicCard
        icon={GitBranch}
        title="Version Control (Git)"
        description="Master source code management and team collaboration"
        examples={['Branching strategies', 'Pull requests']}
        workflow="Git serves as the foundation."
      />
    );
    expect(screen.getByText('Version Control (Git)')).toBeInTheDocument();
  });
});
