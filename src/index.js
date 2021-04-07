
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
    if ( msg.author.bot ) return
    removeIfItReferenceToBot(msg)   
    if ( msg.content.indexOf(PREFIX) !== 0 ) return
    
    // remove prefix from cmd
    let cmd = msg.content.slice(PREFIX.length, msg.content.indexOf(' '))
    
    let args = msg.content.slice(msg.content.indexOf(' '), msg.content.length).split(' ').filter(a=>a)
    
    if ( commands[cmd] !== undefined)
        commands[cmd].start(msg, args)
    
    console.log(cmd, args)
    
//     console.log(msg)
})

client.login(TOKEN)

async function removeIfItReferenceToBot(msg) {
    if (msg.reference !== null && (await msg.channel.messages.fetch( msg.reference.messageID )).author.bot ) msg.delete()
}
