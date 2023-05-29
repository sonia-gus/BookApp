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
    const bookImages = document.querySelectorAll(".book__image")
    for(let bookImage in bookImages){
      const singularImage = bookImages[bookImage];
      favouriteBooks.push(singularImage);
    }
    favouriteBooks = favouriteBooks.slice(0, -6);
    console.log(favouriteBooks);
    for(let index in favouriteBooks){
      let favouriteBooksElement = favouriteBooks[index];
      favouriteBooksElement.addEventListener('dblclick', function(event){
        event.preventDefault()
        favouriteBooksElement.classList.add("favorite");
      });
    }
    
  }


  render();
  initActions();
}