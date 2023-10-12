import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
// import Headquarters from "./Headquarters";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";
import "../stylesheets/App.css";

const mapUrl = "http://localhost:3001/"

function App() {
  const [areas, setAreas] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [selectedHost, setSelectedHost] = useState(null);

  const getData = (urlEnd, setter) => {
    fetch(`${mapUrl}${urlEnd}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw (response.statusText);
      }
    })
    .then(data => {
      setter(data)
    })
  }
  useEffect(() => {
    getData("areas", setAreas);
    getData("hosts", setHosts);
  }, [])

  const updateMapStatus = (activeHost) => {

    setHosts(currentValue => currentValue.map(host => {
      if (host.id === activeHost.id) {
        return activeHost;
      } else {
        return host
      }
    }))

  }

  const deactivateHost = (activeHost) => {
    const newHostStatus = {
      ...activeHost,
      active: false
    }
    setHosts(currentValue => currentValue.map(host => {
      if (host.id === newHostStatus.id) {
        return newHostStatus;
      } else {
        return host
      }
    }))
  }

  const handleSelect = (currentHost) => {
    setSelectedHost(currentHost)
  }

  return (
    <Segment id="app">
      <WestworldMap handleClick={deactivateHost} areas={areas} hosts={hosts} />
      <Headquarters handleClick={handleSelect} updateMapStatus={updateMapStatus} selectedHost={selectedHost} hosts={hosts} />
    </Segment>
  );
}

export default App;
