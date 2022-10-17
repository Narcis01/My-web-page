function start(){
    var data_all='https://restcountries.com/v3.1/all';
    fetch(data_all)
        .then( (Response)=>{
            return Response.json();
        } )
        .then( (data) =>{
            console.log(data);
            
            for(i=0;i<250;i++)
            {
                var button=document.createElement('button');
                button.className='country_container light';
                

                var flag=document.createElement('img');
                var img_flag=data[i].flags.svg
                flag.src=img_flag;
                
                flag.className='flag';
                button.appendChild(flag);

                var name=document.createElement('div');
                name.textContent=`${data[i].name.common}`;
                button.appendChild(name);

                var population = document.createElement('div');
                population.textContent=`Population: ${data[i].population} `;
                button.appendChild(population);

                var region = document.createElement('div');
                region.textContent=`Region: ${data[i].region}`;
                button.appendChild(region);

                var capital = document.createElement('div');
                capital.textContent=`Capital: ${data[i].capital}`;
                button.appendChild(capital);

                document.getElementById('country').appendChild(button);
            }



        } )
}

function schedule(event){
    var n=this.options[this.selectedIndex].text;
    console.log(n);
    var parent=document.getElementById('country');
    while(parent.firstChild)
        {
            parent.removeChild(parent.firstChild);
        }
    switch(n)
    {
        case ('africa'):
            var region ='https://restcountries.com/v3.1/region/africa';
            fetch(region)
            .then( (Response)=>{
                return Response.json();
            } )
            .then((data)=>{
                console.log(data);
                for(i=0;i<59;i++)
                {
                    var button=document.createElement('button');
                    button.className='country_container';
    
                    var flag=document.createElement('img');
                    var img_flag=data[i].flags.svg
                    flag.src=img_flag;
                    
                    flag.className='flag';
                    button.appendChild(flag);
    
                    var name=document.createElement('div');
                    name.textContent=`${data[i].name.common}`;
                    button.appendChild(name);
    
                    var population = document.createElement('div');
                    population.textContent=`Population: ${data[i].population} `;
                    button.appendChild(population);
    
                    var region = document.createElement('div');
                    region.textContent=`Region: ${data[i].region}`;
                    button.appendChild(region);
    
                    var capital = document.createElement('div');
                    capital.textContent=`Capital: ${data[i].capital}`;
                    button.appendChild(capital);
    
                    document.getElementById('country').appendChild(button);
                }
            })
            break;
        case ('europe'):
            var region ='https://restcountries.com/v3.1/region/europe';
            fetch(region)
            .then( (Response)=>{
                return Response.json();
            } )
            .then((data)=>{
                console.log(data);
                for(i=0;i<53;i++)
                {
                    var button=document.createElement('button');
                    button.className='country_container light';
    
                    var flag=document.createElement('img');
                    var img_flag=data[i].flags.svg
                    flag.src=img_flag;
                    
                    flag.className='flag';
                    button.appendChild(flag);
    
                    var name=document.createElement('div');
                    name.textContent=`${data[i].name.common}`;
                    button.appendChild(name);
    
                    var population = document.createElement('div');
                    population.textContent=`Population: ${data[i].population} `;
                    button.appendChild(population);
    
                    var region = document.createElement('div');
                    region.textContent=`Region: ${data[i].region}`;
                    button.appendChild(region);
    
                    var capital = document.createElement('div');
                    capital.textContent=`Capital: ${data[i].capital}`;
                    button.appendChild(capital);
    
                    document.getElementById('country').appendChild(button);
                }
            })
            break;
        case ('america'):
            var region ='https://restcountries.com/v3.1/region/america';
            fetch(region)
            .then( (Response)=>{
                return Response.json();
            } )
            .then((data)=>{
                console.log(data);
                for(i=0;i<56;i++)
                {
                    var button=document.createElement('button');
                    button.className='country_container light';
    
                    var flag=document.createElement('img');
                    var img_flag=data[i].flags.svg
                    flag.src=img_flag;
                    
                    flag.className='flag';
                    button.appendChild(flag);
    
                    var name=document.createElement('div');
                    name.textContent=`${data[i].name.common}`;
                    button.appendChild(name);
    
                    var population = document.createElement('div');
                    population.textContent=`Population: ${data[i].population} `;
                    button.appendChild(population);
    
                    var region = document.createElement('div');
                    region.textContent=`Region: ${data[i].region}`;
                    button.appendChild(region);
    
                    var capital = document.createElement('div');
                    capital.textContent=`Capital: ${data[i].capital}`;
                    button.appendChild(capital);
    
                    document.getElementById('country').appendChild(button);
                }
            })
            break;
        case ('asia'):
            var region ='https://restcountries.com/v3.1/region/asia';
            fetch(region)
            .then( (Response)=>{
                return Response.json();
            } )
            .then((data)=>{
                console.log(data);
                for(i=0;i<50;i++)
                {
                    var button=document.createElement('button');
                    button.className='country_container light';
    
                    var flag=document.createElement('img');
                    var img_flag=data[i].flags.svg
                    flag.src=img_flag;
                    
                    flag.className='flag';
                    button.appendChild(flag);
    
                    var name=document.createElement('div');
                    name.textContent=`${data[i].name.common}`;
                    button.appendChild(name);
    
                    var population = document.createElement('div');
                    population.textContent=`Population: ${data[i].population} `;
                    button.appendChild(population);
    
                    var region = document.createElement('div');
                    region.textContent=`Region: ${data[i].region}`;
                    button.appendChild(region);
    
                    var capital = document.createElement('div');
                    capital.textContent=`Capital: ${data[i].capital}`;
                    button.appendChild(capital);
    
                    document.getElementById('country').appendChild(button);
                }
            })
            break;
        case ('oceania'):
            var region ='https://restcountries.com/v3.1/region/oceania';
            fetch(region)
            .then( (Response)=>{
                return Response.json();
            } )
            .then((data)=>{
                console.log(data);
                for(i=0;i<27;i++)
                {
                    var button=document.createElement('button');
                    button.className='country_container light';
    
                    var flag=document.createElement('img');
                    var img_flag=data[i].flags.svg
                    flag.src=img_flag;
                    
                    flag.className='flag';
                    button.appendChild(flag);
    
                    var name=document.createElement('div');
                    name.textContent=`${data[i].name.common}`;
                    button.appendChild(name);
    
                    var population = document.createElement('div');
                    population.textContent=`Population: ${data[i].population} `;
                    button.appendChild(population);
    
                    var region = document.createElement('div');
                    region.textContent=`Region: ${data[i].region}`;
                    button.appendChild(region);
    
                    var capital = document.createElement('div');
                    capital.textContent=`Capital: ${data[i].capital}`;
                    button.appendChild(capital);
    
                    document.getElementById('country').appendChild(button);
                }
            })
    }
    
}


