const { service } =require('../services');

const adapters = ({info, color})=>{
    try {
        let {statusCode, data, message} = service({info, color});
        // user = {personal, preference}
        return { statusCode, data, message}
    } catch (error) {
        console.log(error);
        return { statusCode: 500, message: error.toString()}
    }
    // return service();
}

module.exports = {
    adapters,
}