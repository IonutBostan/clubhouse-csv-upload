import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { SelectIteration } from "./SelectIteration";
import { ClubhouseService } from "services";

jest.mock("../SelectWithFilter/SelectWithFilter");

const onChangeMock = jest.fn();
const defaultProps = {
  onChange: onChangeMock,
  selectedMilestoneId: 1,
};
const iterations: Iteration[] = [
  { id: 1, name: "Iteration name", created_at: "3" },
  { id: 2, name: "other name", created_at: "2" },
  { id: 3, name: "3", created_at: "2" },
  { id: 4, name: "4", created_at: "4" },
];

describe("SelectIteration component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<SelectIteration {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("shows iterations on select focus", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getIterations")
      .mockImplementation(() => Promise.resolve(iterations));

    const { getByTestId, getByText } = render(
      <SelectIteration {...defaultProps} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(getByText(/Iteration name/i)).toBeInTheDocument();
  });
});
