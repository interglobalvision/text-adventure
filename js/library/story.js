Story = {

  welcome: {
    name: "Welcome",
    description: "Welcome to the Treachery of Images text adventure.\nIs this your first time playing?\n(YES or NO)",
    actions: {
      yes: "tutorial",
      no: "outside",
    },
  },

  tutorial: {
    name: "Tutorial",
    description: "You can move around and interact with this world by typing commands when prompted with the cursor, and then pressing ENTER.\nWhen you enter a new position on the map a description of that position is read to you. The available commands for that position will be in UPPERCASE letters.\nDirectional commands like EAST or SOUTHEAST will move you to a new position. Object commands like PAINTING or VIDEO will tell you about an object in the world.\n...\nSometimes a person will start a conversation with you.  When it is time to speak back you will be given a list of responses. You can choose a response with the UP and DOWN arrow keys, and press ENTER to select it.\n...\nAlso, there are commands you can use at any time to help you on your way:\nType LIST to see a list of possible commands from your current position.\nType HELP to see this information again.\n...",
    actions: {
      "default": "outside",
    },
  },

  outside: {
    name: "Outside",
    description: "You're standing in front of a long brown building on Santa Fe Ave, a warehouse in downtown Los Angeles. Above your head and to your left you see the number 2011. There is a glass door in front of you, and big windows on either side. In the window to your right written in black is the word 'CIRRUS'.\n You can ENTER through the glass door.",
    actions: {
      enter: "guestbook",
    },
  },

  guestbook: {
    name: "Guestbook",
    type: "question",
    description: "You walk in through the glass door. On your left there is a small table with a guestbook. You take a title sheet.\nYou write your name in the guestbook...",
    actions: {
      "default": "frontEast",
    },
    save: 'name',
  },

  salomehOffice: {
    name: "Salomeh's Office",
    type: "conversation",
    description: "You enter Salomeh's office. The sound of the printer has the air. Salomeh is at a big L-shaped desk, eyes on her computer screen. She is finishing an email and you aren't sure if she noticed you yet.\n With a smile she says 'Just one moment.' While you're waiting you notice a strange printout on her desk.\n 'Done. Hi {{name}}. It's nice to see you. Did you have questions about the show?'",
    options: {
      1: "How long is it up for?",
      2: "What's that printout on your desk?",
      3: "Not really...",
    },
    actions: {
      1: "salomehOffice_1",
      2: "salomehOffice_2",
      3: "frontSoutheast",
    },
  },

  salomehOffice_1: {
    name: "Salomeh's Office",
    type: "conversation",
    description: "The show is on from Nov 21 2015 through Jan 30 2016. \n Did you any more questions about the show?'",
    options: {
      1: "How long is it up for?",
      2: "What's that printout on your desk?",
      3: "Not really...",
    },
    actions: {
      "1": "salomehOffice_1",
      "2": "salomehOffice_2",
      "3": "frontSoutheast",
    },
  },

  salomehOffice_2: {
    name: "Salomeh's Office",
    type: "conversation",
    description: "Jean's messing around with some emojis for clouds...I was like, 'Just do your own!'. \n Did you any more questions about the show?'",
    options: {
      1: "How long is it up for?",
      2: "What's that printout on your desk?",
      3: "Not really...",
    },
    actions: {
      "1": "salomehOffice_1",
      "2": "salomehOffice_2",
      "3": "frontSoutheast",
    },
  },

  frontSoutheast: {
    name: "Front space",
    description: "You are in the corner of the southeast corner of the gallery. You see on the wall a PAINTING by Siebren Versteeg. In the corner, a VIDEO by John Baldessari. To the right of that is the DOOR to Salomeh's office. To the WEST you see another office. To the NORTH you see more of the gallery, and the exit.",
    actions: {
      "painting": "siebrenVersteeg",
      "video": "johnBaldessari",
      "door": "salomehOffice",
      "west": "frontSouth",
      "north": "frontEast",
    },
  },

  siebrenVersteeg: {
    name: "Siebren Versteeg - 'ANChORESs'",
    description: "Siebren Versteeg - 'ANChORESs'\nThe painting on the wall is quite large - taller and wider than you, you think.  You can see that this painting is really a print on canvas. The telltale brush strokes of a digital brush.  And you see collaged in the digital paint images of text and texture. \nYou think of fantasy and dragons but you don't know why. Maybe its the fonts used in the collaged text, you think. One reminds you of Game of Thrones and the other of Medieval Times. \nYou remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you remember that infinity, like desire, is insatiable.",
    actions: {
      "default": "frontSoutheast",
    },
  },

  johnBaldessari: {
    name: "John Baldessari - 'Teaching a Plant the Alphabet'",
    description: "John Baldessari - 'Teaching a Plant the Alphabet'\nThe painting on the wall is quite large - taller and wider than you, you think.  You can see that this painting is really a print on canvas. The telltale brush strokes of a digital brush.  And you see collaged in the digital paint images of text and texture. \nYou think of fantasy and dragons but you don't know why. Maybe its the fonts used in the collaged text, you think. One reminds you of Game of Thrones and the other of Medieval Times. \nYou remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you remember that infinity, like desire, is insatiable.",
    actions: {
      "default": "frontSoutheast",
    },
  },

  frontEast: {
    name: "Front space",
    description: "You are on the eastern side of a big white room with bright white lights suspended from the ceiling. This is the gallery. From here you can move around the space. To the SOUTH, there is a video, a painting on the wall, and the door to an office. To the WEST, in the center of the room, there is a table with screens. To the NORTH there is a video playing and a large photograph.",
    actions: {
      "south": "frontSoutheast",
      "west": "frontCenter",
      "north": "frontNortheast",
    },
  },

  frontCenter: {
    name: "Front space",
    description: "You stand at a table. It has a 1/4 inch Sandeply tabletop and 3 chairs around it.  There are two tablets at either head of the table. One tablet is showing VIDEOS and the other has a list of WEBSITES. Standing on the center of the table is a COMPUTER with a font set by Paul Chan. \nTo the WEST are two framed works. To the NORTHWEST, a video projection and a triptych. To the NORTHEAST corner a photographic print and a video. In the EAST is the front of the gallery, the SOUTHEAST a painting and an office. To the SOUTHWEST is another office and the way to the back space of the gallery.",
    actions: {
      "videos": "videoTablet",
      "websites": "websiteTablet",
      "computer": "paulChan",
      "west": "frontWest",
      "northwest": "frontNorthwest",
      "east": "frontEast",
      "southeast": "frontSoutheast",
      "southwest": "frontSouth",
    },
  },

  videoTablet: {
    name: "Video tablet",
    description: "You sit down at the tablet showing videos. You see it's a youtube playlist of videos related to the artists or works in the exhibition. The video playing is titled 'Bruce Nauman : performances1968-9'. The video is black and white. You put on the headphones and hear the ticking of a film camera. You watch as Nauman takes delicate steps around the perimeter of the larger square of two concentric squares marked on the floor of what you assume is his studio. His hips cock, forming a contrapposto balance with each step. You think of greek sculptors and geometors. You think he looks like a bird the way he moves. You consider the distance of the film and the distance of his journey around the square. You wonder if the physical film itself is also walking the perimeter of a square. You wonder if that physical film exists much at all given the other forms walking squares between here and there. Between the square room and the square table and the square tablet and the square youtube thumbnail.",
    actions: {
      "default": "frontCenter",
    },
  },

  websiteTablet: {
    name: "Website tablet",
    description: "You pull out the chair and sit at a tablet at one end of the table. You see on screen a website. It's wegmanworld.com, William Wegman's official webpage. You notice the website's design is drawn from the illustrations in his recent children's books. You think of his transition from his early video and photographic works addressing his own body, to the work addressing his dogs' bodies. You open a video on the website. Its called 'Dog Duet'. You watch as two Weimaraners stand side-by-side simultaneously tracing with their eyes and heads the movement of some point traveling in space behind the camera. You consider choreography and the ways society and architecture influence the movement and posturing of bodies.",
    actions: {
      "default": "frontCenter",
    },
  },

  websiteTablet: {
    name: "Website tablet",
    description: "You pull out the chair and sit at a tablet at one end of the table. You see on screen a website. It's wegmanworld.com, William Wegman's official webpage. You notice the website's design is drawn from the illustrations in his recent children's books. You think of his transition from his early video and photographic works addressing his own body, to the work addressing his dogs' bodies. You open a video on the website. Its called 'Dog Duet'. You watch as two Weimaraners stand side-by-side simultaneously tracing with their eyes and heads the movement of some point traveling in space behind the camera. You consider choreography and the ways society and architecture influence the movement and posturing of bodies.",
    actions: {
      "default": "frontCenter",
    },
  },
  
};
