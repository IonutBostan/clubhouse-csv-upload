import { ClubhouseService } from "./ClubhouseService";

const { REACT_APP_CLUBHOUSE_API_TOKEN } = process.env;
describe("Clubhouse service", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    process.env.REACT_APP_CLUBHOUSE_API_TOKEN = REACT_APP_CLUBHOUSE_API_TOKEN;
  });
  it("throws an error if the clubhouse api token is not defined", () => {
    delete process.env.REACT_APP_CLUBHOUSE_API_TOKEN;
    expect(() => new ClubhouseService()).toThrowError(
      "The clubhouse api token was not found in .env file"
    );
  });
  it("returns the epics", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getEpics()).resolves.toBe("data");
    await expect(clubhouseService.getEpics()).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  it("returns the epics from a json responses", async () => {
    jest.spyOn(global, "fetch").mockImplementation((...props: any[]): any => {
      return { ok: true, json: () => "data" };
    });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getEpics()).resolves.toBe("data");
  });
  it("returns an empty array if the request fails", async () => {
    jest.spyOn(global, "fetch").mockImplementation((...props: any[]): any => {
      throw new Error("call failed");
    });
    const errorMock = jest.spyOn(console, "error").mockImplementation();
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getEpics()).resolves.toEqual([]);
    expect(errorMock).toHaveBeenCalledWith(new Error("call failed"));
  });
  it("returns the iterations", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getIterations()).resolves.toBe("data");
    await expect(clubhouseService.getIterations()).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns the milestones", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getMilestones()).resolves.toBe("data");
    await expect(clubhouseService.getMilestones()).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns the projects", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getProjects()).resolves.toBe("data");
    await expect(clubhouseService.getProjects()).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns the workflows", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getWorkflows()).resolves.toBe("data");
    await expect(clubhouseService.getWorkflows()).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns the members", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(clubhouseService.getMembers()).resolves.toBe("data");
    await expect(clubhouseService.getMembers()).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("creates the stories and returns them", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return "data";
      });
    const clubhouseService = new ClubhouseService();
    await expect(
      clubhouseService.createStories([{ name: "Story name", project_id: 1 }])
    ).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  it("creates the stories and returns them from a json responses", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation((...props: any[]): any => {
        return { ok: true, json: () => "data" };
      });
    const clubhouseService = new ClubhouseService();
    await expect(
      clubhouseService.createStories([{ name: "Story name", project_id: 1 }])
    ).resolves.toBe("data");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("return an empty stories array if the post has failed", async () => {
    jest.spyOn(global, "fetch").mockImplementation((...props: any[]): any => {
      throw new Error("call failed");
    });
    const clubhouseService = new ClubhouseService();
    const errorMock = jest.spyOn(console, "error").mockImplementation();
    await expect(
      clubhouseService.createStories([{ name: "Story name", project_id: 1 }])
    ).resolves.toEqual([]);
    expect(errorMock).toHaveBeenCalledWith(new Error("call failed"));
  });
});
