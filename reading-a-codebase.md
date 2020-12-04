# How to read a Node.js codebase

This is guide contains tips for reading someone else's Node.js code. The goal isn't 100% comprehension, it's to build a map in your mind of where to find things. 

Using that map, you can return to the code later (after a break!) and study specific functions.

After a few passes, you'll hopefully end up with:

- good questions to ask the original developer
- suggestions for improving the code
- tips and tricks for your own code

Best of all, you've improved your overall fluency in JavaScript. It is *shocking* how effective this is for making you a better programmer.

## Read the `package.json`

Focus on two parts: the dependencies and the scripts.

### Dependencies

The dependencies tell us what libraries the code needs to do its work. For example, if `express` is a dependency, you should expect to see function calls like `app.get()`.

Dev dependencies tell us what tools the developers used *while building and maintaining* the code. These are *not necessary* for the code to work. `nodemon` is a good example - it reloads your code while you make changes to it (so that you don't have to keep pressing `Control + C` and retyping `node index.js`). The code for a live website doesn't need this kind of constant reloading.

### Scripts

The scripts are shortcuts for commands. Instead of typing `nodemon index.js`, the developer might create a "dev" script. In practice, these commands can be much longer, such as when running testing or debugging tools.


## Use the app

It's best if there's a demo or a live version - you won't need to do any setup :grin:

Otherwise, you can `git clone` the project and then:

- run `npm install` to download all the dependencies
- run the code with `node index.js` (or `app.js` or `server.js`, etc.)
    - if applicable, run whichever script looks like a "dev" script from `package.json`

Interact with it and get a feel for what it's supposed to do (is it a blog? a social media site? an e-commerce store? a customer relations manager?)

This tells you what kinds of real world things ("blog posts", "friends", "orders") to look for when reading the code.

Think of this like watching the trailer for a movie (where the code is the actual movie).

## Skim the files

Start with the main file (a.k.a. "the entry point").

The "main" file will be named something like `index.js`, `app.js`, `server.js`, or `main.js`. (There are no rules about file naming - so do some sleuthing and use your best judgement.) 

Things to look for:

- `require()` calls tell you (again) what libraries they're using and what project files (paths that start with `./`) are important.
- `module.exports` (which are usually not in the main file) tell you what this file provides to other files.

In VS Code, use [folding](https://code.visualstudio.com/docs/editor/codebasics#_folding) to hide the body of the functions. After folding the functions, the file will look like a listing of functions.

- Do the function names make sense? 
    - Do they read like short sentences or command names? Or did the developer do a poor job of naming? (e.g., `act()` vs `isUserActive()` or `data()` vs `fetchWeatherData()`)
- Do the arguments give you more clues about what the functions do?
    - They might be abbreviations (like the argument `req`, which is short for "Request"). In context, a one letter variable (such as `n`) is a good argument name for a `squareRoot()` function.

Find one function and unfold it. 

- Jump to the bottom of the function. What does it `return`? 
    - Is it a single variable, or the result of a function call?
- Go back to the top of the function.
    - Does it declare a lot of variables?
    - Does it do comparisons (`if/else`) on the arguments? What is it testing for? Does it assign a value if the argument fails the test?
- Keep skimming...
    - Do you see familiar function calls?
    - Are there comments that clarify what the code is doing?
    - Does each line of code seem to move closer the return value, or is the relationship still unclear?

Even if you don't completely understand what the function does, you've gained a little bit of familiarity. Repeat with a few more of the functions in this file.

- Are there patterns?
    - Does the developer call some of the same functions over and over?
        - Was it from a `require()`?
        - Is that function defined in this file? If so, study that function more.
        - Does it appear to be a built-in function that you didn't know before? Try searching for it on [MDN](https://developer.mozilla.org/en-US/).
    - Did they clearly copy/paste the same code over and over throughout the file?
        - This could indicate that the developer was in a hurry or put little time/effort into refining their code. This is a warning sign that the code may be harder to understand.
- Are they using more "fluent" syntax (e.g., arrow functions with implicit return) or are they using longer, more literal syntax (such as `if-return-true` `else-return-false`)
- Are the functions related in an obvious way (having names like `newGame()`, `highScores()`, `nextLevel()`)?  

### Skimming the main file of an express app

The routes of an express app are the valid URL paths that a browser can access. In other words, these are the "pages". For now, don't worry about the callbacks (i.e., the `(req, res) => {}` functions).

The route paths tell you what parts of the code correspond to the different pages the user sees when visiting the app in their browser. 

Find the code for a page you remember seeing, maybe the home page (route path `/`) or a listing (e.g., `/products` if it's an e-commerce site). Take a closer look at its callback function:

- How long is it? Does it do a lot of work or is it a single `res.send()`?
- Does it call functions you're familiar with, like `.map()` and `.filter()` or does it call a custom function from a `require()`?
- Do the variables give you clues about what the code is supposed to do?

If you're running the code yourself, try changing some of the Strings in the callback. Then, reload the code and refresh the browser. Did your text change show up somewhere visible on the page? If so, now you can see a cause-and-effect relationship between one thing in the code and something on the page. That's a win! :tada:

If you can't run the code, but you have access to a live/demo version of the site, look for any Strings that correspond to some text on the site.

## Make notes

Did you learn anything new (shorter syntax, new syntax, useful function)? Add it to your "developer diary" - [notion](https://www.notion.so/) is a great tool for this. (If you haven't started taking developer notes in something that's searchable...start now!)

Was it tricky to figure out? If there's no `README.md` in the project, create one! Use the [Markdown](https://guides.github.com/features/mastering-markdown/) syntax to add formatting, such as code highlighting. Show the commands for installing and running the app. Document the flow of the main file. Create a TODO section for how to improve the code (better naming, put copy/pasted code into functions, etc.).

