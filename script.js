import data from './data.js';

const insertCards = () => {
   const container = document.querySelector('.container');
   const contents = data
      .map(
         (cardData) => `
      <div class="card" style="background-color: ${cardData.bgColor};color: ${cardData.textColor}">
      <div class="card__header">
         <img src=${cardData.profile} class="card__header-img" alt='profile_avatar'>
         <div class="card__header__user">
            <h4 class="card__header__username">${cardData.name}</h4>
            <p class="catrd__header__userStatus">${cardData.status}</p>
         </div>
      </div>
      <h2 class="card__title">${cardData.title}</h2>
      <p class="card__para">${cardData.para}</p>
   </div>
   `
      )
      .join('');

   container.innerHTML = contents;

   const allNames = document.querySelectorAll('.card .card__header__username');
   allNames.forEach((name) => {
      if (name.innerHTML === 'Daniel Clifford') {
         name.parentElement.parentElement.parentElement.style.backgroundImage =
            'url(./images/bg-pattern-quotation.svg)';
      }
   });
};

insertCards();
