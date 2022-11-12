export const createMenu = (container) => {
  const card1 = createCards(
    'item 1',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a cum aut ipsa aliquam obcaecati ea, corporis itaque molestias molestiae ratione. Tenetur exercitationem eligendi asperiores soluta voluptas amet architecto rem!'
  );
  const card2 = createCards(
    'item 2',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a cum aut ipsa aliquam obcaecati ea, corporis itaque molestias molestiae ratione. Tenetur exercitationem eligendi asperiores soluta voluptas amet architecto rem!'
  );
  const card3 = createCards(
    'item 3',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a cum aut ipsa aliquam obcaecati ea, corporis itaque molestias molestiae ratione. Tenetur exercitationem eligendi asperiores soluta voluptas amet architecto rem!'
  );
  const card4 = createCards(
    'item 4',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a cum aut ipsa aliquam obcaecati ea, corporis itaque molestias molestiae ratione. Tenetur exercitationem eligendi asperiores soluta voluptas amet architecto rem!'
  );
  container.append(card1);
  container.append(card2);
  container.append(card3);
  container.append(card4);
};

const createCards = (title, body) => {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const p = document.createElement('p');

  card.classList.add(
    'card',
    'w-96',
    'bg-primary',
    'text-primary-content',
    'm-2'
  );
  cardBody.classList.add('card-body');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;
  p.textContent = body;

  cardBody.append(cardTitle);
  cardBody.append(p);
  card.append(cardBody);

  return card;
};
