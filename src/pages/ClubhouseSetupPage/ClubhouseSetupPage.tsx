import { Button, Input, message, Typography } from "antd";
import React, { useState } from "react";
const { Title, Link } = Typography;

export const ClubhouseSetupPage: React.FunctionComponent<{
  onTokenChanged: (token: string) => void;
}> = ({ onTokenChanged }) => {
  const [token, setToken] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };
  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (token.length <= 0) {
      message.error("Add a valid token");
    } else {
      onTokenChanged(token);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 80,
          marginBottom: 80,
        }}
      >
        <Typography style={{ width: 800, textAlign: "center" }}>
          <Title>Welcome to Clubhouse CSV Uploader</Title>
          <Title level={5}>
            To use the CSV Uploader we need you to generate a Clubhouse API
            Token and to pass it in the Token Value input. Please see this page{" "}
            <Link
              target="blank"
              href="https://help.clubhouse.io/hc/en-us/articles/205701199-Clubhouse-API-Tokens"
            >
              Clubhouse API Tokens
            </Link>{" "}
            for more details on how to generate a token
          </Title>
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 600, display: "flex" }}>
          <Input
            autoFocus={true}
            size="large"
            onChange={onChange}
            value={token}
          />
          <Button
            type="primary"
            size="large"
            style={{ marginLeft: 8 }}
            onClick={onClick}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
