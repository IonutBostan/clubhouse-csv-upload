import React from "react";
import { ClubhouseService, CSVService, FileService } from "services";

export const ServiceContext = React.createContext({
  clubhouseService: new ClubhouseService(),
  fileService: new FileService(),
  csvService: new CSVService(),
});
