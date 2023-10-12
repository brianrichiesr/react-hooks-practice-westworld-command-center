import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters({ hosts, handleClick, selectedHost, updateMapStatus }) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage handleClick={handleClick} hosts={hosts} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details selectedHost={selectedHost} updateMapStatus={updateMapStatus} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
