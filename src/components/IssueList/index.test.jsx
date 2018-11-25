import React from 'react';
import IssueList from './index';
import { GET_ISSUES_MOCK } from '../../apollo/__mocks__/queries';
import { render, wait } from '../../test-utils';
import 'react-testing-library/cleanup-after-each';

test('<IssueList /> loading state', async () => {
  const { getByText } = render(<IssueList />, [GET_ISSUES_MOCK]);
  const loading = getByText('Loading...');
  expect(loading).not.toBe(null);
});

test('<IssueList /> loaded data', async () => {
  const { getByText, getByTestId } = render(<IssueList />, [GET_ISSUES_MOCK]);
  await wait(() => getByTestId('issues-list'));
  const issuesList = getByTestId('issues-list');
  expect(issuesList.querySelectorAll('li').length).toBe(20);

  const link = getByText('Title 5');
  expect(link.href).toBe('https://github.com/facebook/react/issues/5');
  expect(link.nextSibling.innerHTML).toBe('OPEN');
  expect(link.nextSibling.nextSibling.innerHTML).toBe(
    'Some issue body for issue no. 5',
  );
});
