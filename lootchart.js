var creatures = [
    {name:"bandit", loot:["gold", "kinfe", "fire"]},
    {name:"fen", loot:["ruby", "sword", "apple"]},
    {name:"squirl", loot:["ruby", "sword", "apple"]}
]
var creChoice = undefined;
function temp(){

}

//onclick=window.location.href='"+creatures[i]+".html'

function mainLoad(){
    for(var i=0;i<creatures.length;i++){
        
        var x = document.getElementById("creatures");
        var y = document.createElement("div");
        y.setAttribute("id",creatures[i].name);
        console.log(creatures[i].name);
        y.innerHTML = "<button onclick='"+creatures[i].name+"Loot()'>"+creatures[i].name+"</button>"
        x.appendChild(y);
        
    }

}

function banditLoot(){
    console.log(creatures[0].loot);
}