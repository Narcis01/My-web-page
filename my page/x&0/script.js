const c11=document.getElementById("c11");
const c12=document.getElementById("c12");
const c13=document.getElementById("c13");
const c21=document.getElementById("c21");
const c22=document.getElementById("c22");
const c23=document.getElementById("c23");
const c31=document.getElementById("c31");
const c32=document.getElementById("c32");
const c33=document.getElementById("c33");
const message=document.getElementById("message");
let i=0;
let finish=0;

function verif11()
{
    let a=11;
    game(a);    
}
function verif12()
{
    let a=12;
    game(a);
}
function verif13()
{
    let a=13;
    game(a);
}
function verif21()
{
    let a=21;
    game(a);
}
function verif22()
{
    let a=22;
    game(a);
}
function verif23()
{
    let a=23;
    game(a);
}
function verif31()
{
    let a=31;
    game(a);
}
function verif32()
{
    let a=32;
    game(a);
}
function verif33()
{
    let a=33;
    game(a);
}

function game(a)
{   
    if(game_ok())
    switch (a){
        case 11: 
                box11();        
                break;
        case 12: 
                box12();        
                break;
        case 13: 
                box13();        
                break;
        case 21: 
                box21();        
                break;
        case 22: 
                box22();        
                break;
        case 23: 
                box23();        
                break;
        case 31: 
                box31();        
                break;
        case 32: 
                box32();        
                break;
        case 33: 
                box33();        
                break;
        default: break;
    }
    verif_game();
    
}

function box11(){
    if(c11.textContent==' ' && i%2==1)
        {c11.textContent='X';
        i++;
        console.log(i);}
    else if(c11.textContent==' ' && i%2==0)
        {c11.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);;
}

function box12(){
    if(c12.textContent==' ' && i%2==1)
        {c12.textContent='X';
        i++;
        console.log(i);}
    else if(c12.textContent==' ' && i%2==0)
        {c12.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box13(){
    if(c13.textContent==' ' && i%2==1)
        {c13.textContent='X';
        i++;
        console.log(i);}
    else if(c13.textContent==' ' && i%2==0)
        {c13.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box21(){
    if(c21.textContent==' ' && i%2==1)
        {c21.textContent='X';
        i++;
        console.log(i);}
    else if(c21.textContent==' ' && i%2==0)
        {c21.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box22(){
    if(c22.textContent==' ' && i%2==1)
        {c22.textContent='X';
        i++;
        console.log(i);}
    else if(c22.textContent==' ' && i%2==0)
        {c22.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box23(){
    if(c23.textContent==' ' && i%2==1)
        {c23.textContent='X';
        i++;
        console.log(i);}
    else if(c23.textContent==' ' && i%2==0)
        {c23.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box31(){
    if(c31.textContent==' ' && i%2==1)
        {c31.textContent='X';
        i++;
        console.log("Sdsada");}
    else if(c31.textContent==' ' && i%2==0)
        {c31.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box32(){
    if(c32.textContent==' ' && i%2==1)
        {c32.textContent='X';
        i++;
        console.log(i);}
    else if(c32.textContent==' ' && i%2==0)
        {c32.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function box33(){
    if(c33.textContent==' ' && i%2==1)
        {c33.textContent='X';
        i++;
        console.log(i);}
    else if(c33.textContent==' ' && i%2==0)
        {c33.textContent='O';
        i++;
        console.log(i);}
    else console.log(i);
}

function verif_game(){
        if(c11.textContent==c12.textContent && c11.textContent==c13.textContent && (c11.textContent=='X' || c11.textContent=='O') )
            {message.textContent=c11.textContent+ " won!";
            finish=1;}
        else if(c11.textContent==c22.textContent && c11.textContent==c33.textContent && (c11.textContent=='X' || c11.textContent=='O'))
            {message.textContent=c11.textContent+" won!";
            finish=1;}
            else if(c11.textContent==c21.textContent && c11.textContent==c31.textContent && (c11.textContent=='X' || c11.textContent=='O'))
                {message.textContent=c11.textContent+ " won!";
                finish=1;}
                else if(c21.textContent==c22.textContent && c21.textContent==c23.textContent && (c21.textContent=='X' || c21.textContent=='O'))
                    {message.textContent=c21.textContent+ " won!";
                    finish=1;}
                    else if(c31.textContent==c32.textContent && c31.textContent==c33.textContent && (c31.textContent=='X' || c31.textContent=='O'))
                    {message.textContent=c31.textContent+ " won!";
                    finish=1;}
                        else if(c13.textContent==c22.textContent && c13.textContent==c31.textContent && (c13.textContent=='X' || c13.textContent=='O'))
                                {   message.textContent=c13.textContent+" won!";
                                    finish=1;}
                            else if(c12.textContent==c22.textContent && c12.textContent==c32.textContent && (c12.textContent=='X' || c12.textContent=='O'))
                                    {  message.textContent=c12.textContent+" won!";
                                        finish=1;}
                                else if(c13.textContent==c23.textContent && c13.textContent==c33.textContent && (c13.textContent=='X' || c13.textContent=='O'))
                                    {message.textContent=c13.textContent+ " won!";
                                        finish=1;}           
                    
}

function game_ok(){
    if(finish==1)
        return 0;

    else if(i==9 )
    {message.textContent="Equality";
        return 0;}
        else return 1;
}

function restart(){
    i=1;
    finish=0;
    c11.textContent=' ';
    c12.textContent=' ';
    c13.textContent=' ';
    c21.textContent=' ';
    c22.textContent=' ';
    c23.textContent=' ';
    c31.textContent=' ';
    c32.textContent=' ';
    c33.textContent=' ';
    message.textContent=' ';
}