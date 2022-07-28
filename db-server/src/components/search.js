import React from "react";
import Axios from "axios";
// import beautify from "json-beautify";

const handleRequest = (props) => {
    let value = document.getElementById("search-input").value;
    value = value.toLowerCase();
    value = value.split(" ").join("_");
    console.log("VALUE: ", value)
    Axios.post("http://localhost:3001/search", { value })
    .then(response => {
        // console.log("RESPONSE ->>>",response.data);
        let s = JSON.stringify(response.data);
        s= s.split("},{").join("},\n\n{")
        props.updateState({ displayString: s, displayStyles: {color: "white", fontSize: "12px"}});
    }).catch(error => {console.log("ERROR IN SEARCH REQUEST: \n", error); props.updateState({  displayStyles: {color: "red", fontSize: "20px"}, displayString: "ERROR IN CUSTOM QUERY REQUEST"})});
}

export default function Search (props) {

    return (
        <div className="query-wrapper">
            <p className="description">Search by 'showid':</p>
            <input id="search-input" className="query-input" type={"text"}></input>
            <button className="button" onClick={(e) => {handleRequest(props)}}>send</button>
        </div>
    )
}
