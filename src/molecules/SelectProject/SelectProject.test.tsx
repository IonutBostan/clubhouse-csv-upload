import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { SelectProject } from "./SelectProject";
import { ClubhouseService } from "services";

jest.mock("../SelectWithFilter/SelectWithFilter");

const onChangeMock = jest.fn();
const defaultProps = {
  onChange: onChangeMock,
  selectedMilestoneId: 1,
};
const projects: Project[] = [
  { id: 1, name: "Project name", created_at: "3" },
  { id: 2, name: "other name", created_at: "2" },
  { id: 3, name: "3", created_at: "2" },
  { id: 4, name: "4", created_at: "4" },
];

describe("SelectProject component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<SelectProject {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("shows projects on select focus", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getProjects")
      .mockImplementation(() => Promise.resolve(projects));

    const { getByTestId, getByText } = render(
      <SelectProject {...defaultProps} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(getByText(/Project name/i)).toBeInTheDocument();
  });
});
