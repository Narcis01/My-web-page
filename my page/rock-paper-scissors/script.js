var del = document.getElementById("close_rules");
del.addEventListener('click',function(){
    document.getElementById("rules").style.display="none";
    
})

var active_rules = document.getElementById("rules_button");
active_rules.addEventListener('click',function(){
    document.getElementById("rules").style.display="block";
    
})

function computer_pick(){
    var n=Math.floor(Math.random()*4);
    var img_comp=document.getElementById("computer_pick");
    var player = document.getElementById("my_pick");
    var win = document.getElementById("win_div");
    var enemy = document.getElementById("enemy_pick");
    player.style.display="block";
    win.style.display="block";
    enemy.style.display="block";
    
    if(n==1)
        {img_comp.src="images/icon-paper.svg";
        return 1;}
    else if(n==2)
            {img_comp.src="images/icon-rock.svg";
            return 2;}
        else {img_comp.src="images/icon-scissors.svg";
            return 3;}
    
    
}

var rock=document.getElementById("rock");
rock.addEventListener('click', function(){
    var img_p=document.getElementById("player_pick");
    img_p.src="images/icon-rock.svg";

    var display=document.getElementById("choose");
    display.style.display="none";

    var n=computer_pick();
    var win=document.getElementById("win");
        if(n==1)
            win.textContent="Player lost";
        else if(n==2)
            win.textContent="Equality";
            else 
                win.textContent="Player won";


});

var paper=document.getElementById("paper");
paper.addEventListener('click',function(){
    var img_p=document.getElementById("player_pick");
    img_p.src="images/icon-paper.svg";

    var display=document.getElementById("choose");
    display.style.display="none";

    var n=computer_pick();
    var win=document.getElementById("win");
        if(n==1)
            win.textContent="Equality";
        else if(n==2)
            win.textContent="Player won";
            else 
                win.textContent="Player lost";
});

var scissors=document.getElementById("scrissors");
scissors.addEventListener('click',function(){
    var img_p=document.getElementById("player_pick");
    img_p.src="images/icon-scissors.svg";

    var display=document.getElementById("choose");
    display.style.display="none";

    var n=computer_pick();
    var win=document.getElementById("win");
        if(n==1)
            win.textContent="Player won";
        else if(n==2)
            win.textContent="Player lost";
            else 
                win.textContent="Equality";
});

var reset = document.getElementById("reset");
reset.addEventListener('click', function(){
    var player = document.getElementById("my_pick");
    var win = document.getElementById("win_div");
    var enemy = document.getElementById("enemy_pick");
    var choose=document.getElementById("choose");
    choose.style.display="block";
    player.style.display="none";
    win.style.display="none";
    enemy.style.display="none";
})