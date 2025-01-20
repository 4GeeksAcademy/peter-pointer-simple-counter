import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const SecondCounter = (props) => {
    const formattedSeconds = props.seconds.toString().padStart(6, "0");
    return (
        <div className="row d-flex justify-content-center mt-1">
            <div className="col-11 d-flex bg-dark justify-content-around">
                <div className="text-light display-1 m-1"><FontAwesomeIcon icon={faClock} /> {formattedSeconds}</div>
            </div>
        </div>
    );
};
