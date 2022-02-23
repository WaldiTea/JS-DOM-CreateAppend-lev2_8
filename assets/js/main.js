const enterButton = document.querySelector('#enter');
const userInput = document.querySelector('#userinput');
const unorderedList = document.querySelector('ul');

enterButton.addEventListener('click', () => {
  let newItem = document.createElement('li');
  newItem.textContent = userInput.value;
  unorderedList.appendChild(newItem);
});