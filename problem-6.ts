{
    interface Book {
        title: string;
        author: string;
        publishedYear: number;
    }

    const isRecentBook = (book: Book): boolean => {
        const runningYear = new Date().getFullYear();

        const yearDifference = runningYear - book.publishedYear;

        return yearDifference >= 0 && yearDifference <= 5;
    };

    // Sample Input:
    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022,
    };
    const result = isRecentBook(book1);
    console.log(result);
}