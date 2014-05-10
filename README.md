# Toggle between two IPython notebook themes

IPython notebook extension to toggle between two CSS themes, `theme_default.css` and `theme_alt.css`. If `theme_default.css` is not found, no CSS is loaded for the default setting, i.e. only the pre-installed default theme is used.

Installation:

    $ curl -L https://raw.github.com/sjpfenninger/ipython-theme-toggle/master/theme_toggle.js > $(ipython locate)/nbextensions/theme_toggle.js
    $ curl -L https://raw.github.com/sjpfenninger/ipython-theme-toggle/master/theme_alt.css > $(ipython locate)/nbextensions/theme_alt.css

Then, load it with the following code in your `custom.js`:

```javascript
IPython.load_extensions('theme_toggle');
```

To load the alternative theme (`theme_alt.css`) by default, add the following after the loading code:

```javascript
// Always load alternative theme
require(["nbextensions/theme_toggle"], function (theme_toggle) {
    $([IPython.events]).on("notebook_loaded.Notebook", theme_toggle.theme_toggle);
});
```

To enable a ``t`` as a keyboard shortcut, add the following after the loading code:

```javascript
// Enable keyboard shortcut
require(["nbextensions/theme_toggle"], function (theme_toggle) {
    $([IPython.events]).on("notebook_loaded.Notebook", theme_toggle.theme_toggle_shortcut);
});
```