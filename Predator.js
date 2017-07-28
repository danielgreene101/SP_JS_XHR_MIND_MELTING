/**
+1. Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
+2. Create an IIFE with the name of Predator.
+3. Predator should have two private arrays to store carnivores and herbivores.
+4. Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
5. In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded then display those animals in your DOM. (Example given below)
6. In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
**/

var Predator = (function () {
    var carnivores = [];
    var herbivores = [];
    
    function d () {
          console.log(this.responseText)
        var myJson = this.responseText;
        carnivores = JSON.parse(this.responseText);
          console.log(carnivores);

        showCarnivores(carnivores);

      }

  return {
    loadCarnivores: function (callbackToInvoke) {
        console.log('hello');
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", d);
        loader.open('GET', 'carnivores.JSON');
        loader.send();
    },
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {

        herbivores = JSON.parse(this.responseText);
          console.log(this.responseText);
          
          showHerbivores(herbivores);
      });
    loader.open('GET', "herbivores.JSON");
    loader.send();
  }
  }
})();