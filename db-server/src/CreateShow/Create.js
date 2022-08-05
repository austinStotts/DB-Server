import React, {Component} from "react";
import Axios from "axios";
import "../create.css";

import validate from './validate';
import ErrorPopUp from './errorPopUp';
import Break from '../components/break';
import LiveString from './liveString';


class Create extends Component {
    constructor () {
        super()
        this.state = {
            show: {
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
                public: "",
            },
            errors: []
        }
        this.pull = this.pull.bind(this);
        this.handleUpdates = this.handleUpdates.bind(this);
        this.setAttributes = this.setAttributes.bind(this);
        this.clear = this.clear.bind(this);
        this.push = this.push.bind(this);
    }

    clear () {
        // let inputs = ['name','showid','url','promo','banner','description','year','studio','episodes','tags','score','status','native','season', 'public'];
        for(let k in this.state.show) {
            let item = document.getElementById(k);
            item.value = "";
            this.setState({show:{name:"",showid:"",url:"",promo:"",banner:"",description: "",year:"",studio:"",episodes:"",tags: "",score: "",status: "",native: "",season: "",public: "",}})
        }
    }

    setAttributes (obj) {
        for(let k in obj) {
            let item = document.getElementById(k);
            item.value = obj[k];
        }
    }

    push () {
        let showobj = this.state.show;
        this.setState({errors: []})
        let showjson = JSON.stringify(showobj);
        let errors = validate(showobj);
        if(errors.length) {
            // console.log(errors);
            this.setState({ errors });
        } else {
            console.log("CLEAR FOR LIFTOFF");
            Axios.post('http://localhost:3001/update/', {showid: this.state.show.showid, showjson: showjson})
            .then((respose) => {
                console.log("UPDATED");
            }).catch(err => {
                console.log("error on update: ", err);
            })
        }
    }

    pull () {
        let showid = this.state.show.showid;
        if(showid) {
            Axios.post(`http://localhost:3001/customquery/`, { value: `SELECT * FROM shows WHERE showid = '${showid}';` })
            .then(response => {
                let showobj = JSON.parse(response.data.data[0].showjson);
                this.setAttributes(showobj);
                let state = this.state;
                for(let k in showobj) {
                    state.show[k] = showobj[k];
                }
                this.setState(state);
                
            }).catch(err => {
                console.log("error talking to DB: ", err);
            })
        }
    }

    handleUpdates (event) {
        let key = event.target.id;
        let value = event.target.value;
        let state = this.state;
        state.show[key] = value;
        this.setState(state , () => {
            console.log(value, "state: ", this.state)
        });
    }

    render () {
        return (
            <div className="create-wrapper">
                <p className="desc">Please Input Information to make new show</p>
                <p className="desc"><span className="orange">red</span> colored inputs cannot be left blank</p>
                <Break />
                <LiveString showobj={this.state.show} />
                <Break />
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
                <Break />
                <div className="controls-wrapper">
                    <div className="button-wrapper"><button className="btn pull" onClick={this.pull}>pull</button></div>
                    <div className="button-wrapper"><button className="btn push" onClick={this.push}>push</button></div>
                    <div className="button-wrapper"><button className="btn clear" onClick={this.clear}>clear</button></div>
                </div>
                <ErrorPopUp errors={this.state.errors} />
            </div>
        )
    }
}

export default Create;

