const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   nav.classList.toggle("active");
   bar1.classList.toggle("active");
   bar2.classList.toggle("active");
   bar3.classList.toggle("active");
});
navLinks.forEach(navLink => navLink.addEventListener("click", () => {
   burger.classList.remove("active");
   nav.classList.remove("active");
   bar1.classList.toggle("active");
   bar2.classList.toggle("active");
   bar3.classList.toggle("active");
}));





const headerBtnEn = document.querySelector('.header__btn-En');
const headerBtnRu = document.querySelector('.header__btn-Ru');
headerBtnEn.addEventListener("click", () => {
   headerBtnEn.classList.toggle('header__btn-active');
   headerBtnRu.classList.remove('header__btn-active');
});
headerBtnRu.addEventListener("click", () => {
   headerBtnRu.classList.toggle('header__btn-active');
   headerBtnEn.classList.remove('header__btn-active');
});

const portfolioBtnW = document.querySelector('.portfolio-btn-w');
const portfolioImageW = document.querySelectorAll('.portfolio-image');
const portfolioBtnSp = document.querySelector('.portfolio-btn-sp');
const portfolioImageSp = document.querySelectorAll('.portfolio-image');
const portfolioBtnSu = document.querySelector('.portfolio-btn-su');
const portfolioImageSu = document.querySelectorAll('.portfolio-image');
const portfolioBtnA = document.querySelector('.portfolio-btn-a');
const portfolioImageA = document.querySelectorAll('.portfolio-image');
   portfolioBtnW.addEventListener('click', () => {
      portfolioImageW.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
      portfolioBtnW.classList.add('portfolio-active');
      portfolioBtnSp.classList.remove('portfolio-active');
      portfolioBtnSu.classList.remove('portfolio-active');
      portfolioBtnA.classList.remove('portfolio-active');
   });
   portfolioBtnSp.addEventListener('click', () => {
      portfolioImageSp.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
      portfolioBtnW.classList.remove('portfolio-active');
      portfolioBtnSp.classList.add('portfolio-active');
      portfolioBtnSu.classList.remove('portfolio-active');
      portfolioBtnA.classList.remove('portfolio-active');
   });
   portfolioBtnSu.addEventListener('click', () => {
      portfolioImageSu.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
      portfolioBtnW.classList.remove('portfolio-active');
      portfolioBtnSp.classList.remove('portfolio-active');
      portfolioBtnSu.classList.add('portfolio-active');
      portfolioBtnA.classList.remove('portfolio-active');
   });
   portfolioBtnA.addEventListener('click', () => {
      portfolioImageA.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
      portfolioBtnW.classList.remove('portfolio-active');
      portfolioBtnSp.classList.remove('portfolio-active');
      portfolioBtnSu.classList.remove('portfolio-active');
      portfolioBtnA.classList.add('portfolio-active');
   });
   
   document.querySelector('.themetoggle').addEventListener('click', (event) => {
      event.preventDefault();
      if (localStorage.getItem('theme') === 'dark') {
         localStorage.removeItem('theme');
      }
      else {
         localStorage.setItem('theme', 'dark')
      }
      addDarkClassToHTML()
   });
   function addDarkClassToHTML() {
      try {
         if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.themetoggle span').textContent = 'dark_mode';
         } else {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.themetoggle span').textContent = 'wb_sunny';
         }
      } catch (err) { }
   }
   addDarkClassToHTML();
   

   const button = document.querySelector('.ripple')

button.addEventListener('click', function (e) {
   const x = e.clientX
   const y = e.clientY

   const buttonTop = e.target.offsetTop
   const buttonLeft = e.target.offsetLeft

   const xInside = x - buttonLeft
   const yInside = y - buttonTop

   const circle = document.createElement('span')
   circle.classList.add('circle')
   circle.style.top = yInside + 'px'
   circle.style.left = xInside + 'px'

   this.appendChild(circle)

   setTimeout(() => circle.remove(), 500)
});


