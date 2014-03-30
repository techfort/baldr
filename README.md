## DoomSword website code

This site has been coded for reusability so anybody can build a website by just changing a few bits of code.

app.js
-------

This file contains a sitemap definition in the variable `pages`. Each page has two attributes: `name` and `label`.


`label` represents the text that will appear in the links list, `name` is the handle to configure the rest of the necessary files.


By convention, the engine will look for `app/views/*.html` and `app/scripts/controllers/.js` files with the same name as the `name` of a page.
I.e. if you create a page `biography`, you will need to place a `biography.html` file in `app/views` and a `biography.js` in `app/scripts/controllers`.

The last step to do is to register the relevant controller in `app/scripts/main.js` (the requirejs config file), where you will register the capitalised name of the page plus 'Ctrl' as a controller. In our biography case you will need a line like so:

```javascript
require.config({
  paths: {
    // ... definitions
    'BiographyCtrl': 'controllers/biography.js',
    // more definitions...
  }
})
```

More or less that's it. Feel free to destroy the css and go ahead replacing the existing pages and creating new ones.