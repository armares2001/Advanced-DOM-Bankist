'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(window.scrollX + ' ' + window.scrollY);
  // window.scrollTo({
  //   left: 0,
  //   top: s1coords.y + window.scrollY,
  //   behavior: 'smooth'
  // });
  section1.scrollIntoView({ behavior: 'smooth', inline: 'start' });

  console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);
});

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     const scrollEl = document.querySelector(id);
//     scrollEl.scrollIntoView(
//       {
//         behavior: 'smooth',
//         inline: 'start'
//       }
//     );
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target);
  const id = e.target.getAttribute('href');
  console.log(id);
  const scrollEl = document.querySelector(id);
  if (!scrollEl || !e.target.classList.contains('nav__link')) return;
  scrollEl.scrollIntoView(
    {
      behavior: 'smooth',
      inline: 'start'
    }
  );
});

const h1 = document.querySelector('h1');
console.log(...h1.querySelectorAll('.highlight'));
console.log(...h1.childNodes);
console.log(...h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
console.log(h1.firstChild);
console.log(h1.lastChild);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
// console.log(document.getElementsByName('#section--1'));
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header'));
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if (el !== h1) el.style.transform = 'scale(.5)';
});

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and analytics.
// <button class='btn btn--close-cookie'>Got it</button>`;
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//   message.remove();
// });
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(getComputedStyle(message));
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
// console.log(message.style.height);
//
// document.documentElement.style.setProperty('--color-primary', 'orangered');
//
// // const logo = document.querySelector('.nav__logo');
// // console.log(logo.getAttribute('designer'));
// // console.log(logo.getAttribute('src'));
// // console.log(logo.src);
// //
// // const link = document.querySelector('.nav__link--btn');
// // console.log(link.href);
// // console.log(link.getAttribute('href'));
// //
// // console.log(logo.dataset.versionNumber);
//


//
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) - min);
// };
//
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };
//
// console.log(randomColor());
//
// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log('Link', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   // e.stopImmediatePropagation();
// }, true);
//
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   console.log('Links', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// }, true);
//
// document.querySelector('.nav').addEventListener('click', function(e) {
//   console.log('Nav', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });
//
// const test = () => {
//   let abc = null;
//   return (testo) => {
//     if (testo)
//       abc = testo;
//     console.log(abc);
//   };
// };
//
// const t = test();
// t('ciao');
// t(null);

