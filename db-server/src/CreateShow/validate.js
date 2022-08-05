export default function validate (obj) {
    console.log(obj)
    let errorList = [];
    if(obj.name === "" ) {errorList.push("name was left blank")}
    if(obj.showid === "") {errorList.push("showid was left blank")}
    if(obj.promo === "") {errorList.push("promo was left blank")}
    if(obj.banner === "") {errorList.push("banner was left blank")}
    if(obj.episodes === "") {errorList.push("episodes was left blank")}
    if(obj.year === "") {errorList.push("year was left blank")}
    if(obj.studio === "") {errorList.push("studio was left blank")}
    if(obj.public === "") {errorList.push("public was left blank")}
    if(obj.public !== "true" && obj.public !== "false") {errorList.push("public was not a boolean")}

    if('true') {
        console.log("1: TRUE")
    } 

    if('false') {
        console.log("2. TRUE!")
    }
    return errorList;
}