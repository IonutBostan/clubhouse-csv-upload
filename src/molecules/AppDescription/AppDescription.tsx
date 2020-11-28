import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import React, { useContext } from "react";
import { ServiceContext } from "store/ServiceContext/ServiceContext";
const { Title, Paragraph } = Typography;

export const AppDescription = () => {
  const { setClubhouseApiToken } = useContext(ServiceContext);
  return (
    <Typography>
      <TitleWrapper>
        <Title>Clubhouse CSV Importer</Title>
        <Button onClick={() => setClubhouseApiToken("")} type="ghost">
          Remove API Token
        </Button>
      </TitleWrapper>
      <Paragraph>
        To import a csv file to clubhouse you need to select a milestone, select
        an epic and after that upload a csv file with the stories
      </Paragraph>
    </Typography>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
