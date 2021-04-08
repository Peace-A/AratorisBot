 
const { memberAddTextChannel_HelloText } = require("../configManager")
 
module.exports = {
    start(msg, args) {
        memberAddTextChannel_HelloText.set(args.join(' '))
    }
}
 
