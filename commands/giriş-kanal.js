module.exports = ({
name:"giriş-kanal",
code:`$setServerVar[giriş;$replaceText[$replaceText[$message[1];ayarla;$mentionedChannels[1;yes];-1];sıfırla; ;-1]]
  $replaceText[$replaceText[$message[1];ayarla;Girişlerin sayılacağı kanal <#$mentionedChannels[1;yes]> olarak ayarlandı;-1];sıfırla;Girişlerin sayıldığı kanal sıfırlandı;-1]
   $onlyIf[$checkContains[$message[1];sıfırla;ayarla]==true;{title:HATA}{description:Lütfen $getServerVar[prefix]giriş-kanal ayarla veya $getServerVar[prefix]giriş-kanal sıfırla yazınız}{color:BLACK}] 
  $onlyPerms[admin;{title:HATA}{description:Sadece Yöneticiler Giriş kanal ayarlaya/sıfırlaya bilir!}{color:BLACK}]`
})  
