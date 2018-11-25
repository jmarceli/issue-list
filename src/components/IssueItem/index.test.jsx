import React from 'react';
import IssueItem from './index';
import { GET_ISSUES_MOCK } from '../../apollo/__mocks__/queries';
import { render } from '../../test-utils';
import 'react-testing-library/cleanup-after-each';

const mockData = GET_ISSUES_MOCK.result.data.repository.issues.edges[4];

test('<IssueItem /> closed rendering', async () => {
  const handleToggle = jest.fn();
  const { getByText, getByLabelText } = render(
    <IssueItem
      handleToggle={handleToggle}
      {...mockData.node}
      isOpen={false}
      classes={{}}
    />,
  );
  const link = getByLabelText(/Go to issue/);
  expect(link.href).toBe('https://github.com/facebook/react/issues/5');
  const title = getByText(/Title 5.*/);
  expect(title).not.toBe(null);
  const open = getByLabelText('Open description');
  expect(open).not.toBe(null);
  open.click();
  expect(handleToggle).toHaveBeenCalledTimes(1);
});

test('<IssueItem /> open rendering', async () => {
  const handleToggle = jest.fn();
  const { getByLabelText, getByText } = render(
    <IssueItem
      handleToggle={handleToggle}
      {...mockData.node}
      isOpen={true}
      classes={{}}
    />,
  );
  const close = getByLabelText('Close description');
  expect(close).not.toBe(null);
  close.click();
  expect(handleToggle).toHaveBeenCalledTimes(1);
  expect(getByText(/Some issue body for.*/)).not.toBe(null);
});
