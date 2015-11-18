Story = {

  welcome: {
    name: "Welcome",
    description: "Welcome to the Treachery of Images text adventure.",
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
      "default": "mainEast",
    },
  },

  salomehOffice: {
    name: "Salomeh's Office",
    description: "You enter Salomeh's office. The sound of the printer has the air. Salomeh is at a big L-shaped desk, eyes on her computer screen. She is finishing an email and you aren't sure if she noticed you yet.\n With a smile she says 'Just one moment.' While you're waiting you notice a strange printout on her desk.\n 'Done. Hi player-name. It's nice to see you. Did you have questions about the show?'",
    actions: {
    },
  },

  mainSoutheast: {
    name: "Main space - Southeast",
    description: "You are in the corner of the southeast corner of the gallery. You see on the wall a PAINTING by Siebren Versteeg.  To the right of that is the DOOR to Salomeh's office. To the WEST you see another office. To the NORTH you see more of the gallery, and the exit.",
    actions: {
      "painting": "siebrenVersteeg",
      "door": "salomehOffice",
      "west": "",
      "north": "mainEast",
    },
  },

  siebrenVersteeg: {
    name: "Siebren Versteeg, 'ANChORESs'",
    description: "You read on the title sheet that the painting on the wall by Siebren Versteeg is called 'ANChORESs'.  It's quite large - taller and wider than you, you think.  You can see that this painting is really a print on canvas. The telltale brush strokes of a digital brush.  And you see collaged in the digital paint images of text and texture.\n You think of fantasy and dragons but you don't know why. Maybe its the fonts used in the collaged text, you think. One reminds you of Game of Thrones and the other of Medieval Times.\n You remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you realize the difficulty with infinity is that it can't be satisfied.",
    actions: {
      "default": "mainSoutheast",
    },
  },

  mainEast: {
    name: "Main space - East",
    description: "You are on the eastern side of a big white room with bright white lights suspended from the ceiling. This is the gallery. From here you can move around the space. To the SOUTH, there is a painting on the wall, and the door to an office. To the WEST, in the center of the room, there is a square table with laptops. To the NORTH there is a video playing and a triptych of works on paper.",
    actions: {
      "south": "mainSoutheast",
      "west": "mainCenter",
      "north": "mainNortheast"
    },
  },

  mainCenter: {
    name: "Main space - Center",
    description: "",
    actions: {
    },
  }, 

  mainSoutheast: {
    name: "Main space - Northeast",
    description: "You are in the northeast corner of the gallery. You feel calm. To your right on the wall is a VIDEO by [artists name]. To your left a TRIPTYCH by [artists name]. To the WEST you see a painting and a work on paper. To the SOUTHWEST, in the center of the room, is a table with laptops. To the SOUTH you see more of the gallery, and the exit.",
    actions: {
      "video": "",
      "triptych": "",
      "west": "",
      "southwest": "mainCenter",
      "south": "mainEast",
    },
  },

  
};
