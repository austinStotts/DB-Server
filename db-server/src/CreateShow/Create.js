import React, {Component} from "react";
import Axios from "axios";
import "../create.css";

import validate from './validate';


class Create extends Component {
    constructor () {
        super()
        this.state = {
            name:"",
            showid:"",
            url:"",
            promo:"",
            banner:"",
            description: "",
            year:"",
            studio:"",
            episodes:"",
            tags: "",
            score: "",
            status: "",
            native: "",
            season: "",
            public: ""
        }
        this.pull = this.pull.bind(this);
        this.handleUpdates = this.handleUpdates.bind(this);
        this.setAttributes = this.setAttributes.bind(this);
        this.clear = this.clear.bind(this);
        this.push = this.push.bind(this);
    }

    clear () {
        // let inputs = ['name','showid','url','promo','banner','description','year','studio','episodes','tags','score','status','native','season', 'public'];
        for(let k in this.state) {
            let item = document.getElementById(k);
            item.value = "";
        }
    }

    setAttributes (obj) {
        for(let k in obj) {
            let item = document.getElementById(k);
            item.value = obj[k];
        }
    }

    push () {
        let showobj = this.state;
        console.log(JSON.stringify(showobj));
        let errors = validate(showobj);
        if(errors.length) {
            console.log(errors);
        } else {
            console.log("CLEAR FOR LIFTOFF")
        }
    }

    pull () {
        let showid = this.state.showid;
        if(showid) {
            Axios.post(`http://localhost:3001/customquery/`, { value: `SELECT * FROM shows WHERE showid = '${showid}';` })
            .then(response => {
                let showobj = JSON.parse(response.data.data[0].showjson);
                this.setState(showobj, () => {
                    this.setAttributes(showobj);
                });
            }).catch(err => {
                console.log("error talking to DB: ", err);
            })
        }
    }

    handleUpdates (event) {
        let value = { [event.target.id]: event.target.value }
        this.setState(value , () => {
            // console.log(this.state)
        });
    }

    render () {
        return (
            <div className="create-wrapper">
                <p className="desc">Please Input Information to make new show</p>
                <p className="desc"><span className="orange">red</span> colored inputs cannot be left blank</p>
                <div className="inputs-wrapper">
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="name" type={"text"} onKeyUp={this.handleUpdates} placeholder={"name"}></input>
                        <p className="input-description">the name of the show in english. include all case sensitivities and symbols ex: Demon Slayer: Kimetsu no Yaiba</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="showid" type={"text"} onKeyUp={this.handleUpdates} placeholder={"showid"}></input>
                        <p className="input-description">the simplefied version of the show name. no spaces or special characters ex: demon_slayer_kimetsu_no_yaiba</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="url" type={"text"} onKeyUp={this.handleUpdates} placeholder={"url"}></input>
                        <p className="input-description">the url to the root of the show in aws</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="promo" type={"text"} onKeyUp={this.handleUpdates} placeholder={"promo"}></input>
                        <p className="input-description">the url to the promo image in aws</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="banner" type={"text"} onKeyUp={this.handleUpdates} placeholder={"banner"}></input>
                        <p className="input-description">the url to the banner image in aws</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="description" type={"text"} onKeyUp={this.handleUpdates} placeholder={"description"}></input>
                        <p className="input-description">description of the show</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="year" type={"text"} onKeyUp={this.handleUpdates} placeholder={"year"}></input>
                        <p className="input-description">the year the show started</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="studio" type={"text"} onKeyUp={this.handleUpdates} placeholder={"studio"}></input>
                        <p className="input-description">the animation studio</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="episodes" type={"text"} onKeyUp={this.handleUpdates} placeholder={"episodes"}></input>
                        <p className="input-description">number of episodes</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="tags" type={"text"} onKeyUp={this.handleUpdates} placeholder={"tags"}></input>
                        <p className="input-description">list of desctiptor tags from the master list in comma seperated form</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="score" type={"text"} onKeyUp={this.handleUpdates} placeholder={"score"}></input>
                        <p className="input-description">experemental value</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="status" type={"text"} onKeyUp={this.handleUpdates} placeholder={"status"}></input>
                        <p className="input-description">the shows current status ex: airing, ended, hiatus</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="native" type={"text"} onKeyUp={this.handleUpdates} placeholder={"native"}></input>
                        <p className="input-description">the name of the show in its native language, use native characters</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" id="season" type={"text"} onKeyUp={this.handleUpdates} placeholder={"season"}></input>
                        <p className="input-description">what season this show was aired in. no need for year just the season ex: winter, summer...</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="public" type={"text"} onKeyUp={this.handleUpdates} placeholder={"public"}></input>
                        <p className="input-description">true or false, will disable the show from being shown if false</p>
                    </div>
                </div>
                <div className="controls-wrapper">
                    <div className="button-wrapper"><button className="btn pull" onClick={this.pull}>pull</button></div>
                    <div className="button-wrapper"><button className="btn push" onClick={this.push}>push</button></div>
                    <div className="button-wrapper"><button className="btn clear" onClick={this.clear}>clear</button></div>
                </div>
            </div>
        )
    }
}

export default Create;

