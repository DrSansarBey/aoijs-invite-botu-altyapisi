module.exports = ({
name:"çıkış-kanal",
code:`$setServerVar[çıkış;$replaceText[$replaceText[$message[1];ayarla;$mentionedChannels[1;yes];-1];sıfırla; ;-1]]
  $replaceText[$replaceText[$message[1];ayarla;Çıkışların sayılacağı kanal <#$mentionedChannels[1;yes]> olarak ayarlandı;-1];sıfırla;Çıkışların sayıldığı kanal sıfırlandı;-1]
   $onlyIf[$checkContains[$message[1];sıfırla;ayarla]==true;{title:HATA}{description:Lütfen $getServerVar[prefix]çıkış-kanal ayarla veya $getServerVar[prefix]çıkış-kanal sıfırla yazınız}{color:BLACK}] 
  $onlyPerms[admin;{title:HATA}{description:Sadece Yöneticiler Çıkış kanal ayarlaya/sıfırlaya bilir!}{color:BLACK}]`
})  
