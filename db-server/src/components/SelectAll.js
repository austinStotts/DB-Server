import React from "react";
import Axios from "axios";
// import beautify from "json-beautify";

const handleRequest = (props) => {
    Axios.get("http://localhost:3001/selectall")
    .then(response => {
        // console.log("RESPONSE ->>>",response.data);
        let s = JSON.stringify(response.data.data);
        s= s.split("},{").join("},\n\n{")
        props.updateState({ displayString: s , displayStyles: {color: "white", fontSize: "12px"}});
    }).catch(error => {console.log("ERROR IN SELECTALL REQUEST: \n", error); props.updateState({ displayString: "ERROR IN SELECT ALL REQUEST", displayStyles: {color: "red", fontSize: "20px"} })});
}

export default function selectAll (props) {

    return (
        <div className="query-wrapper">
            <p className="description">Select All From DB:</p>
            <button className="button" onClick={(e) => {handleRequest(props)}}>send</button>
        </div>
    )
}
