/* devo inserire la funzionalità di scorrimento delle immagini */
/* ---- collegare i bottoni nel js e dargli la funzionalità */
/* ---- far scambiare il display none e il displey block in base alla immagine scorsa */
/* ---- quindi implementare due classi con classe "display none e classe display block ( con bootstrap non dovrebbe servire)" */


const images = ["img/01.jpg , img/02.jpg , img/03.jpg , img/04.jpg , img/05.jpg , "]

let contenutoCarosello = '';

for(i = 0; i < images.length; i++){

    /* aggiungo all'elemento contenutoCarosello img che si trova in posizione i */
contenutoCarosello += `<div class = "my-img-container active">
                               <img class="my-main-img" src="${images[i]} " alt="">
                        </div>`
}

const wrapper = document.querySelector("div.wrapper-main");
wrapper.innerHTML += contenutoCarosello;


const mainImg = document.getElementsByClassName("my-img-container");
mainImg[0].classList.add("active");


const buttonNext= document.getElementById("after");

const buttonBefore= document.getElementById("before");


/* buttonNext.addEventListener('click' function(){ */
    /* al click aggiungere e togliere il display block e none */
    /* ovvero tolgo la classe active e gli di none alla presente e aggiungo alla seguente active e gli tolgo none*/

/* }) */