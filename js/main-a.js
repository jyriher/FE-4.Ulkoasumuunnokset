'use strict';

const ekaP = document.querySelector('p');
const tokaP = document.querySelector('.punainen');
const kolmasP = document.querySelector('.vihrea');

/*

MAIKAN ESIMERKKI:

const ekaP = document.querySelector('p');
const tokaP = document.querySelector('p:nth-child(2)');
const kolmasP = document.querySelector('p:nth-child(3)');

*/
const vaihda =document.querySelector('#vaihda');
const lisaa =document.querySelector('#lisaa');
const toggle =document.querySelector('#toggle');

//lisaa.addEventListener('click', jokuFunktio)

lisaa.addEventListener('click', (evt) => {
//jotain tapahtuu klikatessa
  ekaP.classList.add('punainen');

});

vaihda.addEventListener('click', (evt) => {
  if(tokaP.classList.contains('punainen')) {
    tokaP.classList.replace('punainen', 'sininen');
  } else {
    tokaP.classList.replace('sininen', 'punainen');

  }

});

toggle.addEventListener('click', (evt) => {

 // kolmasP.classList.toggle('vihrea');  <----- open esimerkki
 if(kolmasP.classList.contains('vihrea')) {
    kolmasP.classList.remove('vihrea');
  } else {
    kolmasP.classList.add('vihrea');
  }

});

/*
toggle.addEventListener('click', (evt) => {
//jotain tapahtuu klikatessa
  kolmasP.classList.add('vihrea');

});


*/
/*
//toinen vaihtoehto
const lisaaVari = (evt) => {
  ekaP.classList.add('punainen');
};

lisaa.addEventListener('click', lisaaVari);


const vaihdaVari = (evt) => {
  tokaP.classList.add('sininen');
};

vaihda.addEventListener('click', vaihdaVari);

*/