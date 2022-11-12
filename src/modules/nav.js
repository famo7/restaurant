export const CreateNav = (container) => {
  const nav = document.createElement('nav');
  nav.classList.add('w-screen');
  let home = createLinks('Home');
  let menu = createLinks('Menu');
  let contact = createLinks('Contact');

  nav.append(home);
  nav.append(menu);
  nav.append(contact);

  container.append(nav);
};

const createLinks = (text) => {
  let link = document.createElement('a');
  link.href = '#';
  link.textContent = text;
  link.classList.add('btn', 'btn-primary');
  return link;
};
