'use strict';

// function titleClickHandler(){
//   const links = document.querySelectorAll('.titles a');
//   console.log(links);
// }

// const buttonTest = document.getElementById('button-test');

// buttonTest.addEventListener('click', titleClickHandler);

// const links = document.querySelectorAll('.titles a');

// for(let link of links){
//   console.log(link);
// }

'use strict';

function titleClickHandler(event){
  console.log(event);

  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}