export const render = (container) => {
  document.body.classList.add('h-screen', 'w-screen');
  document.body.append(container);
};
