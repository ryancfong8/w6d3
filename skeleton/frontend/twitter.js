const FollowToggle = require("./follow_toggle.js");


$( () => {
  //button returns array of elements
  $( "button" ).each(function(index, element){
    //element = this
    //the element is a DOM element, so we will need to wrap it in $ to make it JQuery
    new FollowToggle(element);
  });
});
