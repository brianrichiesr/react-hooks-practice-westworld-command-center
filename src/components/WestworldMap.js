import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, hosts, handleClick }) {
  return <Segment id="map">{
    areas.map(area => {
      return <Area key={area.id} handleClick={handleClick} area={area} hosts={hosts} />
    })
  }</Segment>;
}

export default WestworldMap;
