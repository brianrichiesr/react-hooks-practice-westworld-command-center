// import { Segment } from "semantic-ui-react";
// import * as Images from "../services/Images";

const HostImage = ({ imgUrl, imgName, host, handleClick }) => {
    return (
        <>
            <img onClick={() => handleClick(host)} className="areaImg" src={host.imageUrl} alt={`${host.firstName} ${host.lastName}`} />
        </>
    )
}

export default HostImage;