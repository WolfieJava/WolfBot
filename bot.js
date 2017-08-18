const Discord = require('discord.js');
const config = require('./config.json');
const fs = require("fs");
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');
const embed = new Discord.RichEmbed()

client.on("ready", () => {
console.log(`${client.user.username} is now Online! Please do ${config.prefix}help to get a list of help Commands!`)
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
if (message.content.startsWith(config.prefix + 'restart')) {
if (message.author.id != config.owner)
return message.channel.send(`**Sorry! You\'re not the owner :P How did you find this command though? :thinking:\nBot Owner: \`\n${client.users.get(config.owner).username}\`\**`);
message.channel.send(`**Shutting Down! :wave:**`).then(() => process.exit(0));
} else
if (message.content.startsWith(config.prefix + 'ping')) {
message.channel.send(`**Pong!** :ping_pong: Took __**${Math.round(client.ping)}ms**__ to reply. `)
} else
if(message.content.startsWith(config.prefix + "prefix")) {
if (message.author.id !== config.owner)
return message.channel.send(`**I\'m sorry ${message.author}, but you\'re not the __\`\BOT OWNER!\`\__ :no_entry_sign:**`);
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

message.channel.send(`**Successfuly Changed the Prefix to \`\n${config.prefix}\`\**`)
} else
  if (message.content.startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.owner) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

client.on("message", message => {

if (message.content.startsWith(config.prefix + 'guilds')) {
message.channel.send(`**Sent in DM's ;)**`);
message.author.send(`**Currently in ${client.guilds.size} Guilds, here are the Guild Names!!** \n`+ client.guilds.map(g=>`**\`\`\n\nGuild Name: ${g.name} , ${g.memberCount} Members\n\n\`\`**`).join('\n'))
} else
   if(message.content.startsWith(config.prefix + 'kick')) {
     if(message.author.bot) return;
    var user = message.mentions.users.first();
	var member = message.guild.member(user);
	var reason = message.content.split(' ').slice(2).join(' ');
	  let role = message.member.hasPermission('KICK_MEMBERS');
		if (!message.member.hasPermission('KICK_MEMBERS'))
		return message.channel.sendMessage("You don't have the permission Kick Members !");
	       if (!user)
		return message.channel.sendMessage('Who is the person that you will kick?');
	       if (!reason)
		return message.channel.sendMessage(`Why are you gonna kick ${user.username}`);
	       message.channel.sendMessage(`**${user.username}** got kicked by **${message.author.username}** for **${reason}**.`)
member.kick()
  } else
   if(message.content.startsWith(config.prefix + 'ban')) {
     if(message.author.bot) return;
    var user = message.mentions.users.first();
	var member = message.guild.member(user);
	var reason = message.content.split(' ').slice(2).join(' ');
	  let role = message.member.hasPermission('BAN_MEMBERS');
		if (!message.member.hasPermission('BAN_MEMBERS'))
		return message.channel.sendMessage("You don't have the permission Ban Members !");
	       if (!user)
		return message.channel.sendMessage('Who is the person that you will ban?');
	       if (!reason)
		return message.channel.sendMessage(`Why are you gonna ban ${user.username}`);
	       message.channel.sendMessage(`**${user.username}** got banned by **${message.author}** for **${reason}**.`)
member.ban()
}
});
client.on("message", message => {
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');
  if (message.content.startsWith(config.prefix + "clr")) {
 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You Dont Have Enough Permissions!');
	if (message.author == client.user) return;
      let messagecount = parseInt(result);
      message.channel.fetchMessages({
        limit: messagecount + 1
      }).then(messages => message.channel.bulkDelete(messages));
} else
if(message.content.startsWith(config.prefix + 'meme')){ 
if (message.author == client.user) return;

    var memes = ["http://godbots.pw/memes/gif/1.gif", "http://godbots.pw/memes/gif/2.gif", "http://godbots.pw/memes/gif/3.gif", "http://godbots.pw/memes/gif/4.gif", "http://godbots.pw/memes/gif/5.gif", "http://godbots.pw/memes/gif/6.gif", "http://godbots.pw/memes/gif/7.gif", "http://godbots.pw/memes/gif/8.gif", "http://godbots.pw/memes/gif/9.gif", "http://godbots.pw/memes/gif/10.gif", "http://godbots.pw/memes/gif/11.gif", "http://godbots.pw/memes/gif/12.gif", "http://godbots.pw/memes/gif/13.gif", "http://godbots.pw/memes/gif/14.gif", "http://godbots.pw/memes/gif/15.gif", "http://godbots.pw/memes/gif/16.gif", "http://godbots.pw/memes/gif/17.gif", "http://godbots.pw/memes/gif/18.gif", "http://godbots.pw/memes/gif/19.gif", "http://godbots.pw/memes/gif/20.gif", "http://godbots.pw/memes/gif/21.gif", "http://godbots.pw/memes/gif/22.gif", "http://godbots.pw/memes/gif/23.gif", "http://godbots.pw/memes/gif/24.gif", "http://godbots.pw/memes/gif/25.gif", "http://godbots.pw/memes/gif/26.gif", "http://godbots.pw/memes/gif/27.gif", "http://godbots.pw/memes/gif/28.gif", "http://godbots.pw/memes/gif/29.gif", "http://godbots.pw/memes/gif/30.gif", "http://godbots.pw/memes/gif/31.gif", "http://godbots.pw/memes/gif/32.gif", "http://godbots.pw/memes/gif/33.gif", "http://godbots.pw/memes/gif/34.gif", "http://godbots.pw/memes/gif/35.gif", "http://godbots.pw/memes/gif/36.gif", "http://godbots.pw/memes/gif/37.gif"];
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.URL)
    .setColor(0x00AE86)
    .setImage(memes[Math.floor(Math.random() * memes.length)])
     message.channel.sendEmbed(embed);
}});
	  
client.on('message', message => {
        if (message.content.startsWith(config.prefix + 'info')) {
          message.channel.sendEmbed({
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          color: 14147633,
    fields: [{
        name: 'Total Servers',
        value: `I Am In ${client.guilds.size} Servers`,
	inline: true
      },
      {
        name: 'Total Users',
        value: `${client.guilds.reduce((p, c) => p + c.memberCount, 0)} Users`,
        inline: true
      },
      {
        name: 'My Owner',
        value: `<@320293954883026944>` ,
        inline: true
      },
      {
        name: 'Developers',
        value: `<@320293954883026944>` ,
        inline: true
      },
      {
       name: 'Memory Usage',
       value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
       inline: true
      },
      {
       name: 'Uptime',
       value: `${require('ms')(client.uptime, {long:true})}`,
       inline: true
      },
      {
       name: 'Library',
       value: '[Discord.js](https://discord.js.org/#/)',
       inline: true
      },
      {
       name: "Ping time",
       value: Math.round(client.ping),
       inline: true
      }]
      })}});

client.on('message', message => {
let args = message.content.split(' ').slice(1);
if(message.content.startsWith(config.prefix + 'mute')) {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'member-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
message.channel.send('**__User successfully muted/unmuted__**');

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    })
}
}});

