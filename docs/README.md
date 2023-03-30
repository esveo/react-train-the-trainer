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
      - [💪 Initialize your project](#-initialize-your-project)
      - [💪 Cleanup your project](#-cleanup-your-project)
    - [TypeScript](#typescript)
    - [Bundler](#bundler)
  - [First steps with React](#first-steps-with-react)
    - [JSX](#jsx)
    - [Components](#components)
    - [Props](#props)
    - [Data driven UIs](#data-driven-uis)
  - [Interactive applications](#interactive-applications)
    - [Events \& States](#events--states)
    - [Controlled \& uncontrolled components](#controlled--uncontrolled-components)
    - [State antipatterns](#state-antipatterns)
  - [Leaving the pure world of React](#leaving-the-pure-world-of-react)
    - [Async IO](#async-io)
    - [Data-fetching](#data-fetching)
    - [useEffect](#useeffect)
  - [Ecosystem](#ecosystem)
    - [State management](#state-management)
    - [Styling](#styling)
    - [Routing](#routing)
    - [Meta-Frameworks](#meta-frameworks)

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
- Comes with **npm**, the node package manager and **npx** a tool to execute binaries from npm packages
- Can be installed in user context
- [Node.js docs](https://nodejs.org/en/docs), [npm docs](https://docs.npmjs.com/cli/v9/commands)
- Every modern web application is an (unpublished) npm package

<div class="break"></div>

##### 💪 Initialize your project

1. Open a terminal in the folder that should contain your project folder.
1. Run `npx create vite@latest` and select the React & TypeScript preset. This will create a new folder with our new web project.
1. Navigate into the folder and run `npm i` to install the project dependencies.
1. Run `npm run dev` to start our application and open it in a browser.

<div class="break"></div>

##### 💪 Cleanup your project

1. Now that we have everything set up, let's first clear everything that we do not need at the moment
2. Delete everything inside of the `src` folder, except TODO.
3. Add `console.log('Hello World')` to your `main.tsx` file.

<div class="break"></div>

#### TypeScript

```ts
const x: string = "Hello world";
```

#### Bundler

### First steps with React

#### JSX

#### Components

#### Props

#### Data driven UIs

### Interactive applications

#### Events & States

#### Controlled & uncontrolled components

#### State antipatterns

### Leaving the pure world of React

#### Async IO

#### Data-fetching

#### useEffect

### Ecosystem

#### State management

#### Styling

#### Routing

#### Meta-Frameworks

<label id="presentation-mode">Presentation mode <input type="checkbox" checked> </label>

<link rel="stylesheet" href="./README.css">
<script src="./README.js"></script>
