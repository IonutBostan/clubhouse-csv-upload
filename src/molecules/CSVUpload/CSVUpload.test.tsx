import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { CSVUpload } from "./CSVUpload";
import { act } from "react-dom/test-utils";

jest.mock("antd", () => ({
  Button: (props: any) => <div {...props} />,
  Upload: ({ showUploadList, beforeUpload, ...props }: any) => (
    <div>
      <input
        data-testid="upload"
        onChange={(props1) =>
          beforeUpload(
            props1.target.value === "nofile" ? null : props1.target.value
          )
        }
      />
      {props.children}
    </div>
  ),
}));
jest.mock("@ant-design/icons", () => ({
  UploadOutlined: () => <div>upload outlined icon</div>,
}));

const onCSVDataChangeMock = jest.fn();
const defaultProps = {
  onCSVDataChange: onCSVDataChangeMock,
};

describe("CSVUpload component", () => {
  beforeEach(() => {
    onCSVDataChangeMock.mockReset();
  });
  it("renders correctly", () => {
    const renderInstance = render(<CSVUpload {...defaultProps} />);
    expect(renderInstance.asFragment().firstChild).toBeTruthy();
  });
  it("calls onCSVDataChange when a file was selected for upload", async () => {
    const { getByTestId } = render(<CSVUpload {...defaultProps} />);
    await act(async () => {
      fireEvent.change(getByTestId("upload"), {
        target: { value: "newFile.csv" },
      });
    });

    expect(onCSVDataChangeMock).toBeCalledTimes(1);
    expect(onCSVDataChangeMock).toBeCalledWith([
      {
        description: "description",
        estimate: 1,
        name: "name",
        story_type: "feature",
      },
    ]);
  });
  it("dosen't call onCSVDataChange when no file is selected", async () => {
    const { getByTestId } = render(<CSVUpload {...defaultProps} />);
    await act(async () => {
      fireEvent.change(getByTestId("upload"), {
        target: { value: "nofile" },
      });
    });

    expect(onCSVDataChangeMock).toBeCalledTimes(0);
  });
});
