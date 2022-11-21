const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = (book) => {
   const booksTitle = books.map(book => book.title);
    return booksTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
