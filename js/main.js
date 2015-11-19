/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, jQuery, document, Modernizr */

function l(data) {
  'use strict';
  console.log(data);
}

Adventure = {
  story: '',
  container: $('#description'),
  form: $('#input-form'),
  input: $('#text-input'),
  command: $('#command'),
  currentPlace: null,
  init: function(story, place) {
    var _this = this;

    // Set story
    _this.story = story;

    // Focus input
    _this.input.focus();

    // Prevent input blur
    $(window).on('click', function(){
      _this.input.focus();
    });

    // Copy from input to "command line"
    _this.input.keyup(function() {
      _this.command.text( _this.input.val() );
    });

    // Bind event
    _this.form.submit( function(event) {
      event.preventDefault();
      _this.listen( _this.input.val() );

      // Clear input and "command line"
      _this.input.val('');
      _this.command.text('');
    });

    _this.go(place);
  },

  go: function(place) {
    var _this = this;
    
    // Check if action exists
    if( _this.placeExist(place) ) {
      _this.currentPlace = _this.story[place];

      // Print description
      _this.say( _this.currentPlace.description )

    } else { 
      // Action not found
    }
  },

  listen: function(text) {
    var _this = this;
    
    // TODO: convert to lowercase

    // Split text into words in case theres more than just one word
    var words = text.split(" ");

    words.forEach( function(currentValue, index) {
      // Check if action exists
      if( _this.actionExists(currentValue) ) {
        _this.go( _this.currentPlace.actions[currentValue]);
      } else { 
        // Action not found
        console.log('action not found');
      }
    });
  },

  say: function(text) {
    var _this = this;
    
    _this.container.html(text);
  },

  placeExist: function(place) {
    var _this = this;
    
    if ( typeof( _this.story[place] ) === "object" ) {
      return true;
    } else {
      return false;
    }
  },

  actionExists: function(action) {
    var _this = this;

    // TODO: Check if 'default' action exist
    // if true, return true?
    
    if ( typeof( _this.currentPlace.actions[action] ) !== "undefined" ) {
      return true;
    } else {
      return false;
    }
    
  },

};
$(document).ready(function () {
  'use strict';
  Adventure.init(Story, 'welcome');
});

$(window).load(function () {
});
