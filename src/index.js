
const { Client } = require("discord.js")
const { TOKEN, PREFIX } = require("../config.json")
const replitServKeeper = require("./replitServKeeper")
const { readdirSync } = require('fs')
const { basename } = require("path")

replitServKeeper.keep()

const client = new Client()

const cmdNameList = readdirSync("./src/cmd/");
const commands = {}
for (let cmd of cmdNameList)
    commands[basename(cmd, ".js")] = require(`./cmd/${cmd}`)

client.on("message", async msg => {
    if ( msg.author.bot ) return;
    if ( await isReferenceToBot(msg) ) { msg.delete(); return }
    if ( msg.content.indexOf(PREFIX) !== 0 ) return;
    
    // remove prefix from cmd
    if ( msg.content.indexOf(' ') !== -1 )
        var cmd = msg.content.slice(PREFIX.length, msg.content.indexOf(' '))
    else
        var cmd = msg.content.slice(PREFIX.length, msg.content.length)
    
    let args = msg.content.slice(msg.content.indexOf(' '), msg.content.length).split(' ').filter(a=>a)
    
    if ( commands[cmd] !== undefined)
        commands[cmd].start(msg, args)
    
    console.log(cmd, args)
})

// load events functionality
const eventNameList = readdirSync("./src/events/")
for ( let event of eventNameList )
    for ( let scriptName of readdirSync(`./src/events/${event}/`) )
        client.on(event, require(`./events/${event}/${scriptName}`).start)


client.login(TOKEN)

async function isReferenceToBot(msg) {
    return msg.reference !== null && (await msg.channel.messages.fetch( msg.reference.messageID )).author.bot 
}
