import React from "react";
import { render, act, fireEvent } from "@testing-library/react";

import { AppDescription } from "./AppDescription";
import { ServiceContext } from "store/ServiceContext/ServiceContext";

jest.mock("antd", () => {
  const Button = ({ onClick }: any) => (
    <button onClick={onClick}>button</button>
  );
  const Typography = ({ children }: any) => <div>{children}</div>;
  Typography.Title = ({ children }: any) => <div>{children}</div>;
  Typography.Paragraph = ({ children }: any) => <div>{children}</div>;
  return { Typography, Button };
});

const mockSetClubhouseApiToken = jest.fn();

describe("AppDescription component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<AppDescription />);
    const { getByText } = renderInstance;
    act(() => {
      fireEvent.click(getByText(/button/i));
    });
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("calls the setClubhouseApiToken with an empty string when Remove API token is clicked", () => {
    const serviceContextProviderValue = {
      setClubhouseApiToken: mockSetClubhouseApiToken,
    } as any;
    const { getByText } = render(
      <ServiceContext.Provider value={serviceContextProviderValue}>
        <AppDescription />
      </ServiceContext.Provider>
    );
    act(() => {
      fireEvent.click(getByText(/button/i));
    });
    expect(mockSetClubhouseApiToken).toHaveBeenCalledTimes(1);
    expect(mockSetClubhouseApiToken).toHaveBeenCalledWith("");
  });
});
