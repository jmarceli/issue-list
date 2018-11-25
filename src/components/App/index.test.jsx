import React from "react";
import App from "./index";
import { GET_ISSUES_MOCK } from "../../apollo/__mocks__/queries";
import { render } from "../../test-utils";
import "react-testing-library/cleanup-after-each";

test("<App/> rendering", async () => {
  const { getByText } = render(<App />, [GET_ISSUES_MOCK]);
  const loading = getByText("Loading...");
  expect(loading).not.toBe(null);
  expect(getByText(/^Github issues list.*$/)).not.toBe(null);
});
