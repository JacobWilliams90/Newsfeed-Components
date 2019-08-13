/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function menuComp(items){
  let div = document.createElement('div')
  div.classList.add('menu')
  let ul = document.createElement('ul')
  let a = document.createElement('li')
  let b = document.createElement('li')
  let c = document.createElement('li')
  let d = document.createElement('li')
  let e = document.createElement('li')
  let f = document.createElement('li')
  a.textContent = menuItems[0]
  b.textContent = menuItems[1]
  c.textContent = menuItems[2]
  d.textContent = menuItems[3]
  e.textContent = menuItems[4]
  f.textContent = menuItems[5]
  ul.appendChild(a)
  ul.appendChild(b)
  ul.appendChild(c)
  ul.appendChild(d)
  ul.appendChild(e)
  ul.appendChild(f)
  div.appendChild(ul)
  return div
};

let newMenu = menuComp(menuItems);
let menuBttn = document.querySelector('.menu-button');

menuBttn.addEventListener('click', event => {
   newMenu.classList.toggle('menu--open');
});

let headerDiv = document.querySelector(".header");

headerDiv.prepend(newMenu);