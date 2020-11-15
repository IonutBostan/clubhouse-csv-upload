import { SelectValue } from "antd/lib/select";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";
import { SelectWithFilter } from "../SelectWithFilter/SelectWithFilter";

export const SelectEpic: React.FunctionComponent<{
  onChange: (value: SelectValue) => void;
  selectedMilestoneId?: number;
}> = ({ onChange, selectedMilestoneId }) => {
  const { clubhouseService } = useContext(ServiceContext);
  const [epics, setEpics] = useState<Epic[]>([]);

  const onFocus = async () => setEpics(await clubhouseService.getEpics());

  const filterFunction = (epic: Epic) =>
    epic.milestone_id === selectedMilestoneId;

  return (
    <SelectWithFilter
      {...{ onFocus, onChange, filterFunction }}
      disabled={!selectedMilestoneId}
      dataSource={epics}
      placeholder="Select a epic"
    />
  );
};
