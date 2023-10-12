import React, { useState, useEffect } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ selectedHost, updateMapStatus }) {
  const [options] = useState([
    { key: "badlands", text: "Badlands", value: "badlands" },
    { key: "pariah", text: "Pariah", value: "pariah" },
    { key: "under_construction", text: "Under Construction", value: "under_construction" },
    { key: "lowlands", text: "Lowlands", value: "lowlands" },
    { key: "python_pass", text: "Python Pass", value: "python_pass" },
    { key: "high_plains", text: "High Plains", value: "high_plains" },
  ]);

  const [value, setValue] = useState("");
  const [updateHost, setUpdateHost] = useState({})

useEffect(() => {
  setUpdateHost(selectedHost)
  setValue(selectedHost.area)
}, [selectedHost])

  function handleOptionChange(e, { value }) {
    const temp = {...updateHost}
    temp.area = value;
    setUpdateHost(temp);
    setValue(value);
  }

  function handleRadioChange() {
    const temp = {...updateHost}
    temp.active = !temp.active;
    setUpdateHost(temp);
    updateMapStatus(temp)
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={selectedHost.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedHost.firstName} | {selectedHost.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={updateHost.active ? "Active" : "Inactive"}
                checked={updateHost.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
