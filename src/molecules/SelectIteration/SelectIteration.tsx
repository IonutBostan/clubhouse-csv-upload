import { SelectValue } from "antd/lib/select";
import { SelectWithFilter } from "molecules/SelectWithFilter/SelectWithFilter";
import React, { useContext, useState } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";

export const SelectIteration: React.FunctionComponent<{
  onChange: (value: SelectValue) => void;
}> = ({ onChange }) => {
  const { clubhouseService } = useContext(ServiceContext);
  const [iteration, setItaration] = useState<Iteration[]>([]);

  const onFocus = async () => {
    const iterationsResult = await clubhouseService.getIterations();
    setItaration(
      iterationsResult.sort((a, b) => {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at > b.created_at) return -1;
        return 0;
      })
    );
  };

  return (
    <SelectWithFilter
      {...{ onFocus, onChange }}
      dataSource={iteration}
      placeholder="Select a iteration"
    />
  );
};
