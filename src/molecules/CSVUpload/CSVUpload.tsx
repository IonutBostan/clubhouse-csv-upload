import { Button, Upload } from "antd";
import React, { useContext } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { ServiceContext } from "store/ServiceContext/ServiceContext";

export const CSVUpload: React.FunctionComponent<{
  onCSVDataChange: (csvData: Omit<StoryPost, "project_id">[]) => void;
}> = ({ onCSVDataChange }) => {
  const { fileService, csvService } = useContext(ServiceContext);

  const onFileInputChange = async (file: File) => {
    if (file) {
      const fileContent = await fileService.getFileContent(file);
      const csvContent = csvService.parseCSV(fileContent);
      onCSVDataChange(
        csvContent?.map((row: string[]) => ({
          name: row[0],
          story_type: row[1],
          estimate: parseInt(row[2]),
          description: row[3],
        }))
      );
    }
  };
  return (
    <Upload
      name="file"
      multiple={false}
      showUploadList={false}
      beforeUpload={(file) => {
        onFileInputChange(file);
        return false;
      }}
    >
      <Button type="primary" icon={<UploadOutlined />}>
        Upload CSV file
      </Button>
    </Upload>
  );
};
