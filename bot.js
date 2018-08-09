
const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ["431007974581075970" , "463272623548137483" , "370828320910213131"] // هنا يتم وضع ايدي اونر البوت
const prefix = '-' // هنا يتم وضع البرفكس الخاص بالبوت

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('فديت الي ينقط :joy:');
  }
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** هذه الأوامر فقط للسيرفرات**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**لست من المشرفين لا يمكنك طرد الأعضاء**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يمتلك خاصية طرد الأعضاء**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكن طرد شخص يمتلك رتبة اكبر من رتبة البوت**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**تم طردك بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**وذلك بسبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



//=============================================
client.on('message', msg => { 
        if (msg.content.startsWith(prefix + 'warn')) {
          if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
           let args = msg.content.split(" ").slice(1);
          if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
 
          if (msg.guild.channels.find('name', 'warns')) {
 
            msg.guild.channels.find('name', 'warns').send(`
         لقد تلقيت انذاراً: ${msg.mentions.members.first()}
          وذلك بسبب
          ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
          `)
          }
        }
})




client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!pro) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', pro)
            .setColor('#ff0000')
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});






//////////////////////////////////////////////////////////

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 30,
        maxAge: 8640,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**لقد تم ارسال الرابط برسالة خاصة**")

message.author.send(`

**مدة الرابط : يـوم
عدد استخدامات الرابط : 30
**`)


    }
});


client.on("message", message => {

            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
            if(!message.channel.guild) return message.reply('**عزيزي , لا يمكن مسح الشات إلا داخل السيرفرات**');				
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **عزيزي أنت لست مشرفاً**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "حذف الرسائل",
        color: 0x06DF00,
        description: "لقد تم حذف الرسائل بنجاح ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


 client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
		if(!message.channel.guild) return message.reply('** عزيزي , هذه الأوامر فقط للسيرفرات **');
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**لا تملك الرتبة الكافية لإستعمال هذا الأمر ❌**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**عدد أعضاء السيرفر 👤 **' , `${message.guild.memberCount}`)
.addField('**صاحب السيرفر 👑**' , `${message.guild.owner.user.username}`)
.addField(`**الرومات في السيرفر :scroll: **`,true)
.addField(`# الرومات الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الرومات الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**جميع الرتب**:briefcase:`,`${message.guild.roles.size}`)
.addField(`📆 تاريخ إنشاء السيرفر`, message.guild.createdAt ,true)
        message.channel.send({embed:embed})
    }
});


client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emoji')) {
					if(!message.channel.guild) return message.reply(' عزيزي , هذه الأوامر فقط للسيرفرات ');
        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});





client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "-closeroms") {
                        if(!message.channel.guild) return message.reply(' عزيزي , هذه الأوامر فقط للسيرفرات ');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**عزيزي , انت لست من المشرفين لتستعمل هذه الخاصية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم إقفال شات ✅ , ولا يمكن لأحد التحدث عدا المشرفين**")
           });
             }
if (message.content === "-openroms") {
    if(!message.channel.guild) return message.reply('**عزيزي , هذه الأوامر فقط للسيرفرات**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('يجب ان تكون مسؤول الرسائل , او ان تكون مشرفاً');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply(" تم فتح الشات ✅, ويمكن للجميع التحدث الآن")
           });
             }



});





