## Baldr

Baldr is a web tool that enables you to create a website utilising the power of angularjs and requirejs.
It comes with a micro command line utility that lets you add and remove pages.

config.js
-------

This file contains a sitemap definition in the variable `pages`. Each page has two attributes: `name` and `label`.


`label` represents the text that will appear in the links list, `name` is the handle to configure the rest of the necessary files.


By convention, the engine will look for `app/views/*.html` and `app/scripts/controllers/*.js` files with the same name as the `name` of a page.
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

using sm.js
-----------

If you prefer you can use `sm.js`, a command line mini-tool for adding and removing pages.

`node sm.js add <pagename> <page label>` adds the page creating an automatic entry in the menu, configuring a controller, creating a .html file for the view.

`node sm.js remove <pagename>` removes the page, cleans up `main.js`, the view and controller files.

conclusion
-----------

More or less that's it. Feel free to destroy the css and go ahead replacing the existing pages and creating new ones. Head to [www.doomsword.com] to see Baldr in action.