/*

**********************************
Toggle between light and dark mode
**********************************

Add this file and neighboring dark.css to $(ipython locate)/nbextensions/

Adapted from the toc nbextension, https://github.com/minrk/ipython_extensions

*/

define(["require"], function (require) {
  "use strict";

  var dark_button = function () {
    if (!IPython.toolbar) {
      $([IPython.events]).on("app_initialized.NotebookApp", dark_button);
      return;
    }
    if ($("#dark-button").length === 0) {
      IPython.toolbar.add_buttons_group([
        {
          'label'   : 'Toggle Bright/Dark Mode',
          'icon'    : 'icon-adjust',
          'callback': dark_toggle,
          'id'      : 'dark-button'
        },
      ]);
    }
  };

  var dark_shortcut = function () {
    if (!IPython.toolbar) {
      $([IPython.events]).on("app_initialized.NotebookApp", dark_shortcut);
      return;
    }
    IPython.keyboard_manager.command_shortcuts.add_shortcut('t', {
      help : 'toggle bright/dark mode',
      help_index : 't',
      handler : function (event) {
        dark_toggle();
        return false;
      }}
    );
  };

  var load_css = function () {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = require.toUrl("./dark.css");
    link.id = 'dark-css'
    document.getElementsByTagName("head")[0].appendChild(link);
  };

  var unload_css = function () {
    var css = document.getElementById("dark-css");
    css.parentNode.removeChild(css);
  };

  var is_dark = function () {
    if ($('#dark-css').length > 0) {
      return true;
    } else {
      return false;
    }
  };

  var dark_toggle = function () {
    if (is_dark()) {
      unload_css();
    } else {
      load_css();
    }
  };

  var load_ipython_extension = function () {
    dark_button();
  };

  return {
    load_ipython_extension : load_ipython_extension,
    dark_toggle : dark_toggle,
    dark_shortcut : dark_shortcut,
  };

});
