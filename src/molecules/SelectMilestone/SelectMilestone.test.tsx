import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { SelectMilestone } from "./SelectMilestone";
import { ClubhouseService } from "services";

jest.mock("../SelectWithFilter/SelectWithFilter");

const onChangeMock = jest.fn();
const defaultProps = {
  onChange: onChangeMock,
  selectedMilestoneId: 1,
};
const milestones: Milestone[] = [
  { id: 1, name: "Milestone name" },
  { id: 2, name: "other name" },
  { id: 3, name: "other name" },
  { id: 4, name: "another name" },
];

describe("SelectMilestone component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<SelectMilestone {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("shows milestones on select focus", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getMilestones")
      .mockImplementation(() => Promise.resolve(milestones));

    const { getByTestId, getByText } = render(
      <SelectMilestone {...defaultProps} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(getByText(/Milestone name/i)).toBeInTheDocument();
  });
});
