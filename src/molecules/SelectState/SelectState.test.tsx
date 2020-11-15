import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import { SelectState } from "./SelectState";
import { ClubhouseService } from "services";

jest.mock("../SelectWithFilter/SelectWithFilter");

const onChangeMock = jest.fn();
const defaultProps = {
  onChange: onChangeMock,
  projectId: 1,
};
const workflows: Workflow[] = [
  {
    id: 1,
    name: "Workflow name",
    project_ids: [1],
    states: [
      {
        id: 1,
        name: "State name",
      },
    ],
  },
];

describe("SelectState component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<SelectState {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("shows states on select focus", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getWorkflows")
      .mockImplementation(() => Promise.resolve(workflows));

    const { getByTestId, getByText } = render(
      <SelectState {...defaultProps} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(getByText(/State name/i)).toBeInTheDocument();
  });

  it("dosen't show any state is projectId is undefined", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getWorkflows")
      .mockImplementation(() => Promise.resolve(workflows));

    const { getByTestId, getByText } = render(
      <SelectState {...defaultProps} projectId={undefined} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(() => getByText(/State name/i)).toThrow();
  });

  it("dosen't show any state is projectId is not found in workflows", async () => {
    jest
      .spyOn(ClubhouseService.prototype, "getWorkflows")
      .mockImplementation(() => Promise.resolve(workflows));

    const { getByTestId, getByText } = render(
      <SelectState {...defaultProps} projectId={2} />
    );

    await act(async () => {
      fireEvent.focus(getByTestId("select"));
    });
    expect(() => getByText(/State name/i)).toThrow();
  });
});
