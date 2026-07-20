/**
 * Application entry point. Feature modules register an init function here;
 * each one runs once the DOM is ready.
 */
(function () {
  'use strict';

  var modules = [];

  function registerModule(init) {
    modules.push(init);
  }

  function bootstrap() {
    modules.forEach(function (init) {
      init();
    });
  }

  window.App = {
    registerModule: registerModule
  };

  document.addEventListener('DOMContentLoaded', bootstrap);
})();
