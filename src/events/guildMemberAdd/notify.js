 
const { memberAddTextChannel, memberAddTextChannel_HelloText } = require("../../configManager")
const idResolver = require("../../idResolver") 

module.exports = {
    start(member) {
        if ( memberAddTextChannel.get() === undefined ) return
            
        let channel = member.guild.channels.cache.find( ch => ch.id === memberAddTextChannel.get() )
        let username = idResolver.user.parse(member.user.id)
        
        channel.send(`${username} ${ memberAddTextChannel_HelloText.get() }`)
    }
}
