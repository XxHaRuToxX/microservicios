const personalData = ({info})=>{
    // return {name:'Haruto', age:'26'}
    if(info.editor === "vs"){
        console.log('The editor is from Microsoft')
    }
    if(info.editor === "android studio"){
        console.log('The editor is from google')
    }
    if(info.editor === "atom"){
        console.log('The editor is public')
    }
    return info;
}
const preferenceColor = ({color})=>{
    // return [ 'yellow', 'black']
    if(color === "Green"){
        return 'blue'
    }
    if(color === "White"){
        return 'Black'
    }
    if(color === "Yellow"){
        return 'Red'
    }
    return color;
}
module.exports = {
    personalData,
    preferenceColor,
}