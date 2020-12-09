# Converting data!

Create an express app for an online bookstore.

Use data that is in the following format:

```js
const db = [
    {
        title: 'book 1',
        author: 'someone',
        isbn: 'abc-123-xyz-456',
        price: 20,
        description: 'sample text'
    },
]
```

Make sure you have data for at least 5 books.

Create routes that `res.render()` templates for:

- `/` Show a welcome message and a listing of all books
    - include the title, author, and price
- `/:isbn` show all the details for a single book
    - include links to navigate back to the home page

## Bonus features:

Feel free to do any/all of these. Each feature is standalone and will not affect the other bonus features.

- Add a route for `/authors` and list all the author names.
    - Link each author name to a list of books they've written. Create a route for this page at `/authors/:name`
- Use the `faker` module to generate fake ISBN numbers, author names, prices, etc.
- Download photos for your fake (or real) books and store them in the `public` directory.
    - For each fake book in your `db`, add an `image` property, whose value is the path to the static image
    - If using `faker`, store the image paths in a separate array. Use the array index of a specific book object to access the corresponding item in the image array.

