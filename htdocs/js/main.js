let gallery = document.querySelectorAll('.gallery__img');
let modalImg = document.querySelector('.modal__img');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

for (let i = 0; i < gallery.length; i++) {    
    gallery[i].onclick = function () {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            modalImg.src = gallery[i].src;            
        }
}

modalClose.onclick = function() {
    modal.style.display = 'none';
}