import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import { ClubhouseService, CSVService, FileService } from "./services";
import { ServiceContext } from "store/ServiceContext/ServiceContext";
import { ClubhouseSetupPage, StoriesUpload } from "pages";
import { useLocalStorage } from "utils";

function App() {
  const { REACT_APP_CLUBHOUSE_API_TOKEN } = process.env;
  const [clubhouseApiToken, setClubhouseApiToken] = useLocalStorage(
    "clubhouseApiToken",
    REACT_APP_CLUBHOUSE_API_TOKEN
  );

  if (REACT_APP_CLUBHOUSE_API_TOKEN) {
    setClubhouseApiToken(REACT_APP_CLUBHOUSE_API_TOKEN);
  }

  if (!clubhouseApiToken) {
    return <ClubhouseSetupPage onTokenChanged={setClubhouseApiToken} />;
  }

  const services = {
    clubhouseService: new ClubhouseService(clubhouseApiToken),
    fileService: new FileService(),
    csvService: new CSVService(),
  };

  return (
    <ServiceContext.Provider value={services}>
      <div className="App">
        <StoriesUpload />
      </div>
    </ServiceContext.Provider>
  );
}

export default App;
