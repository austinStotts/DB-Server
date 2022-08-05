import React from "react";  

export default function LiveString (props) {
    // let string = JSON.stringify(props.showobj);
    return (
        <div className="livestring-wrapper">
            <p className="livestring">
                <span className="label">{'"name":'}</span><span className="special">{`"${props.showobj.name}",`}</span>
                <span className="label">{'"showid":'}</span><span className="special">{`"${props.showobj.showid}",`}</span>
                <span className="label">{'"url":'}</span><span className="special">{`"${props.showobj.url}",`}</span>
                <span className="label">{'"promo":'}</span><span className="special">{`"${props.showobj.promo}",`}</span>
                <span className="label">{'"banner":'}</span><span className="special">{`"${props.showobj.banner}",`}</span>
                <span className="label">{'"description":'}</span><span className="special">{`"${props.showobj.description}",`}</span>
                <span className="label">{'"year":'}</span><span className="special">{`"${props.showobj.year}",`}</span>
                <span className="label">{'"studio":'}</span><span className="special">{`"${props.showobj.studio}",`}</span>
                <span className="label">{'"episodes":'}</span><span className="special">{`"${props.showobj.episodes}",`}</span>
                <span className="label">{'"tags":'}</span><span className="special">{`"${props.showobj.tags}",`}</span>
                <span className="label">{'"score":'}</span><span className="special">{`"${props.showobj.score}",`}</span>
                <span className="label">{'"status":'}</span><span className="special">{`"${props.showobj.status}",`}</span>
                <span className="label">{'"native":'}</span><span className="special">{`"${props.showobj.native}",`}</span>
                <span className="label">{'"season":'}</span><span className="special">{`"${props.showobj.season}",`}</span>
                <span className="label">{'"public":'}</span><span className="special">{`"${props.showobj.public}",`}</span>
            </p>
        </div>
    )
}