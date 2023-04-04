<div class="break"></div>

# React train the trainer

- [Introduction](#introduction)
  - [Who am I?](#who-am-i)
  - [Who are you?](#who-are-you)
  - [Before we start](#before-we-start)
- [Topics](#topics)
  - [Basics of modern web development](#basics-of-modern-web-development)
    - [A short journey through time](#a-short-journey-through-time)
    - [Node.js \& npm](#nodejs--npm)
      - [Exercise: Initialize your project](#exercise-initialize-your-project)
      - [Exercise: Cleanup your project](#exercise-cleanup-your-project)
      - [Tour through the project](#tour-through-the-project)
      - [Bundlers](#bundlers)
      - [Popular bundlers](#popular-bundlers)
    - [TypeScript](#typescript)
      - [Some examples](#some-examples)
      - [Exercise: First steps in TypeScript](#exercise-first-steps-in-typescript)
  - [First steps with React](#first-steps-with-react)
    - [JSX](#jsx)
      - [Exercise: Render your first element](#exercise-render-your-first-element)
      - [Rules of JSX](#rules-of-jsx)
    - [Components](#components)
      - [Exercise: Your first components](#exercise-your-first-components)
    - [Data driven UIs](#data-driven-uis)
      - [Exercise: Reusing components](#exercise-reusing-components)
  - [Interactive applications](#interactive-applications)
    - [Events \& States](#events--states)
      - [Exercise: Make your app interactive](#exercise-make-your-app-interactive)
      - [How state works](#how-state-works)
    - [Controlled \& uncontrolled components](#controlled--uncontrolled-components)
    - [State antipatterns](#state-antipatterns)
      - [Exercise: Building your first form](#exercise-building-your-first-form)
  - [Leaving the pure world of React](#leaving-the-pure-world-of-react)
    - [Async IO](#async-io)
    - [Data-fetching](#data-fetching)
      - [Data fetching and type safety](#data-fetching-and-type-safety)
      - [Promises](#promises)
      - [Exercise: Building some data loading functions for https://pokeapi.co/](#exercise-building-some-data-loading-functions-for-httpspokeapico)
    - [useEffect](#useeffect)
      - [Exercise: Displaying pokemon](#exercise-displaying-pokemon)
      - [The cleanup function](#the-cleanup-function)
      - [Exercise: Playing around with effects](#exercise-playing-around-with-effects)
    - [Ground rules of React](#ground-rules-of-react)
  - [Ecosystem](#ecosystem)
    - [State management](#state-management)
    - [Styling](#styling)
    - [Rendering modes and meta frameworks](#rendering-modes-and-meta-frameworks)

<div class="break"></div>

## Introduction

<div class="break"></div>

### Who am I?

- Andreas
- Developer, Trainer, Speaker
- Web technologies with main focus on TypeScript & React

<div class="break"></div>

### Who are you?

- Name
- Experience
- Expectations for the workshop

<div class="break"></div>

### Before we start

- Be curious
- Be open

<div class="break"></div>

## Topics

### Basics of modern web development

<div class="break"></div>

#### A short journey through time

- 1989 invention of the world wide web: http://info.cern.ch/hypertext/WWW/TheProject.html
- ~2005 "Mitmach-Web" - Wordpress & jQuery: https://www.ebay.de/
- 2010-2015: AngularJS & HTML 5: https://www.youtube.com/
- From 2015: Progressive web applications: https://docs.google.com/spreadsheets/

→ Increasing app complexity leads to pressure on developers to create tools for simplification.

→ Result: Compilers, frameworks, build chains, programming languages

<div class="break"></div>

#### Node.js & npm

- Node.js is a runtime that executes JS outside of the browser
- Access to OS like file system, network etc. allows implementation of scripts or complete backends
- Comes with **npm**, the node package manager
- Can be installed in user context
- [Node.js docs](https://nodejs.org/en/docs), [npm docs](https://docs.npmjs.com/cli/v9/commands)
- Every modern web application is an (unpublished) npm package
- Important commands:
  - `node script.js` executes some piece of JavaScript directly on your machine
  - `npm i <package-name>` install a package and add it to the dependencies of your project
  - `npm i -D <package-name>` install a package and add it to the dev dependencies of your project
  - `npm remove <package-name>` removes a package from all dependencies
  - `npm i` install all packages that are defined in `package.json` and `package-lock.json`.

<div class="break"></div>

##### Exercise: Initialize your project

1. Open a terminal in the folder that should contain your project folder.
1. Run `npm create vite@latest` and select the React & TypeScript preset. This will create a new folder with our new web project.
1. Navigate into the folder and run `npm i` to install the project dependencies.
1. Run `npm run dev` to start our application and open it in a browser.

<div class="break"></div>

##### Exercise: Cleanup your project

1. Now that we have everything set up, let's first clear everything that we do not need at the moment
1. Delete everything inside of the `src` folder, except `main.tsx` and `vite-env.d.ts`.
1. Remove everything from `main.tsx` and add a `console.log('Hello World')` and make sure this runs in your browser (even if you have a red underline under "console").

<div class="break"></div>

##### Tour through the project

- `package.json`:
  - `dependencies`: List of packages that are required at runtime for your project
  - `devDependencies`: List of packages that are required at development/build time
  - `scripts`: Reusable commands to run, developer, build, package or publish your project
- `package-lock.json`: Lists the exact version of every dependency and their dependency that was installed on the first `npm i`
- `node_modules/`: All dependencies of npm projects are stored directly within the project. You can open this folder and even directly change code of dependencies, since the packages mostly use JavaScript.
- `vite.config.ts` configuration for vite
- `tsconfig.json` and `tsconfig.node.json` configuration files for TypeScript (for the node context, running during build and the browser context)
- `index.html` your HTML entry point, that imports `src/main.tsx`, your TypeScript entry point.

<div class="break"></div>

##### Bundlers

- Prepare Code AND assets for consumption in the browser
- Typically come with a dev server
- May include optimizers and transpilers (SCSS, TypeScript)

<div class="break"></div>

##### Popular bundlers

- Webpack (included in Create React App, Angular CLI and many more). Hard to configure
- Vite (default for Vue.js, Solid.js and more "newcomers"). Easy to configure, very fast
- Parcel (feature rich but rarely used), very little configuration possible, very fast

<div class="break"></div>

#### TypeScript

- JavaScript with types
- Completely gone at runtime ➡️ the browser only runs JavaScript
- Supports really dynamic patterns, as it should work with common JS
- More JavaScript with types than Java/C# in the browser

<div class="break"></div>

##### Some examples

<div class="break"></div>

##### Exercise: First steps in TypeScript

- Create a new file: `src/math.ts`
- Define and export functions `add`, `subtract`, `multiply` and `divide`, that all take two numbers and execute the respective math operation and return the result.
- In `main.tsx`, use the global `prompt` function to ask the user for a first number (repeat if the user did not provide a number), use it again to ask for a second number, and then, ask for a math operation (`+`, `-`, `*` or `/`) to then execute the given operation and display the result with `alert`

  - You can use `parseInt` or `parseFloat` to get a number from a string (not that JS only has the runtime type `number`). If you try to parse some non-numeric string (like "hello"), the result will be `NaN` Not a Number
  - You can check if a value is NaN by using `Number.isNaN(value)`

- Optional part 2: Define a function `memoize`. This function can be called with any function that takes one argument, and returns a new function with the same signature. However, this returned function is automatically cache. Whenever this new function is called with an argument that has been used in the passed, the previous result is returned immediately without executing the base function. Example code:

```tsx
function isPrime(n: number) {
  const end = n ** 0.5;
  for (let i = 2; i < end; i++) {
    if ((n / i) % 1 === 0) return false;
  }
  return true;
}

const cached = memoize(isPrime);

// Calculates for 10
isPrime(10);

// Calculates for 5
isPrime(5);

// Directly reuses the previous result for 10
isPrime(10);
```

<div class="break"></div>

### First steps with React

#### JSX

- Examples first

<div class="break"></div>

- Every JSX Element is a function call,
- that creates a small JavaScript object,
- that describes, how the user interface should look like
- and only displays anything when passed to `createRoot(someDomNode).render(<div></div>)` or returned from a component

<div class="break"></div>

##### Exercise: Render your first element

- Check out your `index.html` file and identify an HTML element that can be used as the entry point to your React application
- Within `main.tsx`, use `document.getElementById` or `document.querySelector` to get a reference to this HTML element
- Use `createRoot(element).render(<h1>Hello World</h1>);` to render a heading inside of you root element.

<div class="break"></div>

##### Rules of JSX

- You always need exactly one root JSX element (even if it is the empty node `<>...</>` to group JSX)
- All tags need to be closed (or self-closed) `<input />`, `<img />`, `<li>...</li>`
- React uses the JavaScript property names instead of the HTML attribute names. So `className` instead of `class`, `htmlFor` instead of `for`, `onError` instead of `onerror`

<div class="break"></div>

#### Components

- Examples first

<div class="break"></div>

- Functions, that return JSX
- Receive one argument: the `props` object.
- NEVER call a component as a function yourself. They are made to be called by React
- Small, reusable, isolated components ([writing resilient components](https://overreacted.io/writing-resilient-components/)).
- Normally have their own styling "co-located" directly in the same file or right next to it. (`vite` allows you to import css or scss files)

<div class="break"></div>

##### Exercise: Your first components

- Create a new file `App.tsx`. Define and export a new component (`App`) that renders a heading with the text `Hello World` and render this `App` component in your project entry point in `main.tsx`.
- Define a `Header` component that displays a navigation with 3 links to google, bing and ecosia
- Display a button at the top right that shows a question mark (you can use the ❔ emoji as an icon). Nothing should happen on click for now.
- Use the `Header` component inside of your `App` component

<div class="break"></div>

#### Data driven UIs

- React is declarative!
- Everything is derived from data.
- To make anything dynamic we can add forks (`if ... else`) or loops. Simple control flow.
- Common practice is to use the ternary operator `condition ? trueValue : falseValue` and the `[].map()` function for control flow.

<div class="break"></div>

- Examples

<div class="break"></div>

##### Exercise: Reusing components

- Define a new component `Link` (optimally in its own file) that retrieves three props: `href`, `children` (for the content) and `isActive`, a boolean indicating whether the link should be marked as active link. Indicate this visually via a background, a border, a different text color or something like this.
- Within your Header component, instead of manually rendering three anchor tags, define a list with the 3 links in it, loop over the list, and render a `<Link />` element for every link. The first link should be marked as active.

<div class="break"></div>

### Interactive applications

#### Events & States

- Examples of useState and callback functions

<div class="break"></div>

##### Exercise: Make your app interactive

- Part 1
  - Define a new component `CounterButton`
    - Define a state variable "count" with `useState` and initialise it with `0`
    - Return a `<button>`-element that displays the current count
    - Whenever the button is clicked, the count should be incremented by 1
  - Render the CounterButton on the left side in your `Header`
- Part 2 (optional)
  - Whenever someone clicks on the question mark button, a model should open that displays some help text

<div class="break"></div>

##### How state works

- React triggers a re-render whenever someone calls a state setter.
- The rerender starts at the component, that defined the useState variable,
- and continues through all child components recursively.
- You need to make sure that these constant rerenders will not break anything in your application (no side effects in your function body like calling a network API)

<div class="break"></div>

#### Controlled & uncontrolled components

- React favors top down data flow
- When you want to control the state of a component (eg change it from the outside or reset it) you should pull the state out and manage it on the outside, where you need control.
- State should be kept as far down in the component tree as possible but pulled up when necessary.

<div class="break"></div>

#### State antipatterns

- Derived state is not real state!
- No conceptual state should have its source at two `useState` locations.
- Sometimes no state is needed at all. State is only necessary when you need the value for rendering.

<div class="break"></div>

##### Exercise: Building your first form

- Build a signup form with 4 fields:
  - A name field (`<input type="text" />`)
  - The date of birth (`<input type="date" />`)
  - A dropdown for the favorite color (`<select>` with some `<option>` children)
  - A checkbox (`<input type="checkbox" />`) to agree to the terms and conditions
- And a submit button, that logs all 4 values to the console.
- Add validation:
  - The name must be longer than 3 characters
  - The user must be at least 18 years old
  - The terms and conditions need to be accepted
- If any validation rule fails, the submit button should be disabled and an error message should be displayed

<div class="break"></div>

### Leaving the pure world of React

- So far, everything was inside of React. States and Props, nothing else.
- This is the best case, since this allows for platform independence (React native, React Ink, React Canvas etc.)
- So far the usefulness of our app is limited... We often need to communicate with the world outside of React
- Examples: Display data from the backend, use information about the DOM, like the size of elements, get data from some third party library without React integration

<div class="break"></div>

#### Async IO

- The JS userspace is single threaded
- All user interactions, UI calculations and updates are all happening on one thread
- If this thread is busy (for example with calculating the 1 billionth prime number), the UI freezes
- Communication with the network or (in node.js) the file system are inherently slow, but we do not want to block our main thread!
- This is why JS leans heavily on async operations.
- That means we can start some piece of slow work, continue with what we were doing before while getting informed as soon as this slow part of work is done.
- This is mostly implemented with callbacks.

<div class="break"></div>

#### Data-fetching

- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest?retiredLocale=de), old, tedious API, supports chunked data, cancellation, sync requests, used by some popular libraries like Angular CLI
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), more modern, easier to use, based on promises, supports cancellation
- Wrapper libraries like [Axios](https://axios-http.com/docs/intro) or [jQuery.ajax](https://api.jquery.com/jquery.ajax/)

<div class="break"></div>

##### Data fetching and type safety

- Data comes at runtime from an external source.
- There is no way, TypeScript can know at build time, what will be returned, so we have to help
- There is no way for TypeScript to validate at runtime, since it is compiled away.

<div class="break"></div>

##### Promises

- Same concept as Java's [CompletableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html) class
- A container for some value that will only be available some time in the future (or fail on error cases)
- Prevents "callback hell"
- Can be simplified with async/await

<div class="break"></div>

##### Exercise: Building some data loading functions for https://pokeapi.co/

- Part 1
  - Create a new file `src/pokeapi.ts`.
  - Write a function `getAllPokemon(limit: number, offset: number)` in which you hit the pokeapi to load the first `limit` pokemon after the first `offset` pokemon (typical pagination interface). You can use async/await or native promises.
  - Log the response body to the console and model a type `PokemonSummary` that fits to the response
  - Add the return type to the function so that users of the api can have type safety.
- Part 2
  - Implement a second function `getPokemonByName(name: string): Promise<PokemonDetails>`

<div class="break"></div>

#### useEffect

- As mentioned before, communication with the outside world has to happen somewhere where they do not re-run on every re-render, so not directly within a component function's body.
- That is what [`useEffect`](https://react.dev/reference/react/useEffect) is made for.

<div class="break"></div>

##### Exercise: Displaying pokemon

- Part 1

  - Inside of your app component, define a state for the current page and load the pokemon for that page via your API call (use useEffect and useState for this.)
  - Render a list with those pokemon names
  - Add a back and forward button below the list that change the page state, that should then automatically trigger a refetch for the new data

- Part 2

  - Add a new state for the name of the selected pokemon
  - Make every entry in your list clickable. When clicked, the name of the clicked pokemon should be put into the selected pokemon state.
  - Highlight the selected pokemon in the list.

- Part 3
  - If a pokemon is selected, render a new component `PokemonDetails`, that uses the `getPokemonByName` api to load the details of this pokemon and displays the name, the number and an image (inside of the sprites field) of the selected pokemon.

<div class="break"></div>

##### The cleanup function

- Whenever you "build something up" inside of your effect, you have to clean it up again to prevent memory leaks
- Even simple fetch requests can cause problems when the effects are fire too often.

<div class="break"></div>

##### Exercise: Playing around with effects

- Use [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) to log the currently selected pokemon name to the console every 5 seconds
- Be careful to add a cleanup (`clearInterval`) to prevent memory leaks.

<div class="break"></div>

#### Ground rules of React

- Never mutate shared data, this breaks dependency array checks.
- Never vary the amount of hooks within a component at runtime, for example within loops or conditionals. If you need this, create a component, pull the hook into the component, and render the component conditionally or within a loop.
- NO side effects during rendering.

<div class="break"></div>

### Ecosystem

- With the introduction of hooks in 2018, React class components were basically marked as legacy.
- They will stay supported for the years to come, but are not the recommended approach.
- With this change, many libraries and their APIs have changed dramatically which leads to many outdated tutorials.

<div class="break"></div>

#### State management

- State management helps you to separate stateful business logic from the rendering logic
- Popular solutions
  - [Redux](https://redux.js.org/) and its newer version [Redux Toolkit](https://redux-toolkit.js.org/) while used a lot in the past, really overkill for most projects
  - Micro state managers like [Jotai](https://jotai.org/), [Zustand](https://github.com/pmndrs/zustand) or [Valtio](https://github.com/pmndrs/valtio) can make things easier but are still not really needed for smaller to medium sized projects.
- Modern data fetching libraries like [React Query](https://tanstack.com/query/v3/) alleviate the need other state managers even more.

<div class="break"></div>

#### Styling

- There is no unified approach to styling
- Plain CSS: Seldomly used
- SCSS: Very common since it includes variables and makros
- CSS/SCSS-modules: Improve the base experience
- CSS-in-JS: Was trendy some years ago but quickly loses traction because of performance problems
- Utility first frameworks: [TailwindCSS](https://tailwindcss.com/) is really trendy at the moment
- Component libraries: Since React is so popular, there are literally hundreds of component libraries. Popular ones include [MUI](https://mui.com/) (material design in React, REALLY mature), [Mantine](https://mantine.dev/) and [React-Bootstrap](https://react-bootstrap.github.io/)

<div class="break"></div>

#### Rendering modes and meta frameworks

- React can be used fully client side.
  - One "empty" HTML file.
  - If you still want URLs, use a client side router like [React-Router](https://reactrouter.com/en/main). Note, this is no official library but basically standard.
- Static Site generation: At build time, different html pages are pre-generated FROM your React code, which leads to much better time-to-first byte. In the past, [Gatsby.js](https://www.gatsbyjs.com/) was used a lot for this, but by now, [Next.js](https://nextjs.org/) is generally preferred.
- Server side rendering: At request time, your components are executed on the server, to serve a complete HTML document. On the client, React then takes over again for interactions. [Next.js](https://nextjs.org/) is basically the defacto standard if you need this.

<label id="presentation-mode">Presentation mode <input type="checkbox" checked> </label>

<link rel="stylesheet" href="./README.css">
<script src="./README.js"></script>
