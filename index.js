const { adapters } = require('./adapters');

const main = ()=>{
    try {
        const result = adapters({
            info:{name:'Nadie', edad:18, editor:'vs'},
            color:"Green"
        });
        if(result.statusCode !== 200) throw(result.message)
        console.log("Tu data es: ",result.data);    
        
    } catch (error) {
        console.log(error)
    }
}

main();

