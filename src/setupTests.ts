// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

jest.mock("antd");

jest.mock("services", () => {
  class ClubhouseService {
    getEpics() {
      return [
        { milestone_id: 1, id: 1, name: "Milestone name" },
        { milestone_id: 1, id: 2, name: "other name" },
      ];
    }
    getIterations() {}
    getProjects() {}
    getMembers() {}
    getMilestones() {}
    getWorkflows() {}
    createStories() {}
  }
  class FileService {
    getFileContent() {}
  }
  class CSVService {
    parseCSV() {
      return [["name", "feature", 1, "description"]];
    }
  }
  return {
    ClubhouseService,
    FileService,
    CSVService,
  };
});
