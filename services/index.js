const { personalData, preferenceColor } = require('../controllers')

const service = ({info, color})=>{
    try {
        const personal = personalData({info});
        const preference = preferenceColor({color});
        
        sadasd
        if(personal.edad >=18){
            return {personal, preference}
        }else{
            return {personal, preference:'usted es menor de edad' }
        }
        throw("MENSAJE")
    } catch (error) {
        console.log({step: 'service Service', error: error.toString()})
        return { statusCode: 500, message: error.toString()}
    }

}
module.exports = {
    service,
}