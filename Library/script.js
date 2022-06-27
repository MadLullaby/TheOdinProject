const addBtn = document.querySelector(".addButton");
const showBook = document.querySelector(".bookContainer")
//const book= document.querySelectorAll(".book")
const container = document.querySelector(".container")
const homepage = document.querySelector(".homepage")
let inputDiv = document.querySelector(".inputDiv")


addBtn.addEventListener("click", ()=> {
    // addBook() da togliere - mettere in line 50
    showInput()
    
    
})

// FUNZIONA 
function addBook()
{
    let newDiv = document.createElement("div")
    newDiv.className= "book"
    const pGroup = document.createElement("div")
    const pAuthor = document.createElement("p")
    const pTitle = document.createElement("p")
    const pPages = document.createElement("p")
    pGroup.appendChild(pAuthor)
    pGroup.appendChild(pTitle)
    pGroup.appendChild(pPages)
    const btnGroup = document.createElement("div")
    const readBtn = document.createElement("button")
    const removeBtn = document.createElement("button")
    btnGroup.appendChild(readBtn)
    btnGroup.appendChild(removeBtn)
    newDiv.appendChild(pGroup)
    newDiv.appendChild(btnGroup)


    showBook.appendChild(newDiv)
}

function showInput()
{    
    inputDiv.style.display = "block"
    
}

let myLibrary=[]
const submitBtn = document.getElementById("confirm") // line 44
submitBtn.addEventListener("click", () => {
    getBookFromInput()
    submitBtn.submit()  
    addBook()
    inputDiv.style.display = "none"
})
function getBookFromInput ()
{
const author = document.getElementById("name").value
const title = document.getElementById("title").value
const pages = document.getElementById("pages").value
const read = document.getElementById("read").value
const book = new bookConstructor()
}



function bookConstructor(author, title, pages, checkbox)
{
    //constructor

    this.author = author
    this.title = title
    this.pages = pages
    if (checkbox){this.checkbox = true}
    else {this.checkbox = false}

}

function addBookToLibrary()
{
   
}

function createBook()
{
    
}