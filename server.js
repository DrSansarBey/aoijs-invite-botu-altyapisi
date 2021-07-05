const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  mobile: true, 
  token: "TOKEN",
  prefix: ["$getServerVar[prefix]"],
  fetchInvites: true})

//callbackler
bot.onMessage()
bot.onJoined()
bot.onLeave()

bot.loadCommands(`./commands/`)

//variableler
bot.variables({
  giriş: "",
  çıkış: "",
  prefix:".",
  girişmesaj:"-davetedilen- sunucuya **-davetedenisim-** tarafından davet edildi, davet sayısı **-davetsayısı-** oldu!",
  çıkışmesaj:"-davetedilenisim- ayrıldı, sunucuya **-davetedenisim-** tarafından davet edilmişti, davet sayısı **-davetsayısı-** olarak güncellendi.",
})
//durum
bot.status({text: "Candy | İnvite",
type: "PLAYING",
time: 12});
//davet sayacı
bot.command({
name: "davetler",
code: `
$title[$userTag[$mentioned[1;yes]]'in davetleri]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[
Toplam: $sum[$userInfo[real;$mentioned[1;yes]];$userInfo[fake;$mentioned[1;yes]]]
Gerçek: $userInfo[real;$mentioned[1;yes]]
Ayrılan: $userInfo[fake;$mentioned[1;yes]]]
$color[BLACK]`})
//loglar
bot.joinCommand({
channel:"$getServerVar[giriş]",
code:`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[girişmesaj];-daveteden-;<@$userInfo[inviter]>;1];-davetedilenisim-;$username;1];-davetedilen-;<@$authorID>;1];-davetedenisim-;$username[$userInfo[inviter]];1];-davetsayısı-;$userInfo[real;$userInfo[inviter]];1]
$suppressErrors[$username aramıza katıldı! Kimin tarafından davet edildiğini bulamıyorum.]`}) 
bot.leaveCommand({
channel:"$getServerVar[çıkış]",
code:`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[çıkışmesaj];-daveteden-;<@$userInfo[inviter]>;1];-davetedilenisim-;$username;1];-davetedilen-;<@$authorID>;1];-davetedenisim-;$username[$userInfo[inviter]];1];-davetsayısı-;$userInfo[real;$userInfo[inviter]];1]
$suppressErrors[$username ayrıldı, kimin tarafından davet edildiğini bulamıyorum.]`})
//aktif oldum
bot.readyCommand({
  channel:"Hazırım kanal ID",
  code:`Aktif oldum. 
Şuanki sunucu sayım: \`$serverCount\` 
Şuanki kullanıcı sayım: \`$allMembersCount\`
Pingim: \`$ping\`
Komut sayım: \`$commandsCount\``}) 
