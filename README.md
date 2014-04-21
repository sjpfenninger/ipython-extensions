# Toggle light / dark mode

Installation:

    $ curl -L https://raw.github.com/sjpfenninger/ipython-dark/master/dark.js > $(ipython locate)/nbextensions/dark.js
    $ curl -L https://raw.github.com/sjpfenninger/ipython-dark/master/dark.css > $(ipython locate)/nbextensions/dark.css

Then, load it with the following code in your `custom.js`:

```javascript
IPython.load_extensions('dark');
```

To turn on the dark mode by default, add the following after the loading code:

```javascript
// Set dark mode by default
require(["nbextensions/dark"], function (dark) {
    $([IPython.events]).on("notebook_loaded.Notebook", dark.dark_toggle);
});
```

To enable a ``t`` as a keyboard shortcut, add the following after the loading code:

```javascript
// Enable keyboard shortcut
require(["nbextensions/dark"], function (dark) {
    $([IPython.events]).on("notebook_loaded.Notebook", dark.dark_shortcut);
});
```