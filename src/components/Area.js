import React, {useEffect, useState} from "react";
import HostImage from "./HostImage";
import "../stylesheets/Area.css";

function Area({ area, hosts, handleClick }) {
  const [hostsInArea, setHostsInArea] = useState([]);
  // const [areaLimit, setAreaLimit] = useState(0);

  useEffect(() => {
    const mappedHosts = [...hosts].map(host => {
      return host.active ? (host.area === area.name ? (
      <HostImage key={`img-${host.id}`} handleClick={handleClick} host={host} />
      ) : null) : null
    }).filter(item => item !== null);
    setHostsInArea(mappedHosts)
  }, [area, hosts, handleClick])

  const fixName = (str) => {
    return str.name.split("_").map(item => {
      return item[0].toUpperCase() + item.slice(1)
    }).join(" "); 
  }
  const properName = fixName(area);


  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {properName}
      </h3>
      {hostsInArea}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts && props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
