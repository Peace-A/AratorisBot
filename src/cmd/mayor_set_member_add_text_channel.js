 
const { memberAddTextChannel } = require("../configManager")
const idResolver = require("../idResolver")
 
module.exports = {
    start(msg, [arg]) {
        console.log(idResolver.channel.split(arg))
        memberAddTextChannel.set(idResolver.channel.split(arg))
    }
}
