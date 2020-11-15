declare global {
  type Category = {
    archived: boolean;
    color: string;
    created_at: string;
    entity_type: string;
    external_id: string;
    id: number;
    name: string;
    type: string;
    updated_at: string;
  };
  type MilestoneStats = {
    average_cycle_time: number;
    average_lead_time: number;
    num_related_documents: number;
  };
  type Milestone = {
    app_url?: string;
    categories?: Category[];
    completed?: boolean;
    completed_at?: string;
    completed_at_override?: string;
    created_at?: string;
    description?: string;
    entity_type?: string;
    id: number;
    name: string;
    position?: number;
    started?: boolean;
    started_at?: string;
    started_at_override?: string;
    state?: string;
    stats?: MilestoneStats;
    updated_at?: string;
  };

  type ExternalTicket = {
    external_id: string;
    external_url: string;
    id: number;
    story_ids: [number];
  };

  type LabelStats = {
    num_epics: number;
    num_points_completed: number;
    num_points_in_progress: number;
    num_points_total: number;
    num_related_documents: number;
    num_stories_completed: number;
    num_stories_in_progress: number;
    num_stories_total: number;
    num_stories_unestimated: number;
  };

  type Label = {
    app_url: string;
    archived: true;
    color: string;
    created_at: string;
    description: string;
    entity_type: string;
    external_id: string;
    id: number;
    name: string;
    stats: LabelStats;
    updated_at: string;
  };

  type EpicStats = {
    average_cycle_time: number;
    average_lead_time: number;
    last_story_update: string;
    num_points: number;
    num_points_done: number;
    num_points_started: number;
    num_points_unstarted: number;
    num_related_documents: number;
    num_stories_done: number;
    num_stories_started: number;
    num_stories_unestimated: number;
    num_stories_unstarted: 123;
  };

  type Epic = {
    app_url?: string;
    archived?: true;
    completed?: true;
    completed_at?: string;
    completed_at_override?: string;
    created_at?: string;
    deadline?: string;
    description?: string;
    entity_type?: string;
    epic_state_id?: number;
    external_id?: string;
    external_tickets?: ExternalTicket[];
    follower_ids?: [string];
    group_id?: string;
    group_mention_ids?: [string];
    id: number;
    labels?: Label[];
    member_mention_ids?: [string];
    mention_ids?: [string];
    milestone_id?: number;
    name: string;
    owner_ids?: [string];
    planned_start_date?: string;
    position?: number;
    project_ids?: [number];
    requested_by_id?: string;
    started?: true;
    started_at?: string;
    started_at_override?: string;
    state?: string;
    stats?: EpicStats;
    updated_at?: string;
  };

  type StoryPostComments = {
    author_id: string;
    created_at: string;
    external_id: string;
    text: string;
    updated_at: string;
  };

  type StoryType = "Bug" | "Feature" | "Chore";

  type StoryPostLabel = {
    color: string;
    description: string;
    external_id: string;
    name: string;
  };

  type StoryPostTasks = {
    complete: true;
    created_at: string;
    description: string;
    external_id: string;
    owner_ids: string[];
    updated_at: string;
  };
  type StoryPostExternalTickets = { external_id: string; external_url: string };

  type StoryPostStoryLinks = {
    object_id: number;
    subject_id: number;
    verb: "blocks";
  };

  type StoryPost = {
    archived?: boolean;
    comments?: StoryPostComments[];
    completed_at_override?: string;
    created_at?: string;
    deadline?: string;
    description?: string;
    epic_id?: number;
    estimate?: number;
    external_id?: string;
    external_links?: [];
    external_tickets?: StoryPostExternalTickets[];
    file_ids?: [123];
    follower_ids?: string[];
    iteration_id?: number;
    labels?: StoryPostLabel[];
    linked_file_ids?: [123];
    name: string;
    owner_ids?: string[];
    project_id: number;
    requested_by_id?: string;
    started_at_override?: string;
    story_links?: StoryPostStoryLinks[];
    story_type?: string;
    tasks?: StoryPostTasks[];
    updated_at?: string;
    workflow_state_id?: number;
  };

  type WorkflowState = {
    color?: string;
    created_at?: string;
    description?: string;
    entity_type?: string;
    id: number;
    name: string;
    num_stories?: number;
    num_story_templates?: number;
    position?: number;
    type?: string;
    updated_at?: string;
    verb?: string;
  };

  type Workflow = {
    auto_assign_owner?: true;
    created_at?: string;
    default_state_id?: number;
    description?: string;
    entity_type?: string;
    id: number;
    name: string;
    project_ids: number[];
    states: WorkflowState[];
    team_id?: number;
    updated_at?: string;
  };

  type IterationLabel = {
    app_url: string;
    archived: true;
    color: string;
    created_at: string;
    description: string;
    entity_type: string;
    external_id: string;
    id: number;
    name: string;
    stats: IterationLabelStats;
    updated_at: string;
  };
  type IterationLabelStats = {
    num_epics: number;
    num_points_completed: number;
    num_points_in_progress: number;
    num_points_total: number;
    num_related_documents: number;
    num_stories_completed: number;
    num_stories_in_progress: number;
    num_stories_total: number;
    num_stories_unestimated: number;
  };

  type IterationStats = {
    average_cycle_time: number;
    average_lead_time: number;
    num_points: number;
    num_points_done: number;
    num_points_started: number;
    num_points_unstarted: number;
    num_related_documents: number;
    num_stories_done: number;
    num_stories_started: number;
    num_stories_unestimated: number;
    num_stories_unstarted: number;
  };

  type Iteration = {
    app_url?: string;
    created_at: string;
    end_date?: string;
    entity_type?: string;
    follower_ids?: string[];
    group_ids?: string[];
    group_mention_ids?: string[];
    id: number;
    labels?: IterationLabel[];
    member_mention_ids?: string[];
    mention_ids?: string[];
    name: string;
    start_date?: string;
    stats?: IterationStats;
    status?: string;
    updated_at?: string;
  };

  type MemberWorkspace = {
    estimate_scale: number[];
    url_slug: string;
  };

  type DisplayIcon = {
    created_at: string;
    entity_type: string;
    id: string;
    updated_at: string;
    url: string;
  };

  type MemberProfile = {
    deactivated?: true;
    display_icon?: DisplayIcon;
    email_address?: string;
    entity_type?: string;
    gravatar_hash?: string;
    id?: string;
    mention_name?: string;
    name: string;
    two_factor_auth_activated?: true;
  };

  type Member = {
    created_at?: string;
    disabled?: true;
    entity_type?: string;
    group_ids?: string[];
    id: string;
    profile: MemberProfile;
    role?: string;
    updated_at?: string;
  };

  type Project = {
    abbreviation?: string;
    app_url?: string;
    archived?: true;
    color?: string;
    created_at?: string;
    days_to_thermometer?: number;
    description?: string;
    entity_type?: string;
    external_id?: string;
    follower_ids?: string[];
    id: number;
    iteration_length?: number;
    name: string;
    show_thermometer?: true;
    start_time?: string;
    stats?: {
      num_points?: number;
      num_related_documents?: number;
      num_stories?: number;
    };
    team_id?: number;
    updated_at?: string;
  };
}

export {};
