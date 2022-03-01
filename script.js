/* devo inserire la funzionalità di scorrimento delle immagini */
/* ---- collegare i bottoni nel js e dargli la funzionalità */
/* ---- far scambiare il display none e il displey block in base alla immagine scorsa */
/* ---- quindi implementare due classi con classe "display none e classe display block ( con bootstrap non dovrebbe servire)" */


/* creo array con le immagini come variabili */
const images = ["img/01.jpg , img/02.jpg , img/03.jpg , img/04.jpg , img/05.jpg , "]

/* creo variabile di valore vuoto che con il ciclo for riempirò */
let contenutoCarosello = '';


/* contatore che aggiunge un elemento nell' html che si ripete per la lunghezza dell'array (per quante sono le immagini) */
for(i = 0; i < images.length; i++){

    /* aggiungo all'elemento contenutoCarosello img che si trova in posizione i */
contenutoCarosello += `<div class = "my-img-container">
                               <img class="my-main-img" src="${images[i]} " alt="">
                        </div>`
            if(i = [4]){
                contenutoCarosello += `<div class = "my-img-container">
                <img class="my-main-img" src="${images[0]} " alt="">
         </div>`  
            }
}

/* collego in js l'elemento contenitore*/
const wrapper = document.querySelector("div.wrapper-main");
/* e gli dico di inserirci il risultato del ciclo for */
wrapper.innerHTML += contenutoCarosello;

/* collego nel js l'elemento contenitore dell'immagine */
const mainImg = document.getElementsByClassName("my-img-container");
/* e aggiungo al primo elemento (elemento 0) la classe active, cosi che la prima immagine si veda appena aperta la pagina */
mainImg[0].classList.add("active");



/* recupero dei bottoni */
const buttonNext= document.getElementById("after");
const buttonBefore= document.getElementById("before");


/* creo una variabile "indice" che tenga il conto dell'immagine in cui si trova */
let activeItem = 0;


 /* al click aggiungere e togliere il display block e none 
     ovvero tolgo la classe active e gli di none alla presente e aggiungo alla seguente active e gli tolgo none */
buttonNext.addEventListener('click', function(){ 
    
    /* la mainImg di riferimento, in posizione activeItem rimuove la classe active */
     mainImg[activeItem].classList.remove("active");

     /* e il conteggio prosegue di uno */
     activeItem++; /* equivale a dire "il valore di activeItem +1" */

     /* la nuova mainImg nella nuova posizione activeItem aggiunge la classe active */
     mainImg[activeItem].classList.add("active");
});


/* la stessa cosa al buttonBefore per scorrere indietro, questa volta però invece di aggiungere uno, tolgo uno (con -- invece di ++) */
buttonBefore.addEventListener('click', function(){ 


    mainImg[activeItem].classList.remove("active");
    activeItem--; /* equivale a dire "il valore di activeItem -1" */

    mainImg[activeItem].classList.add("active");
});

