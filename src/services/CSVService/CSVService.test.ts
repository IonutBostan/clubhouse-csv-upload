import { CSVService } from "./CSVService";

const csvTest = `"Name",Description
"Story name","Story 
Description"`;

describe("CSV service", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("return an array with the values of the parsed string", async () => {
    const csvService = new CSVService();
    expect(csvService.parseCSV(csvTest)).toEqual([
      ["Story name", `Story \nDescription`],
    ]);
  });
});
