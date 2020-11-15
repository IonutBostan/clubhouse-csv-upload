import { SelectValue } from "antd/lib/select";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";
import { SelectWithFilter } from "../SelectWithFilter/SelectWithFilter";

export const SelectMember: React.FunctionComponent<{
  onChange: (value: SelectValue) => void;
}> = ({ onChange }) => {
  const { clubhouseService } = useContext(ServiceContext);
  const [members, setMembers] = useState<Member[]>([]);

  const onFocus = async () => {
    const memberResult = await clubhouseService.getMembers();
    setMembers(
      memberResult
        .filter((member) => !member.disabled)
        .sort((a, b) => {
          if (a.profile.name > b.profile.name) return 1;
          if (a.profile.name < b.profile.name) return -1;
          return 0;
        })
    );
  };

  return (
    <SelectWithFilter
      {...{ onFocus, onChange }}
      dataSource={members.map((member) => ({
        ...member,
        name: member.profile.name,
      }))}
      placeholder="Select a member"
    />
  );
};
