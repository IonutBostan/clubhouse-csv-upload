import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { SelectWithFilter } from "./SelectWithFilter";
import { act } from "react-dom/test-utils";

jest.mock(
  "antd/lib/select",
  () => ({ onFocus, onChange, filterOption, children }: any) => (
    <div>
      <select
        data-testid="select"
        onFocus={onFocus}
        onChange={() => {
          onChange();
          filterOption();
        }}
      >
        {children}
      </select>
    </div>
  )
);

const onFocusMock = jest.fn();
const onChangeMock = jest.fn();
const filterFunctionMock = jest.fn();

const defaultProps = {
  onFocus: onFocusMock,
  onChange: onChangeMock,
  disabled: false,
  dataSource: [],
  placeholder: "Select",
};
const epics = [
  { milestone_id: 1, id: 1, name: "Milestone name" },
  { milestone_id: 1, id: 2, name: "Another name" },
];

describe("SelectWithFilter component", () => {
  it("renders correctly", () => {
    const renderInstance = render(<SelectWithFilter {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });

  it("renders all the options", () => {
    const { getByText } = render(
      <SelectWithFilter {...defaultProps} dataSource={epics} />
    );
    expect(getByText(/Milestone name/i)).toBeInTheDocument();
    expect(getByText(/Another name/i)).toBeInTheDocument();
  });

  it("renders filtered options", () => {
    render(
      <SelectWithFilter
        {...defaultProps}
        dataSource={epics}
        filterFunction={filterFunctionMock}
      />
    );
    expect(filterFunctionMock).toBeCalledTimes(epics.length);
  });

  it("filters the values when the input has changed", () => {
    const { getByTestId, getByText } = render(
      <SelectWithFilter
        {...defaultProps}
        dataSource={epics}
        filterFunction={filterFunctionMock}
      />
    );
    act(() => {
      fireEvent.change(getByTestId("select"), {
        target: { value: "1" },
      });
    });
    expect(filterFunctionMock).toBeCalledTimes(epics.length);
    expect(() => getByText(/Milestone name/i)).toThrow();
  });
});
