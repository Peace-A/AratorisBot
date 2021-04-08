
module.exports = {
    channel: {
        parse: (id) => `<#${id}>`,
        split: (ch) => ch.slice(2, ch.length-1)
    },
    user: {
        parse: (id) => `<@!${id}>`,
        split: (ch) => ch.slice(3, ch.length-1)
    }
    
} 
