import React, {Component} from "react";
import "../create.css";

class Create extends Component {
    constructor () {
        super()
        console.log("CREATE");
    }

    render () {
        return (
            <div className="create-wrapper">
                <p>Please Input Information to make new show</p>
                <div className="inputs-wrapper">
                    <input className="create-input not-blank" type={"text"} placeholder={"name"}></input>
                    <input className="create-input not-blank" type={"text"} placeholder={"showid"}></input>
                    <input className="create-input" type={"text"} placeholder={"url"}></input>
                    <input className="create-input not-blank" type={"text"} placeholder={"promo"}></input>
                    <input className="create-input not-blank" type={"text"} placeholder={"banner"}></input>
                    <input className="create-input" type={"text"} placeholder={"description"}></input>
                    <input className="create-input" type={"text"} placeholder={"year"}></input>
                    <input className="create-input" type={"text"} placeholder={"studio"}></input>
                    <input className="create-input not-blank" type={"text"} placeholder={"episodes"}></input>
                    <input className="create-input" type={"text"} placeholder={"tags"}></input>
                    <input className="create-input" type={"text"} placeholder={"score"}></input>
                    <input className="create-input" type={"text"} placeholder={"status"}></input>
                    <input className="create-input" type={"text"} placeholder={"native"}></input>
                    <input className="create-input" type={"text"} placeholder={"season"}></input>
                </div>
            </div>
        )
    }
}

export default Create;

