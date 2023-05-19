{
    const templates = {
      bookTemplate: Handlebars.compile(document.querySelector('#template-book').innerHTML),
    }
    const booksList = document.querySelector('.books-list');
    console.log(templates.bookTemplate);
    const booksData = dataSource.books;
  
    function render(){
      //const thisBook = this;
      //thisBook.data = dataSource;
  
       for(let book in booksData){
          console.log(booksData[book]);
          const generatedHTML = templates.bookTemplate(booksData[book]);
          const createdBook = utils.createDOMFromHTML(generatedHTML);
          booksList.appendChild(createdBook);
       }   
    }
    render();
  }