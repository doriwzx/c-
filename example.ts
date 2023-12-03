// Defining an interface for the "Book" object
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
}

// Function to display information about a book
function displayBookInfo(book: Book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.publishedYear}`);
    console.log(`Genre: ${book.genre}`);
    console.log("------------------------");
}

// Creating multiple books with different properties
const book1: Book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    genre: "Fiction",
};

const book2: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    genre: "Historical Fiction",
};

const book3: Book = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Dystopian Fiction",
};

// Displaying information about books
displayBookInfo(book1);
displayBookInfo(book2);
displayBookInfo(book3);

// An attempt to pass an object with an incorrect structure causes an error at compile time
// const invalidBook: Book = { title: "Invalid Title", year: 2022, author: "Unknown", genre: "Unknown" }; 
// Error: Type '{ title: string; year: number; author: string; genre: string; }' is not assignable to type 'Book'.
