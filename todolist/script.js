const container=document.querySelector('.container');
const button= document.querySelector('.button');
const input= document.querySelector("input");
let avviso=document.querySelector(".avviso");
button.addEventListener('click',function(){
    avviso.textContent="Clicca su 'add' per aggiungere elementi";
    avviso.style.color="black";

    if(input.value!=""){
        let postIt= document.createElement('div');
        postIt.classList.add('postit');
        container.appendChild(postIt);
        let title=document.createElement('div');
        title.textContent=input.value;
        title.classList.add('title');
        postIt.appendChild(title);
        let x= document.createElement('i');
        x.classList.add("fas");
        x.classList.add("fa-times");
        title.appendChild(x);
        x.addEventListener('click',function(){
            postIt.remove();


        });
    }else{
        avviso.textContent="Campo vuoto";
        avviso.style.color="red";

    }
    input.value="";


});