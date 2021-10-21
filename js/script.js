'use strict';



function titleClickHandler(event){

  event.preventDefault();
  const clickedElement = this;
  console.log(clickedElement);
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

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  let articleSelector =  clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  let targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);


  /* add class 'active' to the correct article */
  
  targetArticle.classList.add('active');

}

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list'



// const articleId = articles.getAttribute("#id"); /// WTF


function generateTitleLinks() {

  /* remove contents of titleList */
  let titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);

  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  function clearMessages(){
    titleList.innerHTML = '';
  }

  clearMessages();

  let html = '';

  /* for each article */
  for(let article of articles) {

    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);

  
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */

    titleList.insertAdjacentHTML('beforeend',linkHTML);

    html = html + linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a'); 
  console.log(links);


  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

// new

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles)

  /* START LOOP: for every article: */
  for(let article of articles) {
  
    /* find tags wrapper */
    const optArticleTagsSelector = '.post-tags .list' ///

    let tagWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagWrapper);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    let articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray)

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {
      /* generate HTML of the link */
      console.log(tag);

      /* add generated code to html variable */

      const newlinkHTML = '<li> <a href="#tag-' + tag + '">' + tag + '</a> </li> ';
      console.log(newlinkHTML);

      
      tagWrapper.insertAdjacentHTML('beforeend',newlinkHTML);

      html = html + newlinkHTML;

      /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;

    /* END LOOP: for every article: */
  }

}

generateTags();



function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href') 

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');          /// cos tu jest nie tak


  /* find all tag links with class active */
  const atributeSelectorTag = 'a.active[href^="#tag-"]'
  const allActiveTagLinks = document.querySelectorAll(atributeSelectorTag)


  /* START LOOP: for each active tag link */
  for(let ActiveTagLink of allActiveTagLinks) {
    
    /* remove class active */

    ActiveTagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
    const SelectorOfallTagLinkWithHrefEqualToHref = 'a[href="' + href + '"]'
    const allTagLinkWithHrefEqualToHref = allActiveTagLinks.querySelectorAll(SelectorOfallTagLinkWithHrefEqualToHref)

  /* START LOOP: for each found tag link */
  for(let TagLinkWithHrefEqualToHref of allTagLinkWithHrefEqualToHref) {

    /* add class active */
    TagLinkWithHrefEqualToHref.classList.add('active')

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  
  generateTitleLinks('[data-tags~="' + tag + '"]');

}


function addClickListenersToTags(){
  /* find all links to tags */
  const allLinks = document.querySelectorAll(optArticleSelector)
  

  /* START LOOP: for each link */
  for(let link of allLinks) {

    /* add tagClickHandler as event listener for that link */

      link.addEventListener('click', tagClickHandler);


  /* END LOOP: for each link */
  } 
} 

addClickListenersToTags();



