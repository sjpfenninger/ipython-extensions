/*

*************************
Toggle between two themes
*************************

Add this file and neighboring dark.css to $(ipython locate)/nbextensions/

Adapted from the toc nbextension, https://github.com/minrk/ipython_extensions

*/

define(["require"], function (require) {
  "use strict";

  var themes = {def: "./theme_default.css", alt: "./theme_alt.css"};

  var theme_toggle_button = function () {
    if (!IPython.toolbar) {
      $([IPython.events]).on("app_initialized.NotebookApp", theme_toggle_button);
      return;
    }
    if ($("#theme-toggle-button").length === 0) {
      IPython.toolbar.add_buttons_group([
        {
          'label'   : 'Toggle Bright/Dark Mode',
          'icon'    : 'fa-adjust',
          'callback': theme_toggle,
          'id'      : 'theme-toggle-button'
        },
      ]);
    }
  };

  var theme_toggle_shortcut = function () {
    if (!IPython.toolbar) {
      $([IPython.events]).on("app_initialized.NotebookApp", theme_toggle_shortcut);
      return;
    }
    IPython.keyboard_manager.command_shortcuts.add_shortcut('t', {
      help : 'toggle theme',
      help_index : 't',
      handler : function (event) {
        theme_toggle();
        return false;
      }}
    );
  };

  var load_css = function (theme) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = require.toUrl(themes[theme]);
    link.id = theme + "-css";
    document.getElementsByTagName("head")[0].appendChild(link);
  };

  var unload_css = function (theme) {
    var css = document.getElementById(theme + "-css");
    css.parentNode.removeChild(css);
  };

  var is_active = function (theme) {
    if ($("#" + theme + "-css").length > 0) {
      return true;
    } else {
      return false;
    }
  };

  var theme_toggle = function () {
    if (is_active("alt")) {
      unload_css("alt");
      load_css("def");
    } else {
      unload_css("def");
      load_css("alt");
    }
  };

  var load_ipython_extension = function () {
    theme_toggle_button();
    $([IPython.events]).on("app_initialized.NotebookApp", load_css("def"));
  };

  return {
    load_ipython_extension : load_ipython_extension,
    theme_toggle : theme_toggle,
    theme_toggle_shortcut : theme_toggle_shortcut
  };

});
