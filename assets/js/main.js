const enterButton = document.querySelector('#enter');
const userInput = document.querySelector('#userinput');
const unorderedList = document.querySelector('ul');

enterButton.addEventListener('click', () => {
  createList();
});

document.body.addEventListener('keydown', (e) => {
  if(e.keyCode == 13) {
    createList();
  }
});

createList = () => {
  let newItem = document.createElement('li');
  newItem.textContent = userInput.value;
  unorderedList.appendChild(newItem);
}