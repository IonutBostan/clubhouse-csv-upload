import { SelectValue } from "antd/lib/select";
import { SelectWithFilter } from "molecules/SelectWithFilter/SelectWithFilter";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";

export const SelectMilestone: React.FunctionComponent<{
  onChange: (value: SelectValue) => void;
}> = ({ onChange }) => {
  const { clubhouseService } = useContext(ServiceContext);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  const onFocus = async () => {
    const milestonesResult = await clubhouseService.getMilestones();
    setMilestones(milestonesResult);
  };

  return (
    <SelectWithFilter
      {...{ onFocus, onChange }}
      dataSource={milestones}
      placeholder="Select a milestone"
    />
  );
};
