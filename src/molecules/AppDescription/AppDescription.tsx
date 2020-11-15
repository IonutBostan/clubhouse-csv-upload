import { Typography } from "antd";
import React from "react";
const { Title, Paragraph } = Typography;

export const AppDescription = () => (
  <Typography>
    <Title>Clubhouse CSV Importer</Title>
    <Paragraph>
      To import a csv file to clubhouse you need to select a milestone, select
      an epic and after that upload a csv file with the stories
    </Paragraph>
  </Typography>
);
