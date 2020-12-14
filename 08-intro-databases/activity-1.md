
Start from your backup copy of the original index.js!

Generate a model that represents "Little wins"

- title (string)
- category (string)

Using this example HTML, update your form.

```html
<h1>Little wins</h1>
<form method="POST">
  <label>
    Name:
    <input name="title" type="text" autofocus />
  </label>
  <label>
    Type of Win:
    <select name="category">
      <option value="dev">Tech/programming</option>
      <option value="family">The fam</option>
      <option value="life">Life, in genral</option>
    </select>
  </label> 
 <input type="submit" value="do it!" />
</form>
```


Update your `app.post()` so that it grabs those values

Update your `/list` route to show a list of wins, including their title and category.

