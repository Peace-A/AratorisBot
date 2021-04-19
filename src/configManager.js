 
const { readFileSync, writeFileSync } = require("fs")

class ConfigChanger {
 
    constructor(property) {
        this.property = property
    }
    
    get() {
        return getConfig()[this.property]
    }
    
    set(value) {
        let newConfig = getConfig()
        newConfig[this.property] = value
        setConfig(newConfig)
    }
    
}
 
module.exports = {
    prefix: new ConfigChanger("PREFIX"),
    memberAddTextChannel: new ConfigChanger("memberAddTextChannelID"),
    memberAddTextChannel_HelloText: new ConfigChanger("memberAddTextChannel_HelloText"),
    aternosUser: new ConfigChanger("aternosUser"),
    aternosPassword: new ConfigChanger("aternosUser")
}



function getConfig() {
    return JSON.parse(readFileSync("./config.json"), "utf-8")
}

function setConfig(config) {
    writeFileSync("./config.json", JSON.stringify(config) )
}
