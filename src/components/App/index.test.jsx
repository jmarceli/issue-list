import React from "react";
import App from "./index";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

test("initial rendering", () => {
  const { getByAltText, getByText } = render(<App />);
  const link = getByText("Learn React");
  expect(link.href).toBe("https://reactjs.org/");
  const image = getByAltText("logo");
  expect(image.src).toBe("http://localhost/logo.svg");
});
