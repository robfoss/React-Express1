

# Arrays

## How do I convert an Array of Strings to an Array of Numbers?

1. Write a helper function that receives one String and passes it to `parseInt()`
1. Test the function with one String
1. Pass the helper function `.map()`

# Objects

## How do I access a value deeply nested in an object?

The dot operator is your friend!

```js
// from wayfinding-1.js
console.log(us.Georgia.Atlanta.East_Lake.MyHouse.Living_Room);
```

### How do you know what key names to use?

If you can put the object on your screen (or better, print it out), point (with your finger) at the value you want. Then:

- find its parent, make note of the key.
- find the parent's parent, make note of the key
- find the parent's parent's parent, make note of the key
- (repeat until you have all the key names up to the "root")

Then, use the dot operator to chain together the key names *from the outside-in*


### What if some keys have spaces or quotes?

Use bracket syntax, with the key name in quotes (either single quote, double quote, or backtick):

```js
console.log(us.Georgia.Atlanta['East Lake']["Chris' House"]);
```

## How do I get all the values in a key?

The `Object.keys()` function will return them as an Array:

```js
function getCities(state) {
    //console.log(Object.keys(us[state]));
    return Object.keys(us[state]);
}
console.log(getCities['Georgia']);
// ["Athens", "Atlanta", "Macon"]
```

# Arrays of Objects

## How do I extract one of the keys from all the elements in an Array of Objects?

1. Write a helper function that returns the key.
1. Test the helper function with one element
1. Pass the helper function to .map()


## How do I filter out certain elements from an Array of Objects?

1. Write a helper function that returns a new Object that only includes the keys you want.
1. Test the helper function with one element
1. Pass the helper function to .map()


