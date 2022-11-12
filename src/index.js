import './style.css';

import { CreateNav } from './modules/nav';
import { render } from './modules/render';
import { clear } from './modules/clear';
import { createHomeContent } from './modules/Home';
import { createMenu } from './modules/Menu';
import { createContactForm } from './modules/Contact';
const container = document.createElement('div');
container.classList.add('container');
const content = document.createElement('div');
content.classList.add('content', 'w-screen');
render(container);

CreateNav(container);
createHomeContent(content);
container.append(content);

document.querySelectorAll('a').forEach((element) => {
  element.addEventListener('click', (event) => {
    clear(content);
    if (event.target.textContent === 'Menu') {
      createMenu(content);
    } else if (event.target.textContent === 'Contact') {
      createContactForm(content);
    } else if (event.target.textContent === 'Home') {
      createHomeContent(content);
    }
  });
});
