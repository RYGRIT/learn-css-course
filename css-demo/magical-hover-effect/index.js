const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

container.addEventListener('mousemove', (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }
});

container.addEventListener('mouseleave', () => {
  for (const card of cards) {
    card.style.setProperty('--x', '-1000px');
    card.style.setProperty('--y', '-1000px');
  }
});
