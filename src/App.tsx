import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import { ClubhouseService, CSVService, FileService } from "./services";
import { ServiceContext } from "store/ServiceContext/ServiceContext";
import { StoriesUpload } from "./pages";

function App() {
  const services = {
    clubhouseService: new ClubhouseService(),
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
