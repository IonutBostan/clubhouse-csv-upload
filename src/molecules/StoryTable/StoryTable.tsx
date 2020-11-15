import Table from "antd/lib/table/Table";
import React from "react";

export const StoryTable: React.FunctionComponent<{
  dataSource: StoryPost[];
}> = ({ dataSource }) => {
  return (
    <Table
      dataSource={dataSource.map((row, i) => ({ ...row, key: i }))}
      columns={csvColumns}
      pagination={false}
    />
  );
};

const csvColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Story type",
    dataIndex: "story_type",
    key: "story_type",
  },
  {
    title: "Estimation",
    dataIndex: "estimate",
    key: "estimate",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];
