# Agenda

- [X] Josh's discord server
- [X] warmup!
- [X] review exercises
- [X] review classroom board
- [X] review of HTML forms
- [X] parsing POST bodies


## How do forms work?

Forms let users send data to the server.

Browsers encode the data and put in the body of a POST request.

The server must decode the POST body to use the data.

## How do I do that with express?

- `app.use()` the `express.urlencoded()` middleware
    - if you forget, then `req.body` will be `undefined`
- Create a template with the HTML for a form.
    - label each field with a `name` attribute
- `res.render()` the template in an `app.get()`
- Use an `app.post()` to receive the form submission
    - Get the values from `req.body`
- `res.redirect()` to another route when finished

## Why is the `name` attribute so important?

When the browser encodes the form data into the POST request, the `name` attributes are used as labels for that data. 

Let's say you send the browser this form:

```html
<form method="POST">
  <label>
    Thoughts?
    <input name="thought" type="text" autofocus />
  </label>
  <input type="submit" value="do it!" />
</form>
```

If the user types in `this is my thought` and submits the form, `req.body` looks like this:
```js
{
    thought: 'this is my thought'
}
```



