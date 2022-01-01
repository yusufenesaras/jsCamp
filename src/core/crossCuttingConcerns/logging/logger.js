export class BaseLogger{
    log(data,logType){
        console.log("Default : " + data)
    }
}
//Loglama Simülasyonu
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}
