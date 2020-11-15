import React from "react";

export const SelectWithFilter = ({
  dataSource,
  onFocus,
  onChange,
  filterFunction,
  ...rest
}: any) => (
  <select {...rest} data-testid="select" onFocus={onFocus}>
    {dataSource
      .filter(filterFunction ? filterFunction : () => true)
      .map((item: any) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
  </select>
);
