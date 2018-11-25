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

test('<IssueList /> error state', async () => {
  const { getByText } = render(<IssueList />, [
    {
      request: GET_ISSUES_MOCK.request,
      error: new Error('Some loading error'),
    },
  ]);
  await wait(() => getByText('Data fetching error'));
  const error = getByText('Data fetching error');
  expect(error).not.toBe(null);
});

test('<IssueList /> loaded data', async () => {
  const { getByTestId } = render(<IssueList />, [GET_ISSUES_MOCK]);
  await wait(() => getByTestId('issues-list'));
  const issuesList = getByTestId('issues-list');
  expect(issuesList.children.length).toBe(20 * 2); // each issue has a collapsible panel
});
