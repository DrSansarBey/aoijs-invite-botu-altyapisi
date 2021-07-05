module.exports = ({
 name:"giriş-mesaj",
code:`$if[$message[1]==ayarla]
$setServerVar[girişmesaj;$messageSlice[1]]
  Giriş mesajı \`$messageSlice[1]\` olarak ayarlandı!
  $onlyIf[$messageSlice[1]!=;{title:HATA}{description:Bir giriş mesajı giriniz.
Davet mesajında kullanabileceğiniz özel tagler;
  
  \`-davetedilenisim-\` **Davet edilen kişiyi etiketlemeden ismini söyler.**
  \`-davetedilen-\` **Davet edilen kişiyi etiketler.**
  \`-davetedenisim-\` **Davet eden kişiyi etiketlemeden ismini söyler.**
  \`-daveteden-\` **Davet eden kişiyi etiketler.**
  \`-davetsayısı-\` **Davet eden kişinin kaç davet sayısı olduğunu söyler.**}{color:BLACK}]
   $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:BLACK}]
$endif
  $if[$message[1]==sıfırla]
  $setServerVar[girişmesaj;-davetedilen- sunucuya **-davetedenisim-** tarafından davet edildi, davet sayısı **-davetsayısı-** oldu!]
  Giriş mesajı sıfırlandı!
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:BLACK}]
$endif
$argsCheck[>1;{title:HATA}{description:Lütfen $getServerVar[prefix]giriş-mesaj ayarla/sıfırla yazınız.}{color:BLACK}]
`}) 
