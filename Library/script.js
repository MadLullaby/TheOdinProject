class Book 
{
    constructor(
        author = "",
        title = "",
        pages = 0,
        read = false
    )
     {
        this.author = author
        this.title = title
        this.pages = pages
        this.read = read
     }
}

class Library{
    constructor()
    {
        this.books = []
    }
    addBook(newBook)
    {
        this.books.push(newBook)
    }
    removeBook(oldBook)
    {
        this.books = this.books.filter(book => book.oldBook !== oldBook)
    }
    
}
const library = new Library()


const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
      createBookCard(book)
    }
  }
  
  const resetBooksGrid = () => {
    showBook.innerHTML = ''
  }
  


function addBook()
{
    
    const newBook = getBookFromInput()
    library.addBook(newBook)
    updateBooksGrid()
}
function removeBook(e)
{
    const oldBook = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
      )
    library.removeBook(oldBook)
}

const addBtn = document.querySelector(".addButton");
const showBook = document.querySelector(".bookContainer")
//const book= document.querySelectorAll(".book")
const container = document.querySelector(".container")
const homepage = document.querySelector(".homepage")
const inputDiv = document.querySelector(".inputDiv")


addBtn.addEventListener("click", ()=> {
    // addBook() da togliere - mettere in line 50
    showInput()
    
    
})

// FUNZIONA 
function createBookCard(book)
{
    const newDiv = document.createElement("div")
    newDiv.className= "book"
    const pGroup = document.createElement("div")
    const author = document.createElement("p")
    const title = document.createElement("p")
    const pages = document.createElement("p")
    pGroup.appendChild(author)
    pGroup.appendChild(title)
    pGroup.appendChild(pages)
    const btnGroup = document.createElement("div")
    const readBtn = document.createElement("button")
    const removeBtn = document.createElement("button")
    btnGroup.appendChild(readBtn)
    btnGroup.appendChild(removeBtn)
    newDiv.appendChild(pGroup)
    newDiv.appendChild(btnGroup)
    showBook.appendChild(newDiv)

    author.textContent = book.author
    title.textContent = book.title
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = "Remove"
    if (book.read)
    {
        readBtn.textContent = "Read"
        readBtn.className = "greenBtn"
    } else
    {
        readBtn.textContent = "Not Read"
        readBtn.className = "redBtn"
    }
    
    
}



function showInput()
{    
    inputDiv.style.display = "block"
    
}

const submitBtn = document.getElementById("confirm") 

submitBtn.addEventListener("click", () => {
    addBook()
    inputDiv.style.display = "none"
})

function getBookFromInput ()
{
const author = document.getElementById("name").value
const title = document.getElementById("title").value
const pages = document.getElementById("pages").value
const read = document.getElementById("read").value

return new Book(author, title, pages, read)
//mettere book in my library
}

