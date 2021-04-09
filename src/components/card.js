import axios from 'axios';

const Card = ({headline, authorPhoto, authorName, }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  const headlineV = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const picture = document.createElement("img");
  const authorNameV = document.createElement("span");

  card.classList.add("card");
  headlineV.classList.add("headline");
  headlineV.textContent = headline;
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");
  picture.src = authorPhoto;
  authorNameV.textContent = authorName;

  card.appendChild(headlineV);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(picture);
  authorContainer.appendChild(authorNameV);

  card.addEventListener("click", function (event) {
  console.log(headline);
});

  return card;

};



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const URL2 = 'https://lambda-times-api.herokuapp.com/articles';
  

  axios.get(URL2)
  .then(function (futureData2) {
    const test2 = futureData2.data.articles.javascript;
    console.log(`hello`, test2);
    test2.forEach(item => {
      console.log(item);
      let outPut = Card(item);
      document.querySelector(selector).appendChild(outPut);
    })

  })
  .catch(error => {
  });
  
  }



export { Card, cardAppender }
