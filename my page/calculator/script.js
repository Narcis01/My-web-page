var n=0;
function collect_number(s){
    
    console.log(s);
    switch (s){
        case -1: restart();
                break;
        case -2: var number=parseFloat(document.getElementById('rez').textContent,10);
                 document.getElementById('rez').textContent=(number*number).toFixed(4);
                 break;  
        case '√': var number=Math.sqrt(parseFloat(document.getElementById('rez').textContent,10)).toFixed(4);
                  document.getElementById('rez').textContent=number; 
                  break;
        
        case '=':   prelucrare();
                    break;          

        default:  var number=document.createTextNode(s);
                  document.getElementById('rez').appendChild(number);
                  break;
    }    
   


    


}


function restart(){
    document.getElementById('rez').textContent=' ';
    n=0;
}


function prelucrare(){
    var content=document.getElementById('rez').textContent;
    console.log(content);
    var first_number='\0';
    var second_number='\0';
    var sign;
    var i=1;
    if(n==0)
    i=1;
    else i=0;
    n++;
    while(content[i]!='/' && content[i]!='X' && content[i]!='-' && content[i]!='+' && content!=' ')
    {
        first_number=first_number+content[i];
        i++;
        }
    console.log(first_number);
    sign=content[i];
    console.log(sign);
    for(i=i+1;i<content.length ;i++)
        second_number=second_number+content[i];
    console.log(second_number);
    var first_number_int=0;
    var second_number_int=0;
    var a;
    for(i=1;i<first_number.length && first_number[i]!='.';i++)
    {   a=parseFloat(first_number[i],10);
        first_number_int=first_number_int*10;
        first_number_int+=a;
    }
    var p=1;
    for(i=i+1;i<first_number.length;i++)
    {
        a=parseFloat(first_number[i],10);
        a=a/ (p*10.0);
        first_number_int+=a;
        p=p*10;
    }

    for(i=1;i<second_number.length && second_number[i]!='.';i++)
    {
        a=parseFloat(second_number[i],10);
        second_number_int=second_number_int*10;
        second_number_int+=a;
    }

    p=1;
    for(i=i+1;i<second_number.length;i++)
    {
        a=parseFloat(second_number[i],10);
        a=a/ (p*10.0);
        second_number_int+=a;
        p=p*10;
    }
    if(sign=='/')
        document.getElementById('rez').textContent=(first_number_int/second_number_int).toFixed(4);
    else if(sign=='X')
            document.getElementById('rez').textContent=first_number_int*second_number_int;
            else if(sign=='-')
                    document.getElementById('rez').textContent=first_number_int-second_number_int;
                    else if(sign=='+')
                    document.getElementById('rez').textContent=first_number_int+second_number_int;
           
}