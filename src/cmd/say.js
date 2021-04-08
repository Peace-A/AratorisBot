 
module.exports = {
    start(msg, args) {
        msg.channel.send(args.join(' '))
        msg.delete()
    }
}
