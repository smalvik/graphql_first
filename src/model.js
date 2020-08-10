const initialDB = [
    [
        'ID-1',
        {
            title: 'Harry Potter',
            author: 'J.K. Rowling'
        }
    ],
    [
        'ID-2',
        {
            title: 'Jurassic Park',
            author: 'Michael Crichton'
        }
    ]
];

const booksDB = new Map(initialDB);

export const getBooks = () => {
    const books = [];
    booksDB.forEach((value, key) => {
        const currentBook = {
            id: key,
            ...value
        };
        books.push(currentBook);
    });
    return books;
};

console.log(getBooks());