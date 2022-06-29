

//my library array
let myLibrary = []

function Book(author, title, pages, read) 
{
    // the constructor...
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
  }
  


 // toggle displayform
    const displayForm = document.querySelector(".inputDiv")
    const addBtn = document.querySelector(".addButton")
    addBtn.addEventListener("click", () => { displayForm.style.display = "block"})

    const closeBtn = document.querySelector(".closeBtn")
    closeBtn.addEventListener("click", ()=> { displayForm.style.display="none"})

    //submit button functionality

    const submitBtn = document.getElementById("confirm")
    submitBtn.addEventListener("click", (/*e*/) => {
        // e.preventDefault()
        const newBook = getBookFromInput()
        myLibrary.push(newBook)
        displayForm.style.display="none"
        updateBooksGrid()
        console.log(myLibrary)
    })
    

  // from input to data
    function getBookFromInput()
    {
        const author = document.getElementById("author").value
        const title = document.getElementById("title").value
        const pages = document.getElementById("pages").value
        let read = toggleReadValue()
        
      
        return new Book(author, title, pages, read)
        
    }
    function toggleReadValue()
    {
      let check = document.getElementById("read")
   
          if (check.checked) {check.value = "on"}
          else {check.value = "off"}
    
         return check.value
      }


    

    //how to display book in homepage
    const bookGrid = document.querySelector(".bookContainer")

    function createBookCard(book)
    {
        const newDiv = document.createElement("div")
        newDiv.className= "book"
        const pGroup = document.createElement("div")
        pGroup.className= "pGroup"
        const author = document.createElement("p")
        const title = document.createElement("p")
        const pages = document.createElement("p")
        pGroup.appendChild(author)
        pGroup.appendChild(title)
        pGroup.appendChild(pages)
        const btnGroup = document.createElement("div")
        btnGroup.className = "btnGroup"
        let readBtn = document.createElement("button")
        const removeBtn = document.createElement("button")
        removeBtn.className = "removeBtn"
        btnGroup.appendChild(readBtn)
        btnGroup.appendChild(removeBtn)
        newDiv.appendChild(pGroup)
        newDiv.appendChild(btnGroup)
        bookGrid.appendChild(newDiv)

        author.textContent = `Author: ${book.author}`
        title.textContent = `Title: ${book.title}`
        pages.textContent = `Pages: ${book.pages}`
        removeBtn.textContent = "Remove"

        
      
        if (book.read === "on")
        {
            readBtn.textContent = "Read"
            readBtn.className = "greenBtn"
        } else
        {
            readBtn.textContent = "Not Read"
            readBtn.className = "redBtn"
        }
      
        //BTNGROUP FUNCTION
        //removebtn
        removeBtn.addEventListener("click", () => {
           bookGrid.removeChild(newDiv)
            console.log(newDiv)
            myLibrary.splice(newDiv, 1)
            
        })
        //toggle readbtn
        readBtn.addEventListener("click", () =>{
            if (readBtn.className === "redBtn") {book.read = "on"}
            else {book.read= "off"}
            updateBooksGrid()
          
        }) 
    }



    const updateBooksGrid = () => {
        resetBooksGrid()
        for (let book of myLibrary) {
          createBookCard(book)
        }
      }
      
      const resetBooksGrid = () => {
        bookGrid.innerHTML = ''
      }

  