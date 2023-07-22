
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



# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
