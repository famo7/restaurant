import food from '../images/food.jpg';

export const createHomeContent = (content) => {
  const hero = document.createElement('div');
  hero.classList.add('hero', 'min-h-screen');
  hero.style.backgroundImage = `url(${food})`;

  const overlay = document.createElement('div');
  overlay.classList.add('hero-overlay', 'bg-opacity-40');
  const heroContent = document.createElement('div');
  heroContent.classList.add(
    'hero-content',
    'text-center',
    'text-neutral-content'
  );
  const contentDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');
  button.textContent = 'Get Started';
  button.classList.add('btn', 'btn-primary');
  h1.classList.add('mb-5', 'text-5xl', 'font-bold');
  h1.textContent = 'Hello there';
  p.textContent =
    'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.';
  p.classList.add('mb-5');
  contentDiv.classList.add('max-w-md');

  contentDiv.append(h1);
  contentDiv.append(p);
  contentDiv.append(button);
  heroContent.append(contentDiv);
  hero.append(overlay);
  hero.append(heroContent);
  content.append(hero);
};
