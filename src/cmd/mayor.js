
const { memberAddTextChannel, memberAddTextChannel_HelloText } = require("../configManager")
const idResolver = require("../idResolver")

let categoryList = {}
    
categoryList.channelOfNewUsers = (msg, cmd, args) => {
    
    switch(cmd) {
        case "setChannel": return void memberAddTextChannel.set(idResolver.channel.split(args[0]))
        case "setText": return void memberAddTextChannel_HelloText.set(args.join(' '))
    }
    
}
 
module.exports.start = (msg, [category, cmd, ...args]) => {
    
    if ( msg.member.hasPermission("ADMINISTRATOR") )
        categoryList[category](msg, cmd, args)
    else
        msg.reply("Вы не администратор.")
        
}
