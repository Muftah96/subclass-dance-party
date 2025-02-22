$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunction)

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

$('.addBananaDancerButton').on('click',function(event){

var bananadancermakerfunctionname = $(this).data('banana-dancer-maker-function-name');

var bananadancermakerfunction = window[bananadancermakerfunctionname];

var bananadancer = new bananadancermakerfunction(
      Math.floor($("body").height() * Math.random()),
      Math.floor($("body").width() * Math.random()),
      Math.random() * 1000
    );

    $('body').append(bananadancer.$node);
  });


$('.addRoboDancerButton').on('click',function(event){

var Robodancermakerfunctionname = 'RoboDancer';
console.log(Robodancermakerfunctionname)
var Robodancermakerfunction = window[Robodancermakerfunctionname];
console.log(Robodancermakerfunction)
var robodancer = new Robodancermakerfunction(
      Math.floor($("body").height() * Math.random()),
      Math.floor($("body").width() * Math.random()),
      Math.random() * 1000
    );

    $('body').append(robodancer.$node);
  });

});







