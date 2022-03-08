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

function listArr(){
   var el=Array.from(list.children);
   for (let i=0;i,el.length;i++){

     el[i].firstChild.onclick=function(){
       if (el[i].children.length===1){
         el[i].firstChild.className='none';
         var newInput=document.createElement('input');
         newInput.value=el[i].firstChild.innerHTML;
         el[i].appendChild(newInput);
         newInput.className='block';
         el[i].lastChild.focus();
       } 
       else{
         el[i].firstChild.className='none';
         el[i].lastChild.className='block';
         el[i].lastChild.focus();
       }
     el[i].lastChild.onblur=function(){
             el[i].firstChild.innerHTML=el[i].lastChild.value;
             el[i].firstChild.className='block';
             el[i].lastChild.className='none';
             el[i].lastChild.onblur();

           }
     }
   }

  }
  listArr();