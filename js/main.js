/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, Adventure, _, Story */

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
    if (_this.placeExist(place)) {
      _this.currentPlace = _this.story[place];

      // Print description
      _this.say(_this.currentPlace.description);

    } else {
      // Action not found
      console.log('Action not found');
    }
  },

  listen: function(text) {
    var _this = this;

    // Convert to lowercase
    text.toLowerCase();

    // Split text into words in case theres more than just one word
    var words = text.split(' ');

    // Get an array of all available actions
    var actions = _.keys(_this.currentPlace.actions);

    for (var i = 0; i < words.length; i++) {
      var action = words[i];

      // if 'help'
      if (action === 'help') {

        var help = '<p>From here you can say:</p><ul>';

        for (var x = 0; x < actions.length; x++) {
          actions[x].toUpperCase();
          help += '<li>' + actions[x] + '</li>';
        }

        help += '</ul>';
        _this.say(help);
        break;

      // Check if action exists
      } else if (_.indexOf(actions,action) >= 0) {

        _this.go(_this.currentPlace.actions[action]);
        break;

      // Action not found
      } else {

        // Check for default action
        if (_.indexOf(actions, 'default') >= 0) {
          _this.go( _this.currentPlace.actions.default);
        } else {
          console.log('action not found');
        }

        break;

      }
    }
  },

  say: function(text) {
    var _this = this;

    _this.container.append('<p>' + text + '</p>');
  },

  placeExist: function(place) {
    var _this = this;

    if (typeof( _this.story[place] ) === 'object') {
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
