window.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelectorAll('.tabheader__item');
   const tabsContent = document.querySelectorAll('.tabcontent');
   const tabsParent = document.querySelector('.tabheader__items');
   function hideTabContent() {
      tabsContent.forEach(item => {
         item.style.display = 'none';
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   };

   function showTabContent(i = 0) {
      tabsContent[i].style.display = 'block';
      tabs[i].classList.add('tabheader__item_active');
   };

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;
      
      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) =>{
            if(target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      };
   });
   const deadline = '2022-05-11';

   function getTimeRemaining(endTime) {
      const t = Date.parse(endTime) - Date.parse(new Data());
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t / (1000 * 60 * 60) % 24));
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const seconds = Math.floor((t / 1000) % 60);
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   };
   
   function setClock(selector, endTime) {
      const timer = document.querySelector(selector);
      const days = timer.querySelector('#days');
      const hours = timer.querySelector('#hours');
      const minutes = timer.querySelector('#minutes');
      const seconds = timer.querySelector('#seconds');
      const timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endTime); 

         days.innerHTML = t.days;
         hours.innerHTML = t.hours;
         minutes.innerHTML = t.minutes;
         seconds.innerHTML = t.seconds;

         if(t.total <= 0) {
            clearInterval(timeInterval);  
         };
      };
   };
   setClock('.timer', deadline);
});

