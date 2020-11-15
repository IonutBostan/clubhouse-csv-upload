import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { SelectEpic } from "./SelectEpic";
import { ClubhouseService } from "services";

jest.mock("../SelectWithFilter/SelectWithFilter");

const onChangeMock = jest.fn();
const defaultProps = {
  onChange: onChangeMock,
  selectedMilestoneId: 1,
};
const epics = [
  { milestone_id: 1, id: 1, name: "Milestone name" },
  { milestone_id: 1, id: 2, name: "other name" },
];

describe("SelectEpic component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<SelectEpic {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("makes a request to get the epics there is no epic in the context of the compoent", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getEpics")
      .mockImplementation(() => Promise.resolve(epics));

    const { getByTestId, getByText } = render(<SelectEpic {...defaultProps} />);

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(getByText(/Milestone name/i)).toBeInTheDocument();
  });
});