client.on("message", msg => {
if (msg.content.startsWith(config.prefix + 'avatar')) {
    let avatar = msg.mentions.users.size ? msg.mentions.users.first().avatarURL : msg.author.avatarURL;
    if (msg.mentions.users.size > 0) {
        msg.channel.send(`Here\'s the Avatar link for, **${msg.mentions.users.first()}**\n${avatar}`);
    } else {
      msg.channel.send(`Here\'s the Avatar link for, **${msg.author}**\n${avatar}`);
    }
}});

client.on("message", message => {
        var args = message.content.split(/[ ]+/);

if(message.content.startsWith(config.prefix + 'embed')) {
     if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== config.owner) return message.reply('**You Are Missing The Permissions Manage Messages! :no_entry_sign:**');
    if (message.author == client.user) return;
message.delete();

embed.setColor('RANDOM');
embed.setDescription(args.join(" ").substring(6));

message.channel.send({ embed });
}
});

client.on('message', message => {
if (message.content.startsWith(config.prefix + 'help'))
message.channel.sendMessage('**Sent in DM\'s**').then(() => {
message.author.sendMessage({embed: {
    color: 11206655,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    url: "https://discord.js.org/#/",
    description: "This is all the commands for Discord Chill™!",
    fields: [{
        name: "-kill",
        value: "Kill your enemies!"
      },
      {
        name: "-bump",
        value: "Bumped!"
      },
      {
        name: "-ping",
        value: "Shows the bot's ping!"
      },
      {
        name: "-avatar",
        value: "Get your friends avatar!"
      },
      {
        name: "-support",
        value: "Get the support Discord"
      },
      {
        name: "-ban",
        value: "Bans a Specified User with a reason"
      },
      {
        name: ";kick",
        value: "Kicks a Specified User with a reason"
      },
      {
        name: "-info",
        value: "Shows the bot's info"
      },
      {
        name: "-userinfo",
        value: "Show's your and/or other peoples Info"
      },
      {
        name: "-embed",
        value: "Embeds what you say!"
      },
      {
        name: "-meme",
        value: "Shows random Memes"
      },
      {
        name: "-mute",
        value: "Do it once, to mute. Do it two times to unmute!"
      },
      {
        name: "-say",
        value: "Say's what you want."
      },
      {
        name: "-guilds",
        value: "Shows all the guilds this bot is in!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Discord Chill"
    }
  }
})
})
});
client.on('message', message => {
if (message.content.startsWith(config.prefix + 'kill')) {
var user = message.mentions.users.first();
if (!user) 
return message.channel.send(`**Please Specify a user to kill!**`);
message.channel.send({embed: {
  color: 000000,
description: `**__${message.mentions.users.first()}__ Got slayed by ${message.author} :crossed_swords:**`
}})}});

client.on('message', message => {
if (message.content.startsWith(config.prefix + 'userinfo')) {

  let user = message.mentions.users.first();
  if (!user) {
    user = message.author;
  }
  let nick = message.guild.members.get(user.id).nickname;
  if (!nick) {
    nick = 'No Nicknames';
  }
  let status = user.presence.status;
  if (status === 'online') {
    status = 'Online';
  }
  else if (status === 'idle') {
    status = 'Idle';
  }
  else if (status === 'dnd') {
    status = 'Do Not Disturb';
  }
  else {
    status = 'Invisible';
  }
  let isStream = 'Current Game';
  if (user.presence.game && user.presence.game.streaming) {
    isStream = 'Current Stream';
  }
  let game;
  if (user.presence.game === null) {
    game = 'No Game Displayed';
  }
  else if (user.presence.game.streaming) {
    game = `[${user.presence.game.name}](${user.presence.game.url})`;
  }
  else {
    game = user.presence.game.name;
  }
  let roles = message.guild.members.get(user.id).roles.map(r => r.name).slice(1).join('\n');
  if (roles.length === 0) roles = '-';

  message.channel.send({
    embed: {
      color: 000000,
      title: 'User Info',
      fields: [
        {
          name: 'Name',
          value: user.tag,
          inline: true
        },
        {
          name: 'ID',
          value: user.id,
          inline: true
        },
        {
          name: 'Nickname',
          value: nick,
          inline: true
        },
        {
          name: 'Roles',
          value: roles,
          inline: true
        },
        {
          name: 'Joined Server',
          value: message.guild.members.get(user.id).joinedAt.toUTCString(),
          inline: true
        },
        {
          name: 'Joined Discord',
          value: user.createdAt.toUTCString(),
          inline: true
        },
        {
          name: 'Status',
          value: status,
          inline: true
        },
        {
          name: isStream,
          value: game,
          inline: true
        }
      ],
  }
  });
}});

	client.on('message', m => {
        if (m.content.startsWith(config.prefix + 'say')) {
            if (!m.member.hasPermission('ADMINISTRATOR') && m.author.id !== config.owner)
return m.channel.send(`**${m.author} You lack the permissions \'\ADMINISTRATOR\'\n Try asking the Guild Owner/Admin for access. :no_entry_sign:**`);	
                var say = m.content.split(" ").splice(1).join(" ")
                m.delete();
                m.channel.send(say)
}
});

client.login(config.token);