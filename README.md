# IPython Extensions

Work in progress. Updated instructions for Jupyter 4.0 (October 2015).

[Skip to installation instructions](#installation)

## Extensions

### Notebook web notifications

IPython notebook extension to display a web notification to notify you when the IPython kernel becomes idle. This can be useful when running tasks that take more than a couple of seconds to complete.

The extension has been tested with the most recent versions of Firefox, Chrome and Safari.

Initially, a button to request notification permissions is shown in the toolbar. After notification permissions have been granted, this button is replaced by a dropdown menu with five choices: `Disabled`, `0`, `5`, `10` and `30`. To activate notifications, select a minimum kernel busy time required to trigger a notification (e.g. if selecting `5`, a notification will only be shown if the kernel was busy for more than 5 seconds). The selection is saved in the notebook's metadata and restored when the notebook is re-opened.

<img src="notification.png" alt="Notification screenshot" style="width: 372; height: 101px; "/>

### Notebook theme toggle

IPython notebook extension to toggle between two CSS themes, `theme_default.css` and `theme_alt.css`. If `theme_default.css` is not found, no CSS is loaded for the default setting, i.e. only the pre-installed default theme is used.

## Installation

Download the notification extension:

    $ curl -L https://raw.github.com/sjpfenninger/ipython-extensions/master/nbextensions/notify.js > $(jupyter --data-dir)/nbextensions/notify.js

Download the theme toggle extension and sample alternative css file:

    $ curl -L https://raw.github.com/sjpfenninger/ipython-extensions/master/nbextensions/theme_toggle.js > $(jupyter --data-dir)/nbextensions/theme_toggle.js
    $ curl -L https://raw.github.com/sjpfenninger/ipython-extensions/master/nbextensions/theme_alt.css > $(jupyter --data-dir)/nbextensions/theme_alt.css

Load the extensions by updating your ``notebook.json`` file. There are two ways to do this:

* Directly in the notebook by running the following command in a cell:
    ```
    %%javascript
    Jupyter.notebook.config.update({"load_extensions":{"notify":true}})
    Jupyter.notebook.config.update({"load_extensions":{"theme_toggle":true}})
    ```
* By editing ``notebook.json`` manually. By default it is located at ``~/.jupyter/nbconfig/notebook.json``:
    ```
    {
      "load_extensions": {
        "notify": true,
        "theme_toggle": true
      }
    }
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
