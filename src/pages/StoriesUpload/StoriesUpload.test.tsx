import React from "react";
import { fireEvent, render, act } from "@testing-library/react";

import { StoriesUpload } from "./StoriesUpload";
import { ClubhouseService } from "services";

jest.mock("molecules", () => ({
  AppDescription: () => <div></div>,
  SelectMilestone: ({ onChange }: any) => (
    <input
      data-testid="milestoneInput"
      onChange={(event) => onChange(event.target.value)}
    />
  ),
  SelectEpic: ({ onChange }: any) => (
    <input
      data-testid="epicInput"
      onChange={(event) => onChange(event.target.value)}
    />
  ),
  CSVUpload: ({ onCSVDataChange }: any) => (
    <input
      data-testid="csvUploadInput"
      onChange={(event) => onCSVDataChange(JSON.parse(event.target.value))}
    />
  ),
  StoryTable: () => <div></div>,
  SelectProject: ({ onChange }: any) => (
    <input
      data-testid="projectInput"
      onChange={(event) => onChange(event.target.value)}
    />
  ),
  SelectState: ({ onChange, projectId }: any) => (
    <input
      data-testid="stateInput"
      onChange={(event) => onChange(event.target.value)}
    />
  ),
  SelectIteration: ({ onChange }: any) => (
    <input
      data-testid="iterationInput"
      onChange={(event) => onChange(event.target.value)}
    />
  ),
  SelectMember: ({ onChange }: any) => (
    <input
      data-testid="memberInput"
      onChange={(event) => onChange(event.target.value)}
    />
  ),
}));

const csvData = [
  {
    name: "Story 1",
    story_type: "feature",
    estimate: 1,
    description: "Story 1 Description",
  },
];

jest.mock("antd", () => ({
  Button: ({ onClick }: any) => (
    <button data-testid="button" onClick={onClick}></button>
  ),
  Space: (props: any) => <div>{props.children}</div>,
}));

describe("StoriesUpload component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders correctly", () => {
    const renderInstance = render(<StoriesUpload />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("creates the stories when the options are selected and create stories button is clicked", async () => {
    const createStoriesMock = jest.spyOn(
      ClubhouseService.prototype,
      "createStories"
    );

    const renderInstance = render(<StoriesUpload />);
    const { getByTestId } = renderInstance;
    await act(async () => {
      fireEvent.change(getByTestId("projectInput"), {
        target: { value: "1" },
      });
      fireEvent.change(getByTestId("stateInput"), {
        target: { value: "1" },
      });
      fireEvent.change(getByTestId("iterationInput"), {
        target: { value: "1" },
      });
      fireEvent.change(getByTestId("memberInput"), {
        target: { value: "1" },
      });
      fireEvent.change(getByTestId("milestoneInput"), {
        target: { value: "1" },
      });
      fireEvent.change(getByTestId("epicInput"), {
        target: { value: "1" },
      });
      fireEvent.change(getByTestId("csvUploadInput"), {
        target: { value: JSON.stringify(csvData) },
      });
    });
    await act(async () => {
      fireEvent.click(getByTestId("button"));
    });
    expect(createStoriesMock).toHaveBeenCalledTimes(1);
    expect(createStoriesMock).toHaveBeenCalledWith([
      {
        description: "Story 1 Description",
        epic_id: 1,
        estimate: 1,
        iteration_id: 1,
        name: "Story 1",
        project_id: 1,
        requested_by_id: "1",
        story_type: "feature",
        workflow_state_id: 1,
      },
    ]);
  });
  it("logs an error if the button is spressed and the project is not selected", async () => {
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();
    const renderInstance = render(<StoriesUpload />);
    const { getByTestId } = renderInstance;
    await act(async () => {
      fireEvent.click(getByTestId("button"));
    });
    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Please select an project before creating stories"
    );
  });
});
