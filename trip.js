var section = document.getElementsByClassName('countrylist');
var section2 = document.getElementsByClassName('countrylist2');
var div = document.getElementsByClassName('tripinfo');
var exit = document.getElementsByClassName('topimg');
var back = document.getElementsByClassName('visible');

var btp = document.getElementById('p');
var btimp = document.getElementById('imp');

var filterwrap = document.getElementById('fwrap');
var filter = document.getElementsByClassName('radio1');
var btn = document.getElementsByClassName('btn');

var check=0;

btn[0].addEventListener('click',()=>{
    filterwrap.style.visibility="visible"
})
                        

for(let i=0; i<filter.length; i++){
    filter[i].addEventListener('click',()=>{
        filterwrap.style.visibility='hidden';
        if(i==0){
            btn[0].innerHTML='<img class="btnimg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_syringe_12x12_filled_gray_600.svg" alt="filter">'+'백신 접종 여부';
            btn[0].style.color='black'
            for(let j=0; j<section.length; j++){
                section[j].style.display='flex'
            }
        }
        else if(i==1){
            btn[0].innerHTML='<img class="btnimg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_syringe_12x12_filled_blue_400.svg" alt="filter">'+'미접종';
            btn[0].style.color='#2b96ed'
            const array=[0,1,2,5,16]
            for(var j in array){
                section[array[j]].style.display='none'
            }
        }
        else if(i==2){
            btn[0].innerHTML='<img class="btnimg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_syringe_12x12_filled_blue_400.svg" alt="filter">'+'화이자';
            btn[0].style.color='#2b96ed'
            const array=[16,25,27]
            for(var j in array){
                section[array[j]].style.display='none'
            }
        }
        else if(i==3){
            btn[0].innerHTML='<img class="btnimg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_syringe_12x12_filled_blue_400.svg" alt="filter">'+'모더나';
            btn[0].style.color='#2b96ed'
            const array=[16,25,27]
            for(var j in array){
                
                section[array[j]].style.display='none'
            }
        }
        else if(i==4){
            btn[0].innerHTML='<img class="btnimg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_syringe_12x12_filled_blue_400.svg" alt="filter">'+'얀센';            
            btn[0].style.color='#2b96ed'
            const array=[16,25,27]
            for(var j in array){
                section[array[j]].style.display='none'
            }
        }
        else{
            btn[0].innerHTML='<img class="btnimg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_syringe_12x12_filled_blue_400.svg" alt="filter">'+'아스트라제네카';
            btn[0].style.color='#2b96ed'
            const array=[16,21,25,27]
            for(var j in array){
                section[array[j]].style.display='none'
            }
        }
    });
};
;

function search(){
    let search=document.getElementById('search').value;
    var country = document.getElementsByClassName('name');
    var country2 = document.getElementsByClassName('name2');

    if(check==1){
        for(let j=0; j<country2.length; j++){
            console.log(country2[j].innerHTML)
            if(country2[j].innerHTML.includes(search)){
                section2[j].style.display='flex';
            }else{
                section2[j].style.display='none';
            }
        }
    }else{
        for(let i=0; i<country.length; i++){
            if(country[i].innerHTML.includes(search)){
                section[i].style.display='flex';
            }else{
                section[i].style.display='none';
            }
        }
    }
}


btp.addEventListener('click',()=>{
    btp.style.color='#2b96ed';
    btp.style.borderBottom='2px solid #2b96ed';
    btimp.style.color='#343a40';
    btimp.style.borderBottom='none';
    for(let j=0; j<section.length; j++){
        section[j].style.display='flex';
    }
    for(let j=0; j<section2.length; j++){
        section2[j].style.display='none';
    }
    check=0;
});

btimp.addEventListener('click',()=>{
    btimp.style.color='#2b96ed';
    btimp.style.borderBottom='2px solid #2b96ed';
    btp.style.color='#343a40';
    btp.style.borderBottom='none';
    for(let j=0; j<section2.length; j++){
        section2[j].style.display='flex';
    }
    for(let j=0; j<section.length; j++){
        section[j].style.display='none';
    }
    check=1;
});


for(let i=0; i<section.length; i++){
        section[i].addEventListener('click',()=>{
            div[i].style.visibility='visible';
            back[0].style.visibility='visible';
        });
        exit[i].addEventListener('click',()=>{
            div[i].style.visibility='hidden';
            back[0].style.visibility='hidden';
        });
        back[0].addEventListener('click',()=>{
            div[i].style.visibility='hidden';
            back[0].style.visibility='hidden';
        });
};




