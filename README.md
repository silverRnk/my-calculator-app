# Code Explanation

## File Structure
There are two import folder to run the app:
-`src/lib/*`
-`src/routes/*`
### `src/lib/*`
this is where your svelte components and utility class resides

### `src/routes/*`
this holds your code for your pages and your Rest API

## `src/routes/`
At `scr/routes/` resides the index page for your app. there are two files that build your index page
`+layout.svelte` and `+page.svelte`

### `+layout.svelte`
`+layout.svelte` is the shared layout across on all of your page. One thing to note here is that
this is where your `<Navbar>` resides.

### `+page.svelte`
`+page.svelte` is your web-page for your index page. This where the `<Calculator/>` placed.

## `<Calculator/>`
the main ui component of the app.

### `ui`
calculator has two inner components the `<Display/>` and the `<Button/>`

### `<script>`
To make the calculator work I had created an separate class in `src/lib/utils/Calculator.js` called `SimpleCalculator` this serve the logic of the calculator. For the documentation of the class [click here](https://github.com/silverRnk/my-calculator-apppp#class-simplecalculator)

Each button has an object coupled to it called `CalculatorButton`
    ```
        {
            label:any,
            value:string
        }
    ```
where each button has a click event that would called a `SimpleCalculator` method `enterAnInput`. At each click
it would passed the coupled value from the button to the `enterAnInput`. An update to `display` would be made

Once the user is satisfied with its input, it would now evaluate the expression. To do that it would send a `GET` request with the expression to Rest Api url `api/v1/compute` as a url parameter. [click here](https://github.com/silverRnk/my-calculator-apppp#rest-api)

## `src/routes/api/v1/compute/+server.js`
This contains the source code of your rest api

Inside the `+server.js` contains a `GET` function to handle get request
what it would do is to read the request url parameter, then turn the string into array with `" "` as the delimiter
 
Once that is done our expression is now ready to be passed to `SimpleCalculator` `static` method `calculate()`
this would evaluate the whole expression. then it would return a response to the user

# Class SimpleCalculator
this class serves as the logic for the Calculator App

## constructor()
this initialize a variable called expression that would how the values of your expression

## enterInput(inputVal: string) : void
handle input to your calculator class
### Accepted string
`CE` - clear the whole expression

`C` - clear the current value

`BckSpc` - clear the last character to the expression

`=`

`[0-9]` - Numeric input

`.` - decimal

`[+-/*]` - operators

`return void`

## `getExpression():string`
    return the whole expression in a string format

`return string`

## `toURLParams():string`
return the expression that can be passed as [URL parameter](https://github.com/silverRnk/my-calculator-app#query-params)

`return string`

## `Static calculate(string[]):string`
calculate the passed value

`return string`

# Rest Api

## `GET /api/v1/compute`

### Query Params
| Param | value |
| ----- | ----- |
| exp   | 22 %FB 5 |

note:because I use the url parameter to pass the value some symbols has to converted to code 

 `+` is `%2B`

 `/` is `%2F`

### Response Body
```
{
    answer:22
}
```

### [SvelteKit cmd](docs/command.md)