document.getElementById("input_value").addEventListener('keyup',function(event){
    if(event.keyCode==13)
        {
        var content=document.getElementById("content");
        content.style.display="none";
        console.log(document.getElementById("input_value").value);
        var country=document.getElementById("input_value").value; 
        var location = `https://restcountries.com/v2/name/${country}`;
        document.getElementById("separate_country").style.display="block";
        fetch(location)
        .then((Response)=>{
            return Response.json();
        })
        .then((data)=>{
            console.log(data);

            var flag = document.getElementById("flag_solo");
            var flag_img = data[0].flags.svg;
            flag.src=flag_img;

            var name = document.getElementById("solo_country");
            name.textContent=`${data[0]["name"]}`;

            var native_name=document.getElementById("native_name");
            native_name.textContent=`Native Name: ${data[0]['nativeName']}`;

            var population = document.getElementById("population");
            population.textContent=`Population ${data[0].population}`;

            var region = document.getElementById("region_solo");
            region.textContent = `Region: ${data[0].region}`;

            var sub_region = document.getElementById("sub_region");
            sub_region.textContent = `Sub region: ${data[0].subregion}`;

            var capital = document.getElementById("capital");
            capital.textContent = `Capital: ${data[0].capital}`;

            var domain = document.getElementById("domain");
            domain.textContent = `Top Level Domain: ${data[0].topLevelDomain}`;

            var currencies = document.getElementById("currencies");
            currencies.textContent = `Currencies: ${data[0].currencies[0].code}`;

            var languages = document.getElementById("languages");
            languages.textContent = `Languages ${data[0].languages[0].name}`;

            var border= document.getElementById("border");
            border.textContent = `Border: ${data[0].borders}`;
        })
        }

})


document.getElementById("back").addEventListener('click',function(){
    document.getElementById("separate_country").style.display="none";
    document.getElementById("content").style.display="block";
})

var n=0;

document.getElementById("dark_mode").addEventListener('click',function(){
    
    if(n%2==0)
    {
        document.getElementById("title").style.color="black";

        document.getElementById("header").style.backgroundColor="#EFEEEE";

        document.getElementById("dark_mode").style.backgroundColor="#EFEEEE";
        
        document.getElementById("container").style.backgroundColor="#A0A0A0";
        
        document.getElementById("input_value").style.backgroundColor="#EFEEEE"
        document.getElementById("input_value").style.color="black";

        document.getElementById("select").style.backgroundColor="#EFEEEE";
        document.getElementById("select").style.color="black";

        document.getElementById("back").style.backgroundColor="#A0A0A0";
        document.getElementById("back").style.color="white";
        var elements=document.getElementsByClassName("country_container");
        for(var i=0;i<elements.length;i++)
            {
                elements[i].style.backgroundColor="#EFEEEE";
                elements[i].style.color="black";
            }
    }
    else
    {
        document.getElementById("title").style.color="white";

        document.getElementById("header").style.backgroundColor="hsl(209, 23%, 22%)";

        document.getElementById("dark_mode").style.backgroundColor="hsl(209, 23%, 22%)";
        
        document.getElementById("container").style.backgroundColor="hsl(207, 26%, 17%)";
        
        document.getElementById("input_value").style.backgroundColor="hsl(209, 23%, 22%)"
        document.getElementById("input_value").style.color="white";

        document.getElementById("select").style.backgroundColor="hsl(209, 23%, 22%)";
        document.getElementById("select").style.color="white";

        document.getElementById("back").style.backgroundColor="hsl(207, 26%, 17%)";
        document.getElementById("back").style.color="white";
        var elements=document.getElementsByClassName("country_container");
        for(var i=0;i<elements.length;i++)
            {
                elements[i].style.backgroundColor="hsl(209, 23%, 22%)";
                elements[i].style.color="yellow";
            }
    }
    n++;
})


