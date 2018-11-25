import React from 'react';
import IssueItem from './index';
import { GET_ISSUES_MOCK } from '../../apollo/__mocks__/queries';
import { render } from '../../test-utils';
import 'react-testing-library/cleanup-after-each';

const mockData = GET_ISSUES_MOCK.result.data.repository.issues.edges[4];

test('<IssueItem /> rendering', async () => {
  const { getByText } = render(<IssueItem {...mockData.node} />);
  const link = getByText('Title 5');
  expect(link.href).toBe('https://github.com/facebook/react/issues/5');
  expect(link.nextSibling.innerHTML).toBe('OPEN');
  expect(link.nextSibling.nextSibling.innerHTML).toBe(
    'Some issue body for issue no. 5',
  );
});
