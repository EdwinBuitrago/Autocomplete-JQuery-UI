var main = function() {
  $(function(){
    var cities = [
      "New York",
      "Los Angeles",
      "Miami",
      "Meriden",
      "Sacramento",
      "Utah",
      "Toronto",
      "New Jersey",
      "San Francisco",
      ];
      $("#search").autocomplete({
        source: cities
      });
  });
};  

 
$(document).ready(main);
