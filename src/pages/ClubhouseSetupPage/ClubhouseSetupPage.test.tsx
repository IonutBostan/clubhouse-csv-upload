import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { ClubhouseSetupPage } from "./ClubhouseSetupPage";

const mockErrorMessage = jest.fn();
jest.mock("antd", () => {
  const Typography = ({ children }: any) => <div>{children}</div>;
  Typography.Title = ({ children }: any) => <div>{children}</div>;
  Typography.Link = ({ children }: any) => <div>{children}</div>;
  return {
    Typography,
    Button: ({ onClick }: any) => (
      <button data-testid="button" onClick={onClick} />
    ),
    Input: ({ onChange }: any) => (
      <input data-testid="input" onChange={onChange} />
    ),
    message: { error: (props: any) => mockErrorMessage(props) },
  };
});

const onTokenChangedMock = jest.fn();
const defaultProps = {
  onTokenChanged: onTokenChangedMock,
};

describe("ClubhouseSetupPage component", () => {
  it("renders correctly", () => {
    const renderInstance = render(<ClubhouseSetupPage {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("shows a message error if Continue button is click and the token input is empty", () => {
    const { getByTestId } = render(<ClubhouseSetupPage {...defaultProps} />);
    act(() => {
      fireEvent.click(getByTestId("button"));
    });
    expect(mockErrorMessage).toBeCalledWith("Add a valid token");
  });

  it("calls onTokenChanged if token is set and the Continue button is clicked", () => {
    const { getByTestId } = render(<ClubhouseSetupPage {...defaultProps} />);
    act(() => {
      fireEvent.change(getByTestId("input"), { target: { value: "token" } });
    });
    act(() => {
      fireEvent.click(getByTestId("button"));
    });
    expect(onTokenChangedMock).toBeCalledWith("token");
  });
});
