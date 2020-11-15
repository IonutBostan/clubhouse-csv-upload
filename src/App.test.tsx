import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./pages", () => ({
  StoriesUpload: () => "Stories Upload",
}));

describe("App application", () => {
  it("renders the upload stories page", () => {
    const { getByText } = render(<App />);
    const uploadStoriesPage = getByText(/Stories Upload/i);
    expect(uploadStoriesPage).toBeInTheDocument();
  });
});
