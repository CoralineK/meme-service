# Meme Service

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [State managment](#statemanagnent)
* [Setup](#setup)

### Introduction

This is a simple memes scroller with possibility to like or dislike.

### Technologies

Language:

- TypeScript

Libraries:

- React
- React Router - used to route between multiple pages in the app. Routing logic can be found in the `Router.tsx` file.
- Styled Components - CSS-in-JS library used to style React apps.
- json-server - used to build fake database.
- Formik and YUP - used to create form and validate it.
- react-infinite-scroll-component - used to make scrolling more efficient.

### State management

I am using Redux Toolkit to state management.

### Setup
To run this project, install it locally using yarn:

```
$ git clone https://github.com/CoralineK/meme-service.git
$ cd ./meme-service
$ yarn instal
$ yarn start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
