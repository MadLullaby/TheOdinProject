// new red <p>

const container = document.querySelector("#container");
const para= document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red";
container.appendChild(para);

// a blue <h3>

const bigtext = document.createElement("h3");
bigtext.textContent = "I'm a blue h3!";
bigtext.style.cssText = "color: blue";
container.appendChild(bigtext);

 // 1. div with black border, pink background color
 // 2.  h1 "I'm in a div"
 // 3. <p> = "ME TOO!"
 // append child in div BEFORE appending div in container
 
 const div = document.createElement("div");
 div.setAttribute("style", "border: black; background: pink;");   //  1.
 const biggestText = document.createElement("h1");
 biggestText.textContent = "I'm in a div!";   //   2.
 div.appendChild(biggestText);
 const para1 = document.createElement("p");
 para1.textContent= "ME TOO!";     //   3.
 div.appendChild(para1);
 container.appendChild(div);
