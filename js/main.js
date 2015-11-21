/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, Adventure, _, Story */

Adventure = {
  story: '',
  container: $('#description'),
  form: $('#input-form'),
  input: $('#text-input'),
  $customForm: $('#custom-form-container'),
  $focus: null,
  $mainContainer: $('#main-container'),
  currentPlace: null,
  save: {},
  init: function(story, place) {
    var _this = this;

    // Set story
    _this.story = story;

    // Prevent input blur
    $(window).on('click', function(event){

      // Check this isn't triggered by moving beteween radio buttons
      if( event.target.toString() !== "[object HTMLInputElement]") {
        _this.$focus.focus();
      }
    });

    // Bind event
    _this.form.submit( function(event) {
      event.preventDefault();
      _this.listen( _this.input.val() );
    });

    _this.go(place);
  },

  clean: function() {
    var _this = this;

    _this.input.val('');
    _this.$customForm.html('');
    _this.$mainContainer.removeClass().addClass('container');

  },

  go: function(place) {
    var _this = this;

    // Output command
    _this.say(_this.input.val().toUpperCase());

    // Clear
    _this.clean();

    // Set new place
    _this.currentPlace = _this.story[place];

    // Check if place is not a special type ex. conversation, question
    if ( !_.has(_this.currentPlace, 'type') ) {
      // Set focus element
      _this.$focus = _this.input;

      // Print description
      _this.say(_this.currentPlace.description);

      // else is special type
    } else {
      switch(_this.currentPlace.type) {
        case 'conversation': {
          _this.chat();
          break;
        }

        case 'question': {
          _this.question();
          break;
        }

      }
    }

    // focus
    _this.$focus.focus();
  },

  listen: function(text) {
    var _this = this;

    // Convert to lowercase
    text = text.toLowerCase();

    // Split text into words in case theres more than just one word
    var words = text.split(' ');

    // Get an array of all available actions
    var actions = _.keys(_this.currentPlace.actions);

    for (var i = 0; i < words.length; i++) {
      var action = words[i];

      // if 'list'
      if (action === 'list') {

        var list = '<p>From here you can say:</p><ul>';

        for (var x = 0; x < actions.length; x++) {
          list += '<li class="list-option">' + actions[x].toUpperCase() + '</li>';
        }

        list += '</ul>';
        _this.clean();
        _this.say(list);
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
          _this.say(action.toUpperCase());
          _this.say('action not found');
          _this.clean();
        }

        break;

      }
    }
  },

  say: function(text) {
    var _this = this;
    var regexp = /\{\{.*\}\}/;
    var found = text.match(regexp);

    if (found) {
      var variable = found[0].substr(0, (found[0].length - 2)).substr(2);

      text = text.replace(regexp, _this.save[variable]);
    }

    text = '<p>' + text + '</p>';
    text = text.replace(/\n/g, '</p><p>');
    _this.container.append(text);

    window.scrollTo(0,document.body.scrollHeight);
  },

  chat: function(conversation) {
    var _this = this;

    // Get the conversation
    conversation = typeof conversation !== 'undefined' ? _this.story[conversation].options : _this.currentPlace.options;

    var chatForm = '<form id="custom-form">';

    // Generate radio buttons
    for (var ffs = 1; ffs <= _.size(conversation); ffs++) {
      var checked = ffs === 1 ? 'checked' : '';

      chatForm += '<input id="radio-' + ffs + '" type="radio" name="conversation" value="' + ffs + '" ' + checked + ' /><label for="radio-' + ffs + '">' + conversation[ffs] + '</label><br />';
    }

    // Add submit button, close form
    chatForm += '<input type="submit" value="Submit"></form>';

    // insert dom and container class
    _this.$customForm.html(chatForm);
    _this.$customForm = $('#custom-form-container');
    _this.say(_this.currentPlace.description);
    _this.$mainContainer.addClass('conversation');

    // Set new focus element
    _this.$focus = $('#radio-1');

    // Bind submit
    _this.$customForm.find('#custom-form').bind('submit', function(event) {
      event.preventDefault();
      var selectedOption = $('input[type="radio"]:checked').val();
      var nextPlace = _this.currentPlace.actions[selectedOption];

      _this.say(_this.currentPlace.options[selectedOption].toUpperCase());
      _this.go(nextPlace);
    });

  },

  question: function(question) {
    var _this = this;

    // Get the answer name
    var answerName = typeof question !== 'undefined' ? _this.story[question].save : _this.currentPlace.save;

    // Generate text input
    var questionForm = '<form id="custom-form" autocomplete="off"><input id="question-input" type="text" autocomplete="off"><input type="submit" value="Submit"></form>';

    // insert dom and container class
    _this.$customForm.html(questionForm);
    _this.$customForm = $('#custom-form-container');
    _this.say(_this.currentPlace.description);
    _this.$mainContainer.addClass('question');

    // Set new focus element
    _this.$focus = $('#question-input');

    // Bind submit
    _this.$customForm.find('#custom-form').bind('submit', function(event) {
      event.preventDefault();
      var answer = $('#question-input').val();

      _this.save[answerName] = answer;

      _this.say(answer.toUpperCase());
      _this.go(_this.currentPlace.actions.default);
    });

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
