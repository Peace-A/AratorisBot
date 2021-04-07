 
module.exports = {
    start(msg, args) {
        console.log(args)
        msg.channel.send(args.join(' '))
    }
}
