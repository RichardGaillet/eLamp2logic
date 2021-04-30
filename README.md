# App Logic

## Introduction

We have 4 main applications, most of them are fully developed in React.js.
To simplify front-end developers' life, we built an internal components library that meet our design principles and can be used to setup new view and focus on application logic.

We are often faced to communicate between blocks inside a React page to share state, which can be data through API or specific state.

## Goals

![Mockup Structure](mock_logic.png)

Write a simple React.js application that is structured like this :
- 1 **main center block**, 1 **right detail panel**
- **Main center block** is a list of items fetched through API
- On click on an item in **Main center block**, **Right detail panel** shows the detail of this item
- While refreshing the page, clicked item must be kept on clicked state on **Main center block**, and detail of this item must be visible on **Right detail panel**

For that you will use :
- components already built in this folder,
- **models/api.js** which is used to mock the called API

## Estimated Max Time
30min

## Scope

Browser Compatibility : minimum Internet Explorer 11, Chrome, Firefox
React Version :
- greater or equal than React 15 required
- React 16 preferred

Allowed Languages : Typescript, ES5, ES6
# eLamp2logic
# eLamp2logic
