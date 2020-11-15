import React from "react";
import { render } from "@testing-library/react";

import { AppDescription } from "./AppDescription";

jest.mock("antd", () => {
  const Typography = ({ children }: any) => <div>{children}</div>;
  Typography.Title = ({ children }: any) => <div>{children}</div>;
  Typography.Paragraph = ({ children }: any) => <div>{children}</div>;
  return { Typography };
});

describe("AppDescription component", () => {
  it("renders correctly", () => {
    const renderInstance = render(<AppDescription />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
});
