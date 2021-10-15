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








  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles)



  // const articleId = articles.getAttribute("#id"); /// WTF


function generateTitleLinks() {

  /* remove contents of titleList */
  let titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);

function clearMessages(){
	titleList.innerHTML = '';
}

clearMessages()

  /* for each article */
  for(let article of articles) {

    /* get the article id */
const articleId = article.getAttribute('id');
console.log(articleId)

  
    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

  }
    
}

generateTitleLinks();











