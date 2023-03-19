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
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const allSection = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');

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

// tabs.forEach(el => el.addEventListener('click', () => {
//   console.log('tab');
// }));

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked, e.target);
  if (!clicked) return;
  const tabN = clicked.dataset.tab;
  console.log(tabN);
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(el => el.classList.remove('operations__content--active'));
  const contentN = document.querySelector(`.operations__content--${tabN}`);
  contentN.classList.add('operations__content--active');
});

const hoverHandler = function(e) {
  if (!e.target.classList.contains('nav__link')) {
    return;
  }
  console.log(e.target);
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  console.log(siblings);

  siblings.forEach(el => {
    if (el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
};

nav.addEventListener('mouseover', hoverHandler.bind(0.5));

nav.addEventListener('mouseout', hoverHandler.bind(1));

const stickyNav = function(entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

const revealSection = function(entries, observer) {
  console.log(entries);
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    // entry.target.classList.add('section--hidden');
    return;
  }

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .19
  // rootMargin: '-20px'
  // rootMargin: `-${navHeight + 100}px`
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const revealImg = function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.setAttribute('src', entry.target.dataset.src);
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
    observer.unobserve(entry.target);
  });

};
const imgObserver = new IntersectionObserver(revealImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});
// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     // console.log(entry);
//     console.log(entry.isIntersecting, entry.intersectionRatio);
//     if (entry.isIntersecting) {
//       nav.classList.add('sticky');
//     } else nav.classList.remove('sticky');
//
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2, 0.3]
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// window.addEventListener('scroll', function(e) {
//   console.log(window.scrollY);
//   const initialCoords = section1.getBoundingClientRect();
//   console.log(initialCoords.top);
//   if (window.scrollY > initialCoords.top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// const h1 = document.querySelector('h1');
// console.log(...h1.querySelectorAll('.highlight'));
// console.log(...h1.childNodes);
// console.log(...h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// console.log(h1.firstChild);
// console.log(h1.lastChild);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// // console.log(document.getElementsByName('#section--1'));
// console.log(h1.parentNode);
// console.log(h1.parentElement);
//
// console.log(h1.closest('.header'));
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
// h1.closest('h1').style.background = 'var(--gradient-primary)';
//
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//   if (el !== h1) el.style.transform = 'scale(.5)';
// });

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
// const observer = () => {
//   let abc = null;
//   return (testo) => {
//     if (testo)
//       abc = testo;
//     console.log(abc);
//   };
// };
//
// const t = observer();
// t('ciao');
// t(null);

