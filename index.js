var Quote=[
    {Quote:"It's not what happens to you, but how you react to it that matters.",
        auther:"--Epictetus"
    }
    ,{Quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        auther:"--Nelson Mandela"
    },
    {
        Quote:"You miss 100% of the shots you don't take.",
        auther:"--Wayne Gretzy"
    },
    {
      Quote:"Be yourself; everyone else is already taken.",
      auther:"― Oscar Wilde",
    },
    {
        Quote:"So many books, so little time.",
        auther:"― Frank Zappa"
    },
    {
        Quote:"We accept the love we think we deserve",
        auther:"-Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        Quote:"You only live once, but if you do it right, once is enough.",
        auther:"― Mae West"
    },
    {
        Quote:"Be the change that you wish to see in the world.",
        auther:"― Mahatma Gandhi"
    },
    {
        Quote:"Always forgive your enemies; nothing annoys them so much.",
        auther:"― Oscar Wilde"
    },
    {
        Quote:"Without music, life would be a mistake.",
        auther:"― Friedrich Nietzsche, Twilight of the Idols"
    },
]
function getQoutes(){
    var num=Math.floor(Math.random()*Quote.length)
    console.log(num);
    document.getElementById("Quote").innerHTML=Quote[num].Quote;
    document.getElementById("auther").innerHTML=Quote[num].auther;
}
