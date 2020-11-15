import { SelectValue } from "antd/lib/select";
import { SelectWithFilter } from "molecules/SelectWithFilter/SelectWithFilter";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";

export const SelectState: React.FunctionComponent<{
  onChange: (value: SelectValue) => void;
  projectId: number | undefined;
}> = ({ onChange, projectId }) => {
  const { clubhouseService } = useContext(ServiceContext);
  const [states, setStates] = useState<WorkflowState[]>([]);

  const onFocus = async () => {
    const workflowsResult = await clubhouseService.getWorkflows();
    if (projectId) {
      const projectWorkflow = workflowsResult.filter(
        (workflow) => workflow.project_ids.indexOf(projectId) >= 0
      );
      if (projectWorkflow.length === 1) {
        setStates(projectWorkflow[0].states);
      }
    }
  };

  return (
    <SelectWithFilter
      {...{ onFocus, onChange }}
      dataSource={states}
      placeholder="Select a state"
    />
  );
};
