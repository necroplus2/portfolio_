const imgGaleri = document.querySelectorAll('div .img-thumbnail');


imgGaleri.forEach(function(e){
  e.addEventListener('click', function(f){
    //console.log(f.target.currentSrc);
    const body = document.querySelector('body');
    const contact = document.querySelector('.contact');

    const galer = document.createElement('div');
    galer.classList.add('galer');

    const container2 = document.createElement('div');
    container2.classList.add('container2', 'mx-auto');

    const closeImg = document.createElement('div');
    closeImg.classList.add('closeImg', 'text-center');

    const galerImg = document.createElement('img');
    galerImg.src = f.target.currentSrc;
    galerImg.classList.add('position-absolute', 'top-50', 'start-50', 'translate-middle', 'py-1', 'px-1');
    galerImg.alt = ' ';

    container2.appendChild(closeImg);
    container2.appendChild(galerImg);
    galer.appendChild(container2);
    body.insertBefore(galer, contact);

    closeImg.addEventListener('click', function(){
      galer.remove();
      container2.remove();
      closeImg.remove();
      galerImg.remove();
    })

  })
});


// const galeriClass = document.querySelector('.galeri');
// const galeri1 = document.createElement('div');
// const isiGaleri1 = document.createTextNode('heheheheheheheheheheheheheheheeh');
// galeri1.appendChild(isiGaleri1);

// galeriClass.appendChild(galeri1);

// insertBefore .contact 
/*
const body = document.querySelector('body');
const contact = document.querySelector('.contact');

const galer = document.createElement('div');
galer.classList.add('galer');

const container2 = document.createElement('div');
container2.classList.add('container2', 'mx-auto');

const closeImg = document.createElement('div');
closeImg.classList.add('closeImg', 'text-center');

const galerImg = document.createElement('img');
galerImg.src = 'img/galeri/6.png';
galerImg.classList.add('position-absolute', 'top-50', 'start-50', 'translate-middle', 'py-1', 'px-1');
galerImg.alt = ' ';

container2.appendChild(closeImg);
container2.appendChild(galerImg);
galer.appendChild(container2);
body.insertBefore(galer, contact);
*/



