(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`Error!`);
                    console.log(err);
                  });
                  const events = require('events');
                  const { exec } = require("child_process")
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const os = require("os-utils");
const ms = require("ms")
let https = require("https")
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);         
                    var authorrr, author, prefix, arguments2, oldmsg, channel, commandwithprefix, response, newmsg, message, channellll, command;

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {
    s4dmessage = newMessage
      authorrr = String((oldMessage).author);
  oldmsg = String(oldMessage);
  newmsg = String(newMessage);
  channellll = String(newMessage.channel);

});

s4d.client.on('messageDelete', async (s4dmessage) => {
  author = String((s4dmessage.member.user).tag);
  channel = String((s4dmessage.channel).name);
  message = String(s4dmessage.content);

});

await s4d.client.login('bot token here').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.author).bot)) {
    if (((s4dmessage.channel).id) == '909236188546740225') {
      if ((s4dmessage).attachments.size !== 0) {
        s4dmessage.react('<:Upvote:937738706931028098>');s4dmessage.react('<:Downvote:937738678283960391>');} else if (((s4dmessage).embeds[0])) {
        s4dmessage.react('<:Upvote:937738706931028098>');s4dmessage.react('<:Downvote:937738678283960391>');}
    }
    if ((s4dmessage.author) == (((s4dmessage.guild).members.cache.get('943527242254942258') || await (s4dmessage.guild).members.fetch('943527242254942258')).user)) {
      (((s4dmessage.guild).members.cache.get('419518052871438359') || await (s4dmessage.guild).members.fetch('419518052871438359'))).send({content:String((s4dmessage.content))}).then(msg =>{
      msg.channel.awaitMessages(response => response.content, { time: (5*60*1000), max: 1,errors: ['time'] }).then(async (collected) => { s4d.reply = collected.first().content;

       s4d.reply = null; }).catch(async (e) => { console.error(e);  })
      });
    }
    if ((s4dmessage.content) == '#snipe') {
      var embed = new Discord.MessageEmbed()
         embed.setTitle((String(message)));
        embed.setDescription(([author,'    at ',channel].join('')));

      (s4dmessage.channel).send({embeds:[embed]});
      s4dmessage.delete();
    }
    if ((s4dmessage.content) == '#rewind') {
      var embed = new Discord.MessageEmbed()
         embed.setTitle(([oldmsg,'  -->  ',newmsg].join('')));
        embed.setDescription(([authorrr,'    at ',channellll].join('')));

      (s4dmessage.channel).send({embeds:[embed]});
      s4dmessage.delete();
    }
  }

});

s4d.client.on('ready', async () => {
  prefix = '#';

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  commandwithprefix = arguments2.splice(0, 1)[0];
  if ((commandwithprefix || '').startsWith(prefix || '')) {
    command = commandwithprefix.slice(((prefix.length + 1) - 1), commandwithprefix.length);
    if (command == 'sure') {
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === 'member')), { SEND_MESSAGES: true });s4dmessage.channel.send({content:String('this channel is no longer locked down')}).then(async (s4dreply) =>{
           await delay(Number(2)*1000);
          s4dreply.delete();

        });
        s4dmessage.delete();
      } else {
        s4dmessage.delete();
      }
    }
    if (command == 'lockdown') {
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        (s4dmessage.channel).permissionOverwrites.edit(((s4dmessage.guild).roles.cache.find((role) => role.name === 'member')), { SEND_MESSAGES: false });s4dmessage.channel.send({content:String('this channel is now locked down')}).then(async (s4dreply) =>{
           await delay(Number(2)*1000);
          s4dreply.delete();

        });
        s4dmessage.delete();
      } else {
        s4dmessage.delete();
      }
    }
    if (command == 'purge') {
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        (s4dmessage.channel).bulkDelete((arguments2|1));
        s4dmessage.channel.send({content:String((['deleted ',arguments2,' messages'].join('')))}).then(async (s4dreply) =>{
           await delay(Number(2)*1000);
          s4dreply.delete();

        });
      } else {
        s4dmessage.delete();
      }
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '#8ball') {
    response = ['don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'As i see it, yes', 'Most likely', 'Outlook good', 'Sings point to yes', 'Yes', 'It is certain', 'IT is decidely so', 'Without a doubt', 'Yes - definitly', 'You may reply on it', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'concentrate and ask again'];
    s4dmessage.channel.send((listsGetRandomItem(response, false)));
  }

});

                    return s4d
                    })();
