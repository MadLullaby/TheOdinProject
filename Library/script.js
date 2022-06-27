const addBtn = document.querySelector(".addButton");
const showBook = document.querySelector(".bookContainer")
//const book= document.querySelectorAll(".book")
const container = document.querySelector(".container")
const homepage = document.querySelector(".homepage")
let inputDiv = document.querySelector(".inputDiv")


addBtn.addEventListener("click", ()=> {
    addBook() //da togliere
    showInput()
    
    
})

// FUNZIONA 
function addBook()
{
    let newDiv = document.createElement("div")
    newDiv.className= "book"
    showBook.appendChild(newDiv)
}

function showInput()
{    
    inputDiv.style.display = "block"
}

let myLibrary=[]
let

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
    const book = new bookConstructor()
}