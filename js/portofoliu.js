//functia care face posibil lightbox-ul

import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: false,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));