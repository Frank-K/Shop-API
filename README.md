# Shop-API

[![Build Status](https://travis-ci.com/Frank-K/Shop-API.svg?token=WyhxT6rbCDpnAq8D7kz3&branch=master)](https://travis-ci.com/Frank-K/Shop-API)

An API for an online store. (An improvement to the 2019 Shopify Developer Challenge)

## Introduction

This project is a copy of the 2019 Shopify Developer Challenge. My initial version of the challenge was not structured optimally, so I decided to redo the challenge with a proper structure. My original repository for the challenge can be found [here](https://github.com/Frank-K/shopify-challenge).

## Changes

Here is a list of the changes from my original repository.

1. Add [ESLint](https://eslint.org/) with the [Airbnb style guide](https://github.com/airbnb/javascript) and [Prettier](https://prettier.io/).

   These changes allow for uniform code style throughout the project and make the overall structure of the code cleaner.

2. Add [Travis CI](https://travis-ci.org/) support to the repository.
   
   By adding Travis CI we are able to automatically run the linter on every commit. This gives us feedback on the quality of the code and can alert us to potential problems with the code.

3. Add models and controllers to the project structure.

   A model and controller in the form of, `Products.js` and `ProductController.js`, were added to the project. These changes create the proper structure for the REST API and create modules that perform specific functions.
