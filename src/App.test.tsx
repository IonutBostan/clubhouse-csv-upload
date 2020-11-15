import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("pages", () => ({
  StoriesUpload: () => "Stories Upload",
  ClubhouseSetupPage: () => "Setup Page",
}));
const mockUseLocalStorage = jest.fn();
let mockToken: string | undefined;
jest.mock("utils", () => ({
  useLocalStorage: () => [mockToken, mockUseLocalStorage],
}));

const { REACT_APP_CLUBHOUSE_API_TOKEN } = process.env;
describe("App application", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    mockToken = undefined;
    process.env.REACT_APP_CLUBHOUSE_API_TOKEN = REACT_APP_CLUBHOUSE_API_TOKEN;
  });

  it("renders the setup page if the clubhouse api token is not defined", () => {
    const renderedInstance = render(<App />);
    const { getByText } = renderedInstance;
    const uploadStoriesPage = getByText(/Setup Page/i);
    expect(uploadStoriesPage).toBeInTheDocument();
  });

  it("renders the Upload Stories page if the clubhouse api token is defined", () => {
    mockToken = "token";
    const { getByText } = render(<App />);
    const uploadStoriesPage = getByText(/Stories Upload/i);
    expect(uploadStoriesPage).toBeInTheDocument();
  });

  it("saves the value from REACT_APP_CLUBHOUSE_API_TOKEN if it's defined in environment variables", () => {
    process.env.REACT_APP_CLUBHOUSE_API_TOKEN = "token";
    render(<App />);
    expect(mockUseLocalStorage).toBeCalledTimes(1);
  });
});
