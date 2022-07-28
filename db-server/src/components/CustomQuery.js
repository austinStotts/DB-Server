import React from "react";
import Axios from "axios";

const handleRequest = (props) => {
    let value = document.getElementById("custom-query-input").value;
    console.log("VALUE: ", value)
    Axios.post("http://localhost:3001/customquery", { value })
    .then(response => {
        // console.log("RESPONSE ->>>",response.data);
        let s = JSON.stringify(response.data);
        s= s.split("},{").join("},\n\n{")
        props.updateState({ displayString: s, displayStyles: {color: "white", fontSize: "12px"}});
    }).catch(error => {console.log("ERROR IN CUSTOM QUERY REQUEST: \n", error); props.updateState({  displayStyles: {color: "red", fontSize: "20px"}, displayString: "ERROR IN CUSTOM QUERY REQUEST"})});
}

export default function CustomQuery (props) {
    return (
        <div className="query-wrapper">
            <p className="description">Enter Custom Query:</p>
            <input id="custom-query-input" className="query-input" type={"text"}></input>
            <button className="button" onClick={(e) => {handleRequest(props)}}>send</button>
        </div>
    )
}