client.on("message", message => {
      if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('** : سرعة الإتصال هي**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (message.author.abokhalil) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('**هذه الأوامر تستعمل فقط في سيرفر ليجند**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لست من المشرفين فلا يمكنك حظر الأعضاء**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**البوت لا يملك خاصية ` BAN_MEMBERS ` وشكرا**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لا يمكن حظر شخص يمتلك رتبة اكبر من رتبة البوت**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`لقد تم حظرك`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**تم حظرك بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**وذلك بسبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
if(message.content.startsWith(prefix + 'myinv')) {
let guild = message.guild
var codes = [""]
message.channel.send("📮 **لقد تم ارسال جميع الدعوات التي قمت بإنشائها في رسالة خاصة**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`جميع الدعوات التي انشأتها ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`=-=-=-=-=-=-=-=-=- ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('message', (message)=>{
        if (message.content.startsWith(`+embed`)) {
                var embed = new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setTitle("Message By " + message.author.tag)
                .setDescription(message.content.split(" ").join(" ").slice(7))
                .setColor("RANDOM")
                .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
        } else if (message.content.startsWith(`+say`)) {
                message.channel.send(message.content.split(" ").join(" ").slice(5));
        };
})

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'color')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.send(`

╔[❖══════════════════════❖]╗
 A للون الأحمر اختر 
-=-=-=-=-=-=-=-=-=-=-=-=
 B للون الأخضراختر
-=-=-=-=-=-=-=-=-=-=-=-=
 C للون الأزرق اختر
-=-=-=-=-=-=-=-=-=-=-=-=
 D للون البرتقالي
-=-=-=-=-=-=-=-=-=-=-=-=
 E للون الأصفر اختر
-=-=-=-=-=-=-=-=-=-=-=-=
 F للون الأسود اختر
-=-=-=-=-=-=-=-=-=-=-=-=
 X لحذف جميع الألوان اختر
-=-=-=-=-=-=-=-=-=-=-=-=
╚[❖══════════════════════❖]╝


`).then(msg => {
 
       
        
        
        msg.react('🇦').then(r=>{
        msg.react('🇧').then(r=>{
        msg.react('🇨').then(r=>{
        msg.react('🇩').then(r=>{
        msg.react('🇪').then(r=>{
        msg.react('🇫').then(r=>{
        msg.react('❌').then(r=>{


  // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵     
   


    
     
     let activeFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
      
                                    //red                    
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "5"))
                                  
message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم تسليمك اللون الأحمر بنجاح ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});                   
})


//لون اسود


 let y1Filter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
     
       let y1 = msg.createReactionCollector(y1Filter, { time: 15000 });
      
                                    //t                    
                               y1.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "3"))
                                   
                                   
                            
                                 

message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم تسليمك اللون الأزرق بنجاح ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});     


   })

 //لون اصفر 
let y2Filter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
     
       let y2 = msg.createReactionCollector(y2Filter, { time: 15000 });
      
                                                    
                               y2.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "2"))
                                   
                                   
                            
                                 

message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم تسليمك اللون الأخضر بنجاح",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});   
                               })
                               
                               //الون الاخضر

let y3Filter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
     
       let y3 = msg.createReactionCollector(y3Filter, { time: 15000 });
      
                                                    
                               y3.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "7"))
                                   
                                   
message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم تسليمك اللون البرتقالي بنجاح",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});   
 })
    //الون البنفسجي

let y4Filter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
     
       let y4 = msg.createReactionCollector(y4Filter, { time: 15000 });
      
                                                    
                               y4.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "6"))
                                   
                                   
                            
                                 
message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم تسليمك اللون الأصفر بنجاح",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});   
})
   //الون الازرق فاتح

let y5Filter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "20"))
                                   
                                   
                            
message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم تسليمك اللون الأسود بنجاح",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});   
})
})
let y6Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
       let y6 = msg.createReactionCollector(y6Filter, { time: 15000 });
      
                                                    
                               y6.on("collect", r => {
                                   message.member.removeRole(message.guild.roles.find("name", "5"))
                                   
                                   message.member.removeRole(message.guild.roles.find("name", "3"))
                                   message.member.removeRole(message.guild.roles.find("name", "2"))
                                   message.member.removeRole(message.guild.roles.find("name", "17"))
                                  message.member.removeRole(message.guild.roles.find("name", "6"))
                                  message.member.removeRole(message.guild.roles.find("name", "20"))
                                  
                            
                                 
message.channel.sendMessage("", {embed: {
        title: "نظام الألوان",
        color: 0x06DF00,
        description: " :white_check_mark:  | لقد تم إزالة جميع الألوان التي لديك",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(10000)});   
})

                               })
        })
})
})
        
})
})
})

       }
                                   
                                   }); 
								   
								   
