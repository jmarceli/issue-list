import React from 'react';
import App from './index';
import { GET_ISSUES_MOCK } from '../../apollo/__mocks__/queries';
import { render } from '../../test-utils';
import 'react-testing-library/cleanup-after-each';

test('<App/> rendering', () => {
  const { getByText } = render(<App classes={{}} />, [GET_ISSUES_MOCK]);
  expect(getByText(/^Latest 20 issues.*$/)).not.toBe(null);
});
