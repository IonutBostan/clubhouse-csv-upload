import React from "react";
import { render } from "@testing-library/react";

import { StoryTable } from "./StoryTable";

jest.mock("antd/lib/table/Table", () => () => <div />);

describe("StoryTable component", () => {
  it("renders correctly", () => {
    const renderInstance = render(
      <StoryTable dataSource={[{ name: "Story", project_id: 1 }]} />
    );
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
});
