import React from "react";

export default function ErrorPopUp (props) {
    return(
        <div className="popup-wrapper">
            {props.errors.map((error, i) => {
                return (
                    <div className="error-item" key={i}>{`${i+1}: ${error}`}</div>
                )
            })}
        </div>
    )
}