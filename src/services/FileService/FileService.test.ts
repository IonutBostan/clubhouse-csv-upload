import { FileService } from "./FileService";

var testFile = new File(["file content"], "name.txt");

describe("File service", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("returns the file context when calling getFileContext function", async () => {
    const fileService = new FileService();
    await expect(fileService.getFileContent(testFile)).resolves.toBe(
      "file content"
    );
  });
  it("rejects with error if the readAsBinaryString was not succesfull", async () => {
    jest
      .spyOn(FileReader.prototype, "readAsBinaryString")
      .mockImplementation(() => {
        throw new Error("error");
      });
    const fileService = new FileService();
    await expect(fileService.getFileContent(testFile)).rejects.toThrowError(
      "error"
    );
  });
});
