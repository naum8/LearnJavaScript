const addingInput = document.querySelector('.container__input');
const addBtn = document.querySelector('.container__add');
const deleteBtn = document.querySelector('.container__remove');
const listToDo = document.querySelector('.container__list');
let toDoArr = [];

addBtn.addEventListener('click', function() {
   let newToDo = addingInput.value;
   if (newToDo.length > 0) {
      toDoArr.push(newToDo);
      showTodo(addingInput.value);
      addingInput.value = '';
   };
   //console.log(toDoArr);
});

function showTodo() {
   let element = document.createElement('li');
   
   for(let i = 0; i < toDoArr.length; i++) {
      element.innerHTML = `<p> ${toDoArr[i]} </p>`;
      listToDo.appendChild(element);
   };
};

deleteBtn.addEventListener('click', function() {
   let lastListToDo = listToDo.children;
   //console.log(lastListToDo);
   let lastItem = listToDo.lastChild;
   //console.log(lastItem);
   lastItem.outerHTML = '';

   if (lastListToDo.length === 0) {
      deleteBtn.setAttribute('disabled','');
      deleteBtn.classList.remove('btn-style-hover')
   };
});

listToDo.addEventListener('click', function(event) {
   let item = event.target;
   let itemNew = document.createElement('input');
   itemNew.value = item.innerHTML;
   item.innerHTML = '';
   item.appendChild(itemNew);
   itemNew.classList.add('itemNew-class');
   itemNew.focus();
   itemNew.addEventListener('blur', function() {
      item.innerHTML = itemNew.value;
   });
});

