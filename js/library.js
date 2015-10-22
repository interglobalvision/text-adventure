
Story = {

  welcome: {
    name: "Welcome",
    description: "Welcome to the Treachery of Images text adventure. possible title?",
    actions: {
      yes: "tutorial",
      no: "outside",
    },
  },

  goodbye: {
    name: "Welcome",
    description: "Goodbye",
  },
  
  tutorial: {
    name: "Tutorial",
    description: "explains how to play. that commands are in BOLD. HELP, MAP, LIST, RESTART, etc",
    actions: {
      "default": "outside",
    },
  },

  outside: {
    name: "Outside",
    description: "You're standing in front of a long brown building on Santa Fe Ave, a warehouse in downtown Los Angeles. Above your head and to your left you see the number 2011. There is a glass door in front of you, and big windows on either side. In the window to your right written in black is the word \"Cirrus\" in all caps.\n You can ENTER through the glass door or LEAVE.",
    actions: {
      enter: "guestbook",
      leave: "goodbye",
    },
  },

  guestbook: {
    name: "Outside",
    description: "You walk in through the glass door. On your left there is a small table with a guestbook. You take a title sheet and then write your name in the guestbook...",
    actions: {
      enter: "guestbook",
      leave: "guestbook",
    },
  },
};
