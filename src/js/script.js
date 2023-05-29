{
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector('#template-book').innerHTML),
  };
  const booksList = document.querySelector('.books-list');
  const booksData = dataSource.books;
  let favouriteBooks = [];
  
  function render(){

    for(let book in booksData){
      const generatedHTML = templates.bookTemplate(booksData[book]);
      const createdBook = utils.createDOMFromHTML(generatedHTML);
      booksList.appendChild(createdBook);
    }   
  }

  function initActions(){
    let allBooks = [];
    const bookImages = document.querySelectorAll(".book__image")
    for(let bookImage in bookImages){
      const singularImage = bookImages[bookImage];
      allBooks.push(singularImage);
    }
    allBooks = allBooks.slice(0, -6);
    //console.log(allBooks);
    for(let index in allBooks){
      let allBooksElement = allBooks[index];
      //if(allBooksElement.classList.contains('favorite')){}
      allBooksElement.addEventListener('dblclick', function(event){
        event.preventDefault()
        allBooksElement.classList.add("favorite");
        const bookId = allBooksElement.getAttribute('data-id');
        if(favouriteBooks.includes(bookId)){
          allBooksElement.classList.remove("favorite");
        }
        else{
          favouriteBooks.push(bookId);
        };
        console.log(favouriteBooks);

      });
    }
    
  }


  render();
  initActions();
}