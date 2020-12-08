
# case study: craigslist

## Where to start?

The best place to start is an individual item page.

Why not the home page or a category/search page?

- The home page might be too "busy"
- A results page will have a lot of overlap with a details page.
  - (Because it's an Array of individual items.)


## Analyze one item


For now, disregard anything that's "global":

- site logo
- site navigation
- footer


Circle everything on the page that is particular to the item:

- title
- description
- location
- images 
- contact info
- product id

These are the fields in your "data model" - your description in code of the data shown on the page.

### Create an example of how the data might be stored

The data model for an item on craigslist might look like: 

```js
{
    title: 'iPod',
    description: 'old but works. full of great tunes from the 2000s',
    location: 'atlanta, ga',
    images: [ 'ipod1.jpg', 'ipod2.jpg'],
    contact: {
        user_id: 12345,
        name: 'chris a',
    },
    product_id: 8910
}
```

### Write an example route handler

You may need to navigate to other item pages to determine the pattern.
What's changing in the URL when you go to the next item?
What stays the same?

After you figure out what part of the URL should be a placeholder, use that for your route handler path:

```js
app.get('/computers/:id', (req, res) => {
    
});
```

Then, imagine how you might connect the data model to a view using `res.render()`:

```js
app.get('/computers/:id', (req, res) => {
    const {id} = req.params;
    const product = db[id];
    res.render('product-details', {
        locals: {
            title: product.title,
            description: product.description,
            // etc.
        }
    });
});
```


## Then analyze "many" (a search results page)

Now that you know what data is available for an individual item, you can imagine an Array of those kinds of items:

```js
const db = {
    for_sale: {
        computers: [
            {
                title: lenovo 'thinkpad x230',
                description: 'built like a tank',
                price: 100.0,
                // etc.
            },
            {
                // another item
            }
        ]
    }
}
```

Usually, the route path will be the same, but without the `:id`:

```js
app.get('/computers/', (req, res) => {
    const products = db.for_sale.computers;
    
    // Provide to a listing template
    res.render('product-listing', {
        locals: {
            products
        }
    });
});
```
