'use strict';

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n
/*
`<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>`
*/
// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla
const suljeNappi = document.querySelector('.closeBtn');
const modal = document.querySelector('#modal');


const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  });
};

showImages();


// sama tehtynä funktiolla jossa ei ole kovakoodausta
const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

 const linkkiTapahtumat = () => {
   const linkit = document.querySelectorAll('ul a');
   //käy forEachilla linkit läpi
   //lisää jokaiseen linkkiin click event
   // klikatessa hae href ja laita se modalin img:n src:n arvoksi
   //vaihda modalin luokaksi lightbox hiddenin sijaan
    linkit.forEach((linkki) => {
      console.log(linkki);
      linkki.addEventListener('click', (evt) => {
         evt.preventDefault();
         const href = linkki.getAttribute("href");
         modal.querySelector('img').setAttribute('src', href);  //=src=href;
        modal.classList.replace('hidden', 'lightbox');
        modal.classList.add('animated', 'slideInDown');
      });


   });


 };

const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;
  //linkit voi valita vasta tämän jälkeen eli html on nyt valmis
 // const linkit = element.querySelector('ul a');
  linkkiTapahtumat();
};

loadJSON('kuvat.json', templateFunction);



 suljeNappi.addEventListener('click', (evt) => {
   evt.preventDefault();
   //vaihda modalin luokka lightboxista hiddeniin
   modal.classList.replace('lightbox', 'hidden');


});

/*
$('.closeBtn').click(function(event){

  event.preventDefault();
   $('.lightbox')
  .fadeOut()
  .find('.lightbox')
  .fadeOut();

});

*/