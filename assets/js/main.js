const enterButton = document.querySelector('#enter');
const userInput = document.querySelector('#userinput');
const unorderedList = document.querySelector('ul');

console.log(userInput.value);

enterButton.addEventListener('click', createListItem = () => {
  createListItem();
});

document.body.addEventListener('keydown', (e) => {
  if(e.keyCode == 13) {
    createListItem();
  }
});

createListItem = () => {
  let newItem = document.createElement('li');
  newItem.textContent = userInput.value;

  if(userInput.value == 0) {
    return;
  }
  
  unorderedList.appendChild(newItem);
}