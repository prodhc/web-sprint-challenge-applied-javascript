console.log("hi");

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerV = document.createElement("div");
  const dateV = document.createElement("span");
  const titleV = document.createElement("h1");
  const tempV = document.createElement("span");

  headerV.classList.add("header");
  dateV.classList.add("date")
  dateV.textContent = date;
  titleV.textContent = title;
  tempV.classList.add("temp")
  tempV.textContent = temp;
  
  headerV.appendChild(dateV);
  headerV.appendChild(titleV);
  headerV.appendChild(tempV);

  return headerV
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const result = Header("Hello", "3-9-21", "70f");
  document.querySelector(selector).appendChild(result)
}


export { Header, headerAppender }
