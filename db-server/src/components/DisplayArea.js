import React from "react"

export default function DisplayArea (props) {
    // console.log(props)
    // console.log("inside display area: ", props.styles);
    return (
        
        <div className="displayarea-wrapper">
            <textarea style={props.styles} disabled className="displayarea" value={props.data}>{}</textarea>
        </div>
    )
}