# KCM8-Marvel_React_Native

Educational - Bootcamp KC Mobile 8 - Exercise for React Native module using Marvel public API

## ABOUT

This App is based on [Marvel Development API](https://developer.marvel.com/).

You will find two options in the Home page:

- **Comics:** individual print and digital comic issues, collections and graphic novels.
- **Comic series:** sequentially numbered (well, mostly sequentially numbered) groups comics with the same title.

Clicking in both options will show you a new page with the Comics list.

You can choose anyone, click on it and you will be redirected to a new page (with pagination) showing all the characters the comic have.

In addition, on this page you could find in the NavigationBar an option to create a new character.
As well as you can click on some of the characters and you will see the detailed information.

## INTERNAL SPECS

Comics, Series and Characters Lists are using **Flatlist and RefreshControl** objects.

The data source is managed with **Redux**.

And the Navigation uses components from **Router-flux** library.

## USE

If you want to use and try this App, you will have to create your own user and get the API_KEY from [Marvel Development API](https://developer.marvel.com/).

You have to update file under src/config named **credentials.js**
