'use strict';

const links = document.querySelectorAll('.titles a');


for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function titleClickHandler(event){

  event.preventDefault();
  const clickedElement = this;
  console.log(clickedElement)
  console.log('link was clicked');
 
  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement has active class now');
  clickedElement.classList.add('active');

 /* [DONE] remove class 'active' from all articles */

 const activeArticles = document.querySelectorAll('.posts article.active')

 for(let activeArticle of activeArticles){
   activeArticle.classList.remove('active');
 }

   /* get 'href' attribute from the clicked link */
   let articleSelector =  clickedElement.getAttribute("href");
   console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

  let targetArticle = document.querySelector(articleSelector)
  console.log(targetArticle)


  /* add class 'active' to the correct article */
  
  targetArticle.classList.add('active')

}

 














