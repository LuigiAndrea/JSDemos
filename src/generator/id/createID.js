function *createID(){
    let id = 1;
    while(true){
        yield id++;
    }
}

module.exports = {
    IDGenerator: {
        createID
    }
}
