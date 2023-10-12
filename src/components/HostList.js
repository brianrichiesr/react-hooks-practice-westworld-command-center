import React from "react";
import { Card } from "semantic-ui-react";
import HostImage from "./HostImage";

function HostList({ hosts, handleClick }) {
  const mappedHosts = hosts.map(host => {
    return host.active ? null : <HostImage  key={`cold-img-${host.id}`} handleClick={handleClick} host={host} />
  })
  return (
    <Card.Group itemsPerRow={6}>{mappedHosts}</Card.Group>
  );
}

export default HostList;
