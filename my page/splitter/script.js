
function price(p){
    var bill=document.getElementById("bill_value").value;
    var person=document.getElementById("number_people").value;
    var price_total=document.getElementById("price_total");
    var total=document.getElementById("price_person");
    var sum=parseInt(bill)/parseInt(person);
    
    total.textContent='$'+ sum.toFixed(2);

    var procent=(p/100.0);
    var sum2=parseInt(bill)+(p/100)*parseInt(bill);
    sum2=sum2/person;
    
    price_total.textContent="$ "+sum2.toFixed(2);
    
   
}

function restart(){
    document.getElementById("bill_value").value=' ';
    document.getElementById("number_people").value=' ';
    var price_total=document.getElementById("price_total");
    var total=document.getElementById("price_person");
    
    
    price_total.textContent='$0.00';
    total.textContent='$0.00';
}


