import { Button, Space } from "antd";
import { SelectValue } from "antd/lib/select";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";
import {
  AppDescription,
  SelectMilestone,
  SelectEpic,
  CSVUpload,
  StoryTable,
  SelectProject,
  SelectState,
  SelectIteration,
  SelectMember,
} from "molecules";

export const StoriesUpload = () => {
  const { clubhouseService } = useContext(ServiceContext);

  const [selectedProjectId, setSelectedProjectId] = useState<number>();
  const [selectedStateId, setSelectedStateId] = useState<number>();
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>();
  const [selectedEpicId, setSelectedEpicId] = useState<number>();
  const [selectedIterationId, setSelectedIterationId] = useState<number>();
  const [selectedMemberId, setSelectedMemberId] = useState<string>();

  const [csvData, setCsvData] = useState<any[]>([]);

  const [createStoriesLoading, setCreateStoriesLoading] = useState(false);

  const onProjectSelectChangeHandler = (value: SelectValue) => {
    setSelectedProjectId(parseInt(value.toString()));
  };
  const onMilestoneSelectChangeHandler = (value: SelectValue) => {
    setSelectedMilestoneId(parseInt(value.toString()));
  };
  const onEpicSelectChangeHandler = (value: SelectValue) => {
    setSelectedEpicId(parseInt(value.toString()));
  };
  const onStateSelectChangeHandler = (value: SelectValue) => {
    setSelectedStateId(parseInt(value.toString()));
  };
  const onIterationSelectChangeHandler = (value: SelectValue) => {
    setSelectedIterationId(parseInt(value.toString()));
  };
  const onMemberSelectChangeHandler = (value: SelectValue) => {
    setSelectedMemberId(value.toString());
  };

  const onCreateStoriesClickHandler = async () => {
    if (!selectedProjectId) {
      console.error("Please select an project before creating stories");
      return;
    }
    setCreateStoriesLoading(true);

    const stories: StoryPost[] = csvData.map(
      ({ name, story_type, estimate, description }: StoryPost) => ({
        name,
        story_type,
        estimate,
        project_id: selectedProjectId,
        epic_id: selectedEpicId,
        description,
        workflow_state_id: selectedStateId,
        iteration_id: selectedIterationId,
        requested_by_id: selectedMemberId,
      })
    );

    await clubhouseService.createStories(stories);
    setCreateStoriesLoading(false);
  };

  return (
    <>
      <AppDescription />
      <div>
        <Space style={{ marginBottom: 16, marginTop: 16 }}>
          <SelectProject onChange={onProjectSelectChangeHandler} />
          <SelectState
            onChange={onStateSelectChangeHandler}
            projectId={selectedProjectId}
          />
        </Space>
      </div>
      <div>
        <Space style={{ marginBottom: 16 }}>
          <SelectMilestone onChange={onMilestoneSelectChangeHandler} />
          <SelectEpic
            onChange={onEpicSelectChangeHandler}
            selectedMilestoneId={selectedMilestoneId}
          />
          <SelectIteration onChange={onIterationSelectChangeHandler} />
        </Space>
      </div>
      <div>
        <Space style={{ marginBottom: 16 }}>
          <SelectMember onChange={onMemberSelectChangeHandler} />
        </Space>
      </div>
      <div style={{ marginBottom: 16, textAlign: "right", width: "100%" }}>
        <CSVUpload onCSVDataChange={setCsvData} />
      </div>
      <StoryTable dataSource={csvData} />
      <div
        style={{
          marginTop: 16,
          textAlign: "right",
          width: "100%",
        }}
      >
        <Button
          disabled={csvData.length <= 0}
          type="primary"
          onClick={onCreateStoriesClickHandler}
          loading={createStoriesLoading}
        >
          Create Stories
        </Button>
      </div>
    </>
  );
};
