import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { SelectMember } from "./SelectMember";
import { ClubhouseService } from "services";

jest.mock("../SelectWithFilter/SelectWithFilter");

const onChangeMock = jest.fn();
const defaultProps = {
  onChange: onChangeMock,
  selectedMilestoneId: 1,
};
const members: Member[] = [
  { id: "1", profile: { name: "Member name" } },
  { id: "2", profile: { name: "other name" } },
  { id: "3", profile: { name: "other name" } },
  { id: "4", profile: { name: "another name" } },
];

describe("SelectMember component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<SelectMember {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("shows members on select focus", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getMembers")
      .mockImplementation(() => Promise.resolve(members));

    const { getByTestId, getByText } = render(
      <SelectMember {...defaultProps} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(getByText(/Member name/i)).toBeInTheDocument();
  });
});