/////////////////////////////////////////////////////////



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كلب')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('لعنة')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تلعن",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('يلعنك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تلعن",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('حمار')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('ولد')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('wtf')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('ابن ال')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('fuc')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('fu*')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('ابناء')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('حبة')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('امك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()	 
   if(!message.channel.guild) return message.reply('**بسم الله ما شاء الله على الذكاء .. تبي البوت يدخل سيرفرك ؟ 😂🤣**');
   message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');
            
	
		 


 message.author.sendMessage(`
 **

╔[❖══════════════════════❖]╗
        الأوامر العامة
╚[❖══════════════════════❖]╝


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
❖ -avatar ➾ لإرسال صورتك او صورة من تمنشنه
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
❖ -color ➾ لتغيير لونك في لسيرفر
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
❖ -ping ➾ لمعرفة سرعة اتصال البوت
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
❖ -info ➾ لمعرفة نبذه عنك
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
❖ -myinv ➾ لمعرفة عدد الدعوات الخاصة بك
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 .:::: LG Server ::::.

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-admin") {
		 if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(`
		 
		 **لست من المشرفين لن يتم ارسال الرسالة إليك**
		 
		 
		 `);
		 message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');
            
	
		 


 message.author.sendMessage(`
 **

╔[❖══════════════════════❖]╗
       اوامر المشرفين
╚[❖══════════════════════❖]╝

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -kick <mention> <reason> ➾ لطرد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -ban <mention> <reason> ➾ لحظر الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -clear ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ -mute < mention > ➾ لإعطاء ميوت للإعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -unmute <mention> ➾ لفك الميوت عن الأعضاء
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ -bc <message> ➾ لإرسال رسالة جماعية
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -closeroms ➾ لإغلاق الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ -openroms  ➾ لفتح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -server  ➾ لمعرفة نبذه عن السيرفر
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ -warn  <mention> <reason> ➾ لإعطاء انذار لأحد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

By abokhalil
`);

    }
});






client.on('message', abokhalil => {
  if (abokhalil.content.startsWith('-mute')) {
if (!abokhalil.member.hasPermission("MANAGE_MESSAGES")) return abokhalil.channel.send("**يجب ان تكون من المشرفين لإعطاء ميوت كتابي**");
let men = abokhalil.mentions.users.first()
let mas = abokhalil.author
if(!men) return abokhalil.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
abokhalil.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${abokhalil.author.id}> **`)
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(abokhalil.guild.name, abokhalil.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${abokhalil.author.id}> `)
abokhalil.channel.sendEmbed(Embed11).then(abokhalil => {abokhalil.delete(6000)})
    }
})



client.on('message', abokhalil => {
  if (abokhalil.content.startsWith('-unmute')) {
if (!abokhalil.member.hasPermission("MANAGE_MESSAGES")) return abokhalil.channel.send("**يجب ان تكون من المشرفين لفك الميوت الكتابي**");
let men = abokhalil.mentions.users.first()
let mas = abokhalil.author
if(!men) return abokhalil.channel.send('`منشن الشخص الذي تريد ان تفك عنه الميوت` ');
abokhalil.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: true
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
..:::: LG Server ::::..
لقد تم  فك الميوت عنك
بواسطة : <@${abokhalil.author.id}> **`)
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(abokhalil.guild.name, abokhalil.guild.iconURL)
.setDescription(`
..:::: LG Server ::::..
لقد تم فك الميوت الكتابي
بواسطة : <@${abokhalil.author.id}> `)
abokhalil.channel.sendEmbed(Embed11).then(abokhalil => {abokhalil.delete(6000)})
    }
})

  
  
  



client.on('message', message =>{
    let args = message.content.split(' ');
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});




 client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'info')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| تاق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**قم بعمل منشن بالطريقة الصحيحة**').catch(console.error);

}

});



	   // 433743115837243412
								   

client.login(process.env.BOT_TOKEN);
