export const createContactForm = (container) => {
  let formDiv = document.createElement('div');
  let textArea = document.createElement('textarea');
  let title = document.createElement('h1');
  const button = document.createElement('button');
  button.textContent = 'Contact Us';
  button.classList.add('btn', 'btn-primary');
  title.textContent = 'Contact Us';
  title.classList.add('text-2xl', 'font-bold');
  textArea.classList.add('textarea', 'textarea-primary');
  textArea.placeholder = 'Message';
  formDiv.append(title);
  formDiv.classList.add('formDiv', 'mt-20');
  formDiv.append(createInput('First name'));
  formDiv.append(createInput('last name'));
  formDiv.append(textArea);
  formDiv.append(button);
  container.append(formDiv);
};

const createInput = (placeHolder) => {
  const input = document.createElement('input');
  input.classList.add(
    'input',
    'input-bordered',
    'input-md',
    'w-full',
    'max-w-xs'
  );
  input.placeholder = placeHolder;
  return input;
};
