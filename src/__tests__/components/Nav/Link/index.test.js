import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import { NavLink } from "../../../../components/Nav";
import theme from "../../../../styles/theme";
afterEach(cleanup);
test("It has to contain NavLink", () => {
  const { container } = render(
    <NavLink href="/post/1" theme={theme}>
      edit
    </NavLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});
