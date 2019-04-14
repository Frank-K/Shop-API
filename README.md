# Shop-API

[![Build Status](https://travis-ci.com/Frank-K/Shop-API.svg?token=WyhxT6rbCDpnAq8D7kz3&branch=master)](https://travis-ci.com/Frank-K/Shop-API)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


An API for an online store. (An improvement to the 2019 Shopify Developer Challenge)

## Introduction

This project is a copy of the 2019 Shopify Developer Challenge. My initial version of the challenge was not structured optimally, so I decided to redo the challenge with a proper structure. My original repository for the challenge can be found [here](https://github.com/Frank-K/shopify-challenge).

## Changes

Here is a list of the changes from my original repository.

1. Add [ESLint](https://eslint.org/) with the [Airbnb style guide](https://github.com/airbnb/javascript) and [Prettier](https://prettier.io/) support.

   These changes allow for uniform code style throughout the project and make the overall structure of the code cleaner.

2. Add [Travis CI](https://travis-ci.org/) support to the repository.
   
   By adding Travis CI we are able to automatically run the linter on every commit. This gives us feedback on the quality of the code and can alert us to potential problems with the code. Travis CI can also be used to run the test suite to quickly see if a new commit breaks the code.

3. Add models and controllers to the project structure.

   A model and controller in the form of, `Products.js` and `ProductController.js`, were added to the project. These changes create the proper structure for the REST API and create modules that perform specific functions.

4. Add [nodemon](https://nodemon.io/) as a dev dependency.

   Nodemon scans the web server for changes and automatically restarts the web server. This allows for quick development and testing.

5. Add [PM2](http://pm2.keymetrics.io/) to the project

   Added PM2 to the project to better deploy the project to a production environment.