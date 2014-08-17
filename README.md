# IPython Extensions

Work in progress.

## Notebook theme toggle

IPython notebook extension to toggle between two CSS themes, `theme_default.css` and `theme_alt.css`. If `theme_default.css` is not found, no CSS is loaded for the default setting, i.e. only the pre-installed default theme is used.

Installation:

    $ curl -L https://raw.github.com/sjpfenninger/ipython-extensions/master/nbextensions/theme_toggle.js > $(ipython locate)/nbextensions/theme_toggle.js
    $ curl -L https://raw.github.com/sjpfenninger/ipython-extensions/master/nbextensions/theme_alt.css > $(ipython locate)/nbextensions/theme_alt.css

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

## Notebook web notifications

Installation:

    $ curl -L https://raw.github.com/sjpfenninger/ipython-extensions/master/nbextensions/notify.js > $(ipython locate)/nbextensions/notify.js

Then, load it with the following code in your `custom.js`:

```javascript
IPython.load_extensions('notify');
```

## License

The MIT License (MIT)

Copyright (c) 2014 Stefan Pfenninger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
