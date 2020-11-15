export class ClubhouseService {
  private clubhouseToken: string;
  private headers: RequestInit["headers"];
  private epics: Epic[];
  private iterations: Iteration[];
  private milestones: Milestone[];
  private projects: Project[];
  private workflows: Workflow[];
  private members: Member[];

  constructor(apiToken: string) {
    this.clubhouseToken = apiToken;
    this.headers = {
      "Content-Type": "application/json",
      "Clubhouse-Token": this.clubhouseToken,
    };
    this.epics = [];
    this.iterations = [];
    this.milestones = [];
    this.projects = [];
    this.workflows = [];
    this.members = [];
  }

  private async getRequest(link: string) {
    try {
      const res = await fetch(link, {
        headers: this.headers,
        method: "get",
      });
      if (res?.ok === true) {
        return await res.json();
      } else {
        return res;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  private async postRequest(link: string, bodyObject: {}) {
    try {
      const res = await fetch(link, {
        headers: this.headers,
        method: "post",
        body: JSON.stringify(bodyObject),
      });
      if (res?.ok === true) {
        return await res.json();
      } else {
        return res;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async getEpics(caching: boolean = true): Promise<Epic[]> {
    if (!caching || this.epics.length <= 0)
      this.epics = await this.getRequest(
        "https://api.clubhouse.io/api/v3/epics"
      );

    return this.epics;
  }
  public async getIterations(caching: boolean = true): Promise<Iteration[]> {
    if (!caching || this.iterations.length <= 0)
      this.iterations = await this.getRequest(
        "https://api.clubhouse.io/api/v3/iterations"
      );

    return this.iterations;
  }

  public async getMilestones(caching: boolean = true): Promise<Milestone[]> {
    if (!caching || this.milestones.length <= 0)
      this.milestones = await this.getRequest(
        "https://api.clubhouse.io/api/v3/milestones"
      );

    return this.milestones;
  }

  public async getProjects(caching: boolean = true): Promise<Project[]> {
    if (!caching || this.projects.length <= 0)
      this.projects = await this.getRequest(
        "https://api.clubhouse.io/api/v3/projects"
      );

    return this.projects;
  }
  public async getWorkflows(caching: boolean = true): Promise<Workflow[]> {
    if (!caching || this.workflows.length <= 0)
      this.workflows = await this.getRequest(
        "https://api.clubhouse.io/api/v3/workflows"
      );

    return this.workflows;
  }

  public async getMembers(caching: boolean = true): Promise<Member[]> {
    if (!caching || this.members.length <= 0)
      this.members = await this.getRequest(
        "https://api.clubhouse.io/api/v3/members"
      );

    return this.members;
  }

  public createStories(stories: StoryPost[]) {
    return this.postRequest("https://api.clubhouse.io/api/v3/stories/bulk", {
      stories,
    });
  }
}
