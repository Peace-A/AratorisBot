 
const { aternosUser, aternosPassword } = require("../configManager")

const Aternode = require('aternode');
const aternos = new Aternode();


module.exports.start = async (msg) => {
    await aternos.login({user:aternosUser.get(),password:aternosPassword.get()})
    await aternos.getServers(1)
    await aternos.start()
    
    aternos.autoConfirm(info => {
        msg.reply("**СЕРВЕР ЗАПУЩЕН**")
    });
}
