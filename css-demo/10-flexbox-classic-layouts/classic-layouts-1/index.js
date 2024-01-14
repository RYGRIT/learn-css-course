const root = document.documentElement;
const justifyContent = document.querySelector('#justify-content');
const alignItems = document.querySelector('#align-items');
const containerSingle = document.querySelector('.container--single');
const containerMultiple = document.querySelector('.container--multiple');

justifyContent.addEventListener('click', (e) => {
  root.style.setProperty('--justify-content', justifyContent.checked ? 'center' : 'flex-start');
});
alignItems.addEventListener('click', (e) => {
  root.style.setProperty('--align-items', alignItems.checked ? 'center' : 'flex-start');
});
