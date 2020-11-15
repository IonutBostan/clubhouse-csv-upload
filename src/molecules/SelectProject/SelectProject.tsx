import { SelectValue } from "antd/lib/select";
import { SelectWithFilter } from "molecules/SelectWithFilter/SelectWithFilter";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";

export const SelectProject: React.FunctionComponent<{
  onChange: (value: SelectValue) => void;
}> = ({ onChange }) => {
  const { clubhouseService } = useContext(ServiceContext);
  const [projects, setProjects] = useState<Project[]>([]);

  const onFocus = async () => {
    const projectsResult = await clubhouseService.getProjects();
    setProjects(projectsResult);
  };

  return (
    <SelectWithFilter
      {...{ onFocus, onChange }}
      dataSource={projects}
      placeholder="Select a project"
    />
  );
};
