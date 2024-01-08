const titles = document.querySelectorAll('.title');
titles.forEach((title) => {
  title.innerHTML = title.textContent
    .split('')
    .map((letter) => `<span>${letter.trim() ? letter : '&nbsp;'}</span>`)
    .join('');
});

const letters = document.querySelectorAll('.title span');
for (let i = 0; i < letters.length; i++) {
  letters[i].style.setProperty('--delay', `${i * 0.05}s`);
}
