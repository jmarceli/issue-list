import React from "react";
import { render } from "react-testing-library";
import { MockedProvider } from "react-apollo/test-utils";

const customRender = (node, mockedData, options) => {
  return render(
    <MockedProvider mocks={mockedData} addTypename={false}>
      {node}
    </MockedProvider>,
    options
  );
};

// re-export everything
export * from "react-testing-library";

// override render method
export { customRender as render };
