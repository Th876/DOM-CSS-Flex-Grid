let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  function mainTitle () {
document.querySelector('#main-title').innerHTML = "Dom Toretto | Official Website";
  }
  //call funciton
  mainTitle();

  // Part 2

  function pageColor() {
document.querySelector('body').style.backgroundColor = "#fca311";
  }

  pageColor();

  // Part 3
// const favList = document.querySelector('#favorite-things');
// const lastThing = document.querySelector('li:last-child');
// const removeThing = favList.removeChild(lastThing);
//More CONCISE

function removeThing() {
document.querySelector('#favorite-things > li:last-child').remove();
}
removeThing();

  // Part 4
  //Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
function changeFontSize() {
const specialTitles = document.getElementsByClassName('special-title');
for(let i = 0; i < specialTitles.length; i++) {
  specialTitles[i].style.fontSize = "2rem";
}
}
changeFontSize();
// 

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
//look for something string matching patterns in DOM Js

function removeCity() {
  //select ul list
  const races = document.querySelector('#past-races'); 
  //get ul's children
  const listItems = races.getElementsByTagName('li');
  //iterate through the li tags
  for(let i=0; i < listItems.length; i++) {

    //if each data in the li element equates to 'Chicago'//ANOTHER WAY TO DO THIS??
    if(listItems[i].firstChild.data === 'Chicago') {
      races.removeChild(listItems[i])
    }
  }
};
  removeCity();
  // if (races.indexOf('chicago') !==-1){
    // races.remove();
  // }
  // const listItems = document.querySelector('li');
  // for(let i=0; i < races.length; i++) {
    // if(races[i] !== 'Chicago') {
      // return races[i]; 
  // }

//const races = document.querySelector('#past-races > li:nth-child(n+4)
//races.remove(); 

  // Part 6
  //Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.

  //BERLIN SHOULD BE AT THE TOP!
  function addCity () {
  const races = document.querySelector('#past-races');
  const newCity = document.createElement('li');
  newCity.textContent = "Berlin";
  races.appendChild(newCity); 
  races.prepend(newCity);  //places last added item to the top
  }
  addCity();

  // Part 7
//Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.

function addBlog() {
const container = document.querySelector('.main');
const blog = document.createElement('div');
blog.classList.add('blog-post', 'purple');



const heading = document.createElement('h1');
heading.textContent = "Berlin";

blog.appendChild(heading);

let newParagraph = document.createElement('p');
newParagraph.textContent = "I DRIFTED MY CAR AROUND ALEXANDERPLATZ";

blog.appendChild(newParagraph);
container.append(blog);

//append newly created blog to the top of its container
container.insertBefore(blog, document.querySelector(".blog-post"));
}

addBlog();

  // Part 8
  //When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function (from above!). 
 
  //Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked.

const quote =  document.querySelector('#quote-title');
quote.addEventListener("click", randomQuote);

 // Part 9
/*Select all .blog-postclass elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenter events.

The mouseout handler should toggle the class .purple
The mouseenter handler should toggle the class .red*/

function toggleColor() {
const blogList = document.querySelectorAll('.blog-post');
for(let i = 0; i < blogList.length; i++){
  blogList[i].addEventListener("mouseout", () => {
    blogList[i].classList.toggle('purple');
  })

  blogList[i].addEventListener("mouseenter", () => {
    blogList[i].classList.toggle('red');
  })
}
};

toggleColor();

});



