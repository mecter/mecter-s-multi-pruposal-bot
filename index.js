(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let URL = require('url')
    const ms = require("ms")
    let DIG = require("discord-image-generation")
    let https = require("https")
    const { TicTacToe } = require("discord-gamecord");
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    const Database  = require("easy-json-database")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
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

    // check if d.js is v13
    if(!require('./package.json').dependencies['discord.js'].includes("13.")) console.log("Seems you arent using v13 please run `npm i discord.js@13.12.0`");

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    

    // blockly code
    var author, authorrr, abc, channel, oldmsg, message, newmsg, channellll, response;
    
    function listsGetRandomItem(list, remove) {
      var x = Math.floor(Math.random() * list.length);
      if (remove) {
        return list.splice(x, 1)[0];
      } else {
        return list[x];
      }
    }
    
    
    s4d.client.on('interactionCreate', async (interaction) => {
            let member = interaction.guild.members.cache.get(interaction.member.user.id)
              if ((interaction.commandName) == 'purge') {
        if ((interaction.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
          // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: 'deleting messages!', ephemeral: true, components: [] });
          (interaction.channel).bulkDelete(((interaction.options.getInteger('messages'))|1));
          await delay(Number(2)*1000);
          await interaction.editReply({ content: (['Successfully deleted ',interaction.options.getInteger('messages'),' messages!'].join('')), components: [] });
        } else {
          // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: `Sorry, you dont have perms to use this command.
          You Need \`Manage Messages\` Perms To Use This Command`, ephemeral: true, components: [] });
        }
      }
      if ((interaction.commandName) == 'snipe') {
        var embed = new Discord.MessageEmbed()
           embed.setTitle((String(message)));
          embed.setDescription(([author,'    at ',channel].join('')));
    
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'snipex') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (fs.readFileSync('database.json', 'utf8')), ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'rewind') {
        var embed = new Discord.MessageEmbed()
           embed.setTitle(([oldmsg,'  -->  ',newmsg].join('')));
          embed.setDescription(([authorrr,'    at ',channellll].join('')));
    
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == '8ball') {
        response = ['don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'As i see it, yes', 'Most likely', 'Outlook good', 'Sings point to yes', 'Yes', 'It is certain', 'It is decidely so', 'Without a doubt', 'Yes - definitly', 'You may reply on it', 'Answer unclear, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];
        var magicball = new Discord.MessageEmbed();
           magicball.setThumbnail(String('https://bloximages.chicago2.vip.townnews.com/thesunchronicle.com/content/tncms/assets/v3/editorial/c/90/c90b939e-fe9a-5a59-b9d8-875bf19dec95/5a298e4b4a396.image.jpg?resize=500%2C500'));
          magicball.setColor('#000000');
          magicball.setTitle(String((interaction.options.getString('your_question'))))
           magicball.setURL(String());
          magicball.setDescription(String(('the magic 8 ball says... ' + String(listsGetRandomItem(response, false)))));
    
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({embeds: [magicball], ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'poll') {
        var embed = new Discord.MessageEmbed();
           embed.setAuthor({name: String(((interaction.member.user).username)), iconURL: String(), url: String()});
          embed.setTitle(String((String(interaction.options.getString('question')))))
           embed.setURL(String());
    
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });
        abc.react('👍')
            abc.react('👎')
            }
      if ((interaction.commandName) == 'tictactoe') {
    
            new TicTacToe({
                message: interaction,
                slash_command: true,
                opponent: (interaction.options.getMember('opponent')),
                embed: {
                    title: 'Tic Tac Toe',
                    overTitle: 'Game Over',
                    color: '#5865F2',
                },
                oEmoji: '🔵',
                xEmoji: '❌',
                blankEmoji: '➖',
                oColor: 'PRIMARY',
                xColor: 'DANGER',
                waitMessage: 'Waiting for the opponent...',
                turnMessage: '{emoji} | Its now **{player}** turn!',
                askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
                cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. :(',
                timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
                drawMessage: 'It was a draw!',
                winMessage: '{emoji} | **{winner}** won the game!',
                gameEndMessage: 'The game went unfinished :(',
            }).startGame();
            }
      if ((interaction.commandName) == 'image') {
        if ((interaction.options.getString('type')) == 'gay') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Gay().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'greyscale') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Greyscale().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'invert') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Invert().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'sepia') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Sepia().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'ad') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Ad().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'affect') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Affect().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'beautiful') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Beautiful().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'bobross') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Bobross().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'confusedstonk') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.ConfusedStonk().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'delete') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Delete().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'discordblack') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlack().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'discordblue') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlue().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'facepalm') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Facepalm().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'hitler') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Hitler().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'jail') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Jail().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'karaba') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Karaba().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'mms') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Mms().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'notstonk') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.NotStonk().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'poutine') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Poutine().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'rip') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Rip().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'stonk') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Stonk().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'tatoo') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Tatoo().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'thomas') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Thomas().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'trash') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Trash().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        } else if ((interaction.options.getString('type')) == 'circle') {
          (interaction.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Circle().getImage(((interaction.options.getMember('member')).displayAvatarURL({format:"png"})))), "image.png"))]});
          await interaction.reply({ content: 'done!', ephemeral: true, components: [] });
        }
      }
    
        });
    
    await s4d.client.login('token').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    s4d.client.on('messageDelete', async (s4dmessage) => {
      author = String((s4dmessage.member.user).tag);
      channel = String((s4dmessage.channel).name);
      message = String(s4dmessage.content);
      snipex.set(String((['<t:',Math.floor(new Date().getTime()/1000),':R>'].join(''))), message);
    
    });
    
    const snipex = new Database('./database.json')
    s4d.client.on('ready', async () => {
      await delay(Number('3600')*1000);
      snipex.clear()
    });
    
    s4d.client.on('ready', async () => {
      s4d.client.user.setPresence({status: "online",activities:[{name:'version 2.1078lines-of-code',type:"WATCHING"}]});
    
    });
    
    s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {
        s4dmessage = newMessage
          authorrr = String((oldMessage).author);
      oldmsg = String(oldMessage.content);
      newmsg = String(newMessage.content);
      channellll = String(newMessage.channel);
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      abc = (s4dmessage);
      if (!((s4dmessage.author).bot)) {
        if (((s4dmessage.channel).id) == '909236188546740225') {
          if ((s4dmessage).attachments.size !== 0) {
            s4dmessage.react('<:Upvote:937738706931028098>');s4dmessage.react('<:Downvote:937738678283960391>');} else if (((s4dmessage).embeds[0])) {
            s4dmessage.react('<:Upvote:937738706931028098>');s4dmessage.react('<:Downvote:937738678283960391>');}
        }
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (!((s4dmessage.channel) == s4d.client.channels.cache.get('1045503295025852520'))) {
        s4d.client.channels.cache.get('1045503295025852520').send({content:String((s4dmessage.content))});
      }
    
    });
    
    synchronizeSlashCommands(s4d.client, [
      {
          name: 'tictactoe',
      		description: 'play tictactoe against someone',
      		options: [
              {
            type: 6,
        	name: 'opponent',
            required: true,
        	description: 'select your opponent',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'poll',
      		description: 'make a quick poll',
      		options: [
              {
              type: 3,
        			name: 'question',
        			description: 'what is the poll for',
        			required: true,
              choices: [
    
              ]
        },
          ]
      },{
          name: '8ball',
      		description: 'ask the 8ball something',
      		options: [
              {
              type: 3,
        			name: 'your_question',
        			description: 'what will you ask the 8 ball?',
        			required: true,
              choices: [
    
              ]
        },
          ]
      },{
          name: 'rewind',
      		description: 'see what the last message was before being edited',
      		options: [
    
          ]
      },{
          name: 'snipe',
      		description: 'see what was the last message deleted',
      		options: [
    
          ]
      },{
          name: 'snipex',
      		description: 'the ultimate snipe! see all deleted messages from the past hour',
      		options: [
    
          ]
      },{
          name: 'purge',
      		description: 'for antiraid reasons, the limit is 99 and the messages cant be older than 2 weeks',
      		options: [
              {
              type: 4,
        			name: 'messages',
        			description: 'messages',
        			required: true,
              choices: [
    
              ]
        },
          ]
      },{
          name: 'image',
      		description: 'edit your friend\'s avatar!',
      		options: [
              {
            type: 3,
        	name: 'type',
            required: true,
        	description: 'what type of edit do you want?',
            choices: [
                  {
              name: String('gay'),
              value: String('gay')
          },{
              name: String('greyscale'),
              value: String('greyscale')
          },{
              name: String('invert'),
              value: String('invert')
          },{
              name: String('sepia'),
              value: String('sepia')
          },{
              name: String('ad'),
              value: String('ad')
          },{
              name: String('affect'),
              value: String('affect')
          },{
              name: String('beautiful'),
              value: String('beautiful')
          },{
              name: String('bobross'),
              value: String('bobross')
          },{
              name: String('confusedstonk'),
              value: String('confusedstonk')
          },{
              name: String('delete'),
              value: String('delete')
          },{
              name: String('discordblack'),
              value: String('discordblack')
          },{
              name: String('discordblue'),
              value: String('discordblue')
          },{
              name: String('facepalm'),
              value: String('facepalm')
          },{
              name: String('hitler'),
              value: String('hitler')
          },{
              name: String('jail'),
              value: String('jail')
          },{
              name: String('karaba'),
              value: String('karaba')
          },{
              name: String('mms'),
              value: String('mms')
          },{
              name: String('notstonk'),
              value: String('notstonk')
          },{
              name: String('poutine'),
              value: String('poutine')
          },{
              name: String('rip'),
              value: String('rip')
          },{
              name: String('stonk'),
              value: String('stonk')
          },{
              name: String('tatoo'),
              value: String('tatoo')
          },{
              name: String('thomas'),
              value: String('thomas')
          },{
              name: String('trash'),
              value: String('trash')
          },{
              name: String('circle'),
              value: String('circle')
          },
            ]
        },{
            type: 6,
        	name: 'member',
            required: true,
        	description: 'Wich member will you select?',
            choices: [
    
            ]
        },
          ]
      },
    ],{
        debug: false,
    
    });
    
    return s4d
})();