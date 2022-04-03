'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// querySelectorAll is used to select all elements with class show-modal
const btnsOpenModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');

//to make dry make function of repeated functions
const openModel = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// openModel class is not called here only declared  (calling is done by "function ()" )
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
