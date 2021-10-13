const RequestLog = require('../src/db/models/requestLog')

const createRequestLog = (ip,timestamp,accesskey,result) => {
    console.log(`Logged request from: ${ip}`)
    return new Promise((resolve,reject) =>{
        const requestLog = new RequestLog({
            clientip: ip,
            timestamp: timestamp,
            accesskey: accesskey,
            result: result,
        })
        .save((err) => {
            if(err){
                reject(new Error(err));
            }
            resolve(requestLog);
                
        })
    })
}

module.exports = createRequestLog