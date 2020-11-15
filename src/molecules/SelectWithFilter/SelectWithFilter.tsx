import { Spin } from "antd";
import Select from "antd/lib/select";
import React from "react";

export const SelectWithFilter: React.FunctionComponent<{
  dataSource: { id: number | string; name: string }[];
  disabled?: boolean;
  placeholder: string;
  onChange?: (value: any, option: any) => void;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  filterFunction?: (item: any) => boolean;
}> = ({ dataSource, filterFunction, ...rest }) => {
  const localDataSource = filterFunction
    ? dataSource.filter(filterFunction)
    : dataSource;

  const filterOption = (input: any, option: any) => {
    return option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  return (
    <Select
      {...rest}
      notFoundContent={dataSource.length <= 0 ? <Spin size="small" /> : null}
      showSearch
      style={{ width: 300 }}
      filterOption={filterOption}
    >
      {localDataSource.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};
