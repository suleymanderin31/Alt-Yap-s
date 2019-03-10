const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "519210018583609365") return message.reply('Bunu Sadece Sahibim Kullanabilir');//NOT: ID KISMINA KENDİ ID NİZİ YAPIŞTIRIN!

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yazı ver.').catch(console.error);
  message.delete();
  message.reply('✔ | Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()   //Bu Kod DBL'den ban,kick gibi sonuçlara yol açabilir! sorumlusu biz olmayız!!!
  .setColor('RANDOM')
  .setTitle(`**Bir Mesajın Var!**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'özelmesaj',
  description: 'Bir kullanıcıya özel mesaj yollar.',
  usage: 'özelmesaj'
};
   
