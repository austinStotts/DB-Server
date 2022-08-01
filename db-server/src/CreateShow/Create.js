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
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} placeholder={"name"}></input>
                        <p className="input-description">
                        the name of the show in english. Include all case sensitivities and symbols [Demon Slayer: Kimetsu no Yaiba]</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} placeholder={"showid"}></input>
                        <p className="input-description">The simplefied version of the show name. No spaces or special characters [demon_slayer_kimetsu_no_yaiba]</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"url"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} placeholder={"promo"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} placeholder={"banner"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"description"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"year"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"studio"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} placeholder={"episodes"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"tags"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"score"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"status"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"native"}></input>
                        <p className="input-description"></p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} placeholder={"season"}></input>
                        <p className="input-description"></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create;

