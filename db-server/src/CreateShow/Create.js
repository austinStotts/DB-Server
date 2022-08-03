import React, {Component} from "react";
import Axios from "axios";
import "../create.css";


class Create extends Component {
    constructor () {
        super()
        this.state = {
            name:"name",
            showid:"showid",
            url:"url",
            promo:"promo",
            banner:"banner",
            description: "description",
            year:"year",
            studio:"studio",
            episodes:"episodes",
            tags: "tags",
            score: "score",
            status: "status",
            native: "native",
            season: "season"
        }
        console.log("CREATE");
        this.pull = this.pull.bind(this);
        this.handleUpdates = this.handleUpdates.bind(this);
    }

    pull () {
        let showid = this.state.showid;
        console.log(this.state)
        Axios.post(`http://localhost:3001/customquery/`, { value: `SELECT * FROM shows WHERE showid = '${showid}';` })
        .then(response => {
            let showobj = response.data
            console.log(showobj);
        }).catch(err => {
            console.log("error")
        })
    }

    handleUpdates (event) {
        // this.setState()
        console.log(event.target.value);
        let key = event.target.id;
        let value = event.target.value
        // console.log(key, value)
        this.setState({ key: value }, () => {
            console.log(this.state.showid)
        });
    }

    render () {
        return (
            <div className="create-wrapper">
                <p className="desc">Please Input Information to make new show</p>
                <p className="desc"><span className="orange">orange</span> colored inputs cannot be left blank</p>
                <div className="inputs-wrapper">
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="name" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.name}></input>
                        <p className="input-description">the name of the show in english. include all case sensitivities and symbols ex: Demon Slayer: Kimetsu no Yaiba</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" id="showid" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.showid}></input>
                        <p className="input-description">the simplefied version of the show name. no spaces or special characters ex: demon_slayer_kimetsu_no_yaiba</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.url}></input>
                        <p className="input-description">the url to the root of the show in aws</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.promo}></input>
                        <p className="input-description">the url to the promo image in aws</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.banner}></input>
                        <p className="input-description">the url to the banner image in aws</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.description}></input>
                        <p className="input-description">description of the show</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.year}></input>
                        <p className="input-description">the year the show started</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.studio}></input>
                        <p className="input-description">the animation studio</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input not-blank" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.episodes}></input>
                        <p className="input-description">number of episodes</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.tags}></input>
                        <p className="input-description">list of desctiptor tags from the master list in comma seperated form</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.score}></input>
                        <p className="input-description">experemental value</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.status}></input>
                        <p className="input-description">the shows current status ex: airing, ended, hiatus</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.native}></input>
                        <p className="input-description">the name of the show in its native language, use native characters</p>
                    </div>
                    <div className="pair-wrapper">
                        <input className="create-input" type={"text"} onKeyUp={this.handleUpdates} placeholder={this.state.season}></input>
                        <p className="input-description">what season this show was aired in. no need for year just the season ex: winter, summer...</p>
                    </div>
                </div>
                <div className="controls-wrapper">
                    <div className="button-wrapper"><button onClick={this.pull}>pull</button></div>
                    <div className="button-wrapper"><button>push</button></div>
                </div>
            </div>
        )
    }
}

export default Create;

