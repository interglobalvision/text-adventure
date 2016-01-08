Story = {

  welcome: {
    name: "Welcome",
    description: "Welcome to the Treachery of Images text adventure.\n\nIs this your first time playing?",
    actions: {
      yes: "tutorial",
      no: "outside",
    },
  },

  tutorial: {
    name: "Tutorial",
    description: "This world is an interactive adventure game by interglobal.vision set in the exhibition THIS IS NOT A CONNECTION at Cirrus Gallery in Los Angeles, CA.\n\nYou can move around and interact with this world by typing commands when prompted with the cursor and then pressing ENTER.\n\nWhen you enter a new position on the map a description of that position is read to you. The available commands for that position will be in upper case letters.\n\nDirectional commands like EAST or SOUTHEAST will move you to a new position. Object commands like PAINTING or VIDEO will tell you about an object in the world.\n\n...\n\nAlso there are commands you can use at any time to help you on your way:\n\nType LIST to see a list of possible commands from your current position.\n\nType HELP to see this information again.\n\nPress ENTER to continue...", 
    actions: {
      "default": "outside",
    },
  },

  outside: {
    name: "Outside",
    description: "You're standing in front of a long brown building on Santa Fe Ave, a warehouse in downtown Los Angeles. Above your head and to your left you see the number 2011. There is a glass door in front of you, and big windows on either side. In the window to your right written in black is the word 'CIRRUS'.\n\nYou can PROCEED through the glass door.",
    actions: {
      proceed: "guestbook",
    },
  },

  guestbook: {
    name: "Guestbook",
    type: "question",
    description: "You walk in through the glass door. On your left there is a small table with a guestbook. You take a title sheet.\n\nYou write your name in the guestbook...",
    actions: {
      "default": "frontEast",
    },
    save: 'name',
  },

/*******************************************/

  salomehOffice: {
    name: "Salomeh's Office",
    type: "conversation",
    description: "You enter Salomeh's office. The sound of the printer has the air. Salomeh is at a big L-shaped desk, eyes on her computer screen. She is finishing an email and you aren't sure if she noticed you yet.\n\nWith a smile she says, 'Just one moment.' While you're waiting you notice a strange printout on her desk.\n\n'Done. Hi {{name}}. It's nice to see you. Did you have questions about the show?'",
    options: {
      1: "How long is it up for?",
      2: "What's that printout on your desk?",
      3: "Not now.",
    },
    actions: {
      1: "salomehOffice_1",
      2: "salomehOffice_2",
      3: "frontSoutheast", //2
    },
  },

  salomehOffice_1: {
    name: "Salomeh's Office",
    type: "conversation",
    description: "'The show is on from Nov 21 2015 through Jan 30 2016.'\n\n'Did you any more questions about the show?'",
    options: {
      1: "How long is it up for?",
      2: "What's that printout on your desk?",
      3: "Not now.",
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
    description: "'Jean's messing around with some emojis for clouds...I was like, 'Just do your own!'\n\n'Did you any more questions about the show?'",
    options: {
      1: "How long is it up for?",
      2: "What's that printout on your desk?",
      3: "Not now.",
    },
    actions: {
      "1": "salomehOffice_1",
      "2": "salomehOffice_2",
      "3": "frontSoutheast",
    },
  },

/*******************************************/

  frontSoutheast: { //2
    name: "Front space Southeast",
    description: "You are in the corner of the southeast corner of the gallery. You see on the wall a PAINTING by Siebren Versteeg. In the corner, a VIDEO by John Baldessari. To the right of that is the DOOR to Salomeh's office. \n\nTo the WEST you see another office. To the NORTH you see more of the gallery, and the exit.",
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
    description: "Siebren Versteeg - 'ANChORESs'\n\nThe painting on the wall is quite large - taller and wider than you, you think.  You can see that this painting is really a print on canvas. The telltale brush strokes of a digital brush.  And you see collaged in the digital paint images of text and texture. \n\nYou think of fantasy and dragons but you don't know why. Maybe its the fonts used in the collaged text, you think. One reminds you of Game of Thrones and the other of Medieval Times. \n\nYou remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you remember that infinity, like desire, is insatiable.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontSoutheast",
    },
  },

  johnBaldessari: {
    name: "John Baldessari - 'Teaching a Plant the Alphabet'",
    description: "John Baldessari - 'Teaching a Plant the Alphabet'\n\nA video monitor is on a white pedestal about the height of your waist. Onscreen you see a black-and-white film is playing. Pictured in the frame in the foreground is a small potted house plant is set on a stool. You recognize this stool from CalArts. Just behind the plant you see Baldessari's hand enter and leave the frame, each time holding a letter-size card with a letter from the English alphabet. He's going through the alphabet in sequence and each time saying the name of the letter 10 or 15 times, and taking a brief pause between each letter.  'It's a futile excersize, teaching the alphabet to a houseplant', you think. You wonder if the transmission of ideas between discrete objects, be they persons or plants, is any use at all. You sense Baldessari had some playful frustration with effectiveness of language.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontSoutheast",
    },
  },

/*******************************************/

  frontEast: { //3
    name: "Front space East",
    description: "You are on the eastern side of a big white room with bright white lights suspended from the ceiling. This is the gallery. From here you can move around the space. \n\nTo the SOUTH, there is a video, a painting on the wall, and the door to an office. To the WEST, in the center of the room, there is a table with screens. To the NORTH there is a video playing and a large photograph.",
    actions: {
      "south": "frontSoutheast", //2
      "west": "frontCenter", //4
      "north": "frontNortheast", //5
    },
  },

/*******************************************/

  frontCenter: { //4
    name: "Front space Center",
    description: "You stand at a table. It has a 1/4 inch Sandeply tabletop and 3 chairs around it.  There are two tablets at either head of the table. One tablet is showing VIDEOS and the other has a list of WEBSITES. Standing on the center of the table is a COMPUTER with a font set by Paul Chan. \n\nTo the WEST are two framed works. To the NORTHWEST, a video projection and a triptych. To the NORTHEAST corner a photographic print and a video. In the EAST is the front of the gallery, the SOUTHEAST a painting and an office. To the SOUTHWEST is another office and the way to the back space of the gallery.",
    actions: {
      "videos": "videoTablet",
      "websites": "websiteTablet",
      "computer": "paulChan",
      "west": "frontWest",
      "northwest": "frontNorthwest", //9
      "northeast": "frontNortheast", //
      "east": "frontEast",
      "southeast": "frontSoutheast", //2
      "southwest": "frontSouth", //
    },
  },

  videoTablet: {
    name: "Video tablet",
    description: "You sit down at the tablet showing videos. You see it's a youtube playlist of videos related to the artists or works in the exhibition. The video playing is titled 'Bruce Nauman : performances1968-9'. The video is black and white. You put on the headphones and hear the ticking of a film camera. You watch as Nauman takes delicate steps around the perimeter of the larger square of two concentric squares marked on the floor of what you assume is his studio. His hips cock, forming a contrapposto balance with each step. You think of greek sculptors and geometors. You think he looks like a bird the way he moves. You consider the distance of the film and the distance of his journey around the square. You wonder if the physical film itself is also walking the perimeter of a square. You wonder if that physical film exists much at all given the other forms walking squares between here and there. Between the square room and the square table and the square tablet and the square youtube thumbnail.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontCenter",
    },
  },

  websiteTablet: {
    name: "Website tablet",
    description: "You pull out the chair and sit at a tablet at one end of the table. You see on screen a website. It's wegmanworld.com, William Wegman's official webpage. You notice the website's design is drawn from the illustrations in his recent children's books. You think of his transition from his early video and photographic works addressing his own body, to the work addressing his dogs' bodies. You open a video on the website. Its called 'Dog Duet'. You watch as two Weimaraners stand side-by-side simultaneously tracing with their eyes and heads the movement of some point traveling in space behind the camera. You consider choreography and the ways society and architecture influence the movement and posturing of bodies.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontCenter",
    },
  },

  paulChan: {
    name: "Paul Chan - 'Sade for Fonts Sake'",
    description: "Paul Chan - 'Sade for Fonts Sake'\n\nYou sit down and on the table in front of you are a black computer keyboard and a black computer mouse and a modestly sized black computer monitor. Open onscreen is a blank Microsoft Word document titled: 'OPEN FOR PAUL CHAN PIECE'. A sheet of paper on the table to the left of the keyboard tells you that installed on this computer are fonts designed by Chan that transform any text into Sadean erotics. The selected font is 'Oh Juliette'. You type, 'Walking a mile in someone else's shoes', but the font causes the words to spell out something else:\n\nyou sissy fuck me please christ oh god don't stop, keep going fuck me\nso wet oh god please yes oh god don't stop,\nharder more so wet yes more don't stop, yes yes please harder yes harder\nharder yes yes more yes harder\n\nYou feel warm. You look over to your left and then back at the screen. You stand up from your chair and push it in.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontCenter",
    },
  },

/*******************************************/

  frontNortheast: {
    name: "Front space Northeast",
    description: "You are in the northeast corner of the gallery. You feel calm. To your right on the wall is a VIDEO by Kutlug Ataman. To your left a POLAROID by Eve Sonneman. \n\nTo the WEST you see a video projection and a triptych. To the SOUTHWEST, in the center of the room, is a table with laptops. To the SOUTH you see the front of the gallery.",
    actions: {
      "video": "kutlugAtaman",
      "polaroid": "eveSonneman",
      "west": "frontNorthwest",
      "southwest": "frontCenter",
      "south": "frontEast",
    },
  },

  kutlugAtaman: {
    name: "Kutlug Ataman - 'Animated Words - Nothing'",
    description: "Kutlug Ataman - 'Animated Words - Nothing'\n\nYou see a gently undgulating flower of white calligraphy. You think that it isn't a flower at all but two identical forms of 8-point symmetry perfectly overlapped and turning in opposite directions on a black background. The turning creates a sensation for you both seductive and repulsive. Each time the two forms align you feel a tightness in your chest. You continue to watch the hypnotic spinning forms and see that they are indeed calligraphy of Arabic or Islamic origin. You think that even if you could read the characters you wouldn't be able to decipher the text with them spiraling like this.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontNortheast",
    },
  },
  
  eveSonneman: {
    name: "Eve Sonneman - 'Discus Thrower'",
    description: "Eve Sonneman - 'Discus Thrower'\n\nHung before you is a photographic print, 'about the size of a baby crib', you think. The photograph depicts two silhouettes of the same human form, side-by-side, the right one half the size of the left. You recognize the silhouettes are of the discus thrower; the greek athlete posed at the peak of potential energy. Both silhouettes are lit by colored spotlights, circles of color defining the silhouettes form on the black background. One light is a powder green and the other is yellow and blue concentrically. To you they look like planets.\n\nYou check the title sheet for the material of the piece: Polaroid Sonnegram, and you recognize 'sonne' as the German for 'sun'. You wonder about the large format polaroid camera that made this print.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontNortheast",
    },
  },

/*******************************************/

  jeanOffice: {
    name: "Jeans's Office",
    type: "conversation",
    description: "Talking...",
    options: {
      1: "No thanks",
    },
    actions: {
      1: "frontSouth",
    },
  },

/*******************************************/

  frontSouth: {
    name: "Front space South",
    description: "You are in the south wall of the front space. You feel liminal. To the WEST is the back space of the gallery. To the NORTH is the west wall of the front space. To the EAST is Salomeh's office and the east end of the front space. NORTHEAST there is a square table with laptops.",
    actions: {
      "west": "backSouth",
      "north": "frontWest",
      "east": "frontSoutheast",
      "northeast": "frontCenter",
    },
  },

/*******************************************/

  frontWest: {
    name: "Front space West",
    description: "You are standing at the western wall of the front space. You feel small. On the wall are two two-part FAX drawings by David Hockney. \n\nTo the EAST there is a square table with laptops. To the NORTH is a video projection. To the SOUTH is an office and more of the gallery.",
    actions: {
      "fax": "davidHockney",
      "east": "frontCenter",
      "north": "frontNorthwest",
      "south": "frontSouth",
    },
  },

  davidHockney: {
    name: "David Hockney - 'Views of the Sea' and 'Geometric Waves'",
    description: "David Hockney - 'Views of the Sea' and 'Geometric Waves'\n\nTwo frames are on the wall in front of you side-by-side, each supporting two works on paper, one above the other. The top work of each frame is a moody blue-grey drawing on watercolor paper. The drawings are done in variety of materials: ink, guache, crayon and paint, and with an even greater variety of mark-making. \n\nThe frame on the left is 'Views of the Sea' and indeed depicts something of an ocean scenario. 'Maybe a beach', you think, as you notice in the bottom-right corner of the picture something that resembles a palm tree. The frame on the right is 'Geometric Waves' and indeed depict something of a cubist sea storm. The waves jut out of patterned seas as dramatic cones.\n\nBelow the drawings in each frame is a fascimile of the drawing above it of the same dimensions (letter). They are black-and-white doubles of the drawings above them. You feel that in the reproduction some emotion has been lost; they feel dead to you. On the left edge of each facsimile is printed computer text reading perpendicular to the picture plane (the top of the letter-size copy paper). You read the text from the facsimile of 'Views of the Sea':\n\nAPR 27 '95 16:57 D H STUDIO\n\nYou read the text from the facsimile of 'Geometric Waves':\n\nAPR 27 '95 17:09 D H STUDIO\n\n'Twelve minues later,' you think, and you can tell this text is the mark of a recieved telefax. You notice more than the loss of color in the facsimile, you notice a compression in the image. You wonder what is gained through loss and about the term 'digital artifact'. You think of an ocean of data and of weather systems.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontNortheast",
    },
  },

/*******************************************/

  frontNorthwest: {
    name: "Front space Northwest",
    description: "You are in the northwest corner of the front space. You feel like you are moving although you are not. In the corner is a video PROJECTION by Brice Bischoff. On the wall is a TRIPTYCH by Dennis Oppenheim. \n\nTo the SOUTHEAST there is a square table with laptops. To the SOUTH are two works by David Hockney. To the EAST is a photograph and a video.",
    actions: {
      "projection": "briceBischoff",
      "triptych": "dennisOppenheim",
      "southeast": "frontCenter",
      "south": "frontWest",
      "east": "frontNortheast",
    },
  },

  briceBischoff: {
    name: "Brice Bischoff - 'Night Drive'",
    description: "Brice Bischoff - 'Night Drive'\n\nThere is a large black steel frame on some wide stucco pedestal in the corner of the room. Streched within the frame is a kind of plastic screen or scrim with a few thin blue and yellow colored strokes gesturing across it. 'They're like spray paint', you think, or some remainder of a photographic process.\n\nOn the floor by your feet, more toward the center of the room, is a small white pedestal with a projector pointed toward the screen.  The projector is throwing a parade of greyscale images onto the screen in front of you. The images meander from left to right at different speeds and depths. The images are photographs from the street. You think how they are so reminiscent of the streets of Los Angeles, but that many streets in many cities could yield images like these. The way the projected images play with the colored strokes is very friendly as they crest and intersect.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontNorthwest",
    },
  },

  dennisOppenheim: {
    name: "Dennis Oppenheim - 'Ghost Trip'",
    description: "Dennis Oppenheim - 'Ghost Trip'\n\nYou see on the wall a triptych of large paper works framed in plexiglass. The one on the left: a rather blue bird's eye photograph of terrain. On the second of the three panels you read black text on white: \n\nGHOST TRIP 1976. PROJECT PROPOSAL FOR:\nWESTERN UNITED STATES.\nDIMENSIONS: 400 FEET.\nMATERIALS: PLOWED EARTH.\n\nYou think of the approximation of physical space in data...and the limitations of the documentation of art. The third panel of the triptych is a map and you wonder if it resembles at all the other two panels. You recall something from Borges, an introduction to a story maybe, that spoke something of a map so precise it became as large as the area it was meant to represent. You think you remember something from Baudrillard that mentioned that verse but you quickly give up on remembering.\n\nPress ENTER to continue...",
    actions: {
      "default": "frontNorthwest",
    },
  },

/*******************************************/

  backSouth: {
    name: "Back space South",
    description: "You are at the south end of the back space; the southwest corner of the gallery. You feel brave. On the wall to the south are a framed PRINTOUT by Barbara Smith, a Seth Price TEXT hanging from a chain, a PRINT by Chris Burden. Next to those there is a small Barbara Kruger LITHOGRAPH hung above an INKSTAMP by Ed Keinholz. Then to the right is a PAINTING by Tyler Matthew Oyer, and finally a DRAWING by Guy de Cointet. \n\nTo NORTH is the back space of the gallery, and to the EAST is the front space.",
    actions: {
      "printout": "barbaraSmith",
      "text": "sethPrice",
      "print": "chrisBurden",
      "lithograph": "barbaraKruger",
      "inkstamp": "edKeinholz",
      "painting": "tylerMatthewOyer",
      "drawing": "guydDeCointet",
      "north": "backCenter",
      "east": "frontSouth",
    },
  },

  barbaraSmith: {
    name: "Barbara Smith - mailer for 'Field Piece'",
    description: "Barbara Smith - mailer for 'Field Piece'\n\nHung in a gold frame nearest the left end of the wall you approach what appears like a drawing of dots. The top and bottom edges of the paper are each lined with a single line of punched holes. You recognize that this is a dot matrix print on continuous form paper, an now far outdated technique of computer printout. The image on the paper is formed by evenly spaced dots of different widths and densities. You see at the upper half of the paper the dots form the image of a white cloud, the word 'CIRRUS' in its center. At the lower half of the paper you see the dots form the image of a hill, the words 'FIELD PIECE' spelled out across it in negative space. Both the cloud and the hill appear to you to be emanating some kind of atmosphere. 'They're trying to merge', you think. In the bottom left corner of the hill, written perpendicular to the horizon of the dot landscape, in characters the same height and width of the dots in the matrix, are the details of an exhibition:\n\nBARBARA TURNER SMITH\n\n708 MANHATTAN PLACE\nLOS ANGELES (NR MELROSE & WESTERN)\n\nSEPT 9 THRU SEPT 27, 1971\n\n\nHOURS: MON THRU SAT\n10AM TO 4PM\n\nRECEPTION:\nTHURS SEPT 9\n8PM TO 10 PM\n\nIn the bottom righthand corner, in the same font as the exhibition details, you see the letters 'RR' and think, '...those must be initials.' You think of the term 'immaterial labor' and decide you don't quite know what that means.\n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

  sethPrice: {
    name: "Seth Price - 'Dispersion'",
    description: "Seth Price - 'Dispersion' \n\nYou open a booklet hanging from the wall and read:\n\nThe definition of artistic activity occurs, first of all, in the field of distribution.\nMarcel Broodthaers\n\nYou read on. You read about the distribution of art works and art ideas. You think about the manner in which the works you are experiencing in this exhibition are arriving in your proximity. You read:\n\n...the uninvitingly “tomb-like” Conceptualism of the 1960s.\n\nYou read about 'authenticity' as the objective of the record keeping of art works by the institutios of art. You read about the alternative 'popular archive' and a distribution that seeks a fractured and 'horizontal' existence for art works. \n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

  chrisBurden: {
    name: "Chris Burden - Untitled",
    description: "Chris Burden - Untitled\n\nAn untitled print by Chris Burden shows you some handwriting and a photo of upturned palms.  You walk closer to inspect it. You read the blue handwriting quietly to yourself:\n\nCHRIS —\nTOOK BUS TO\nWORK. CAN NOT\nDO NAILS. COULDN'T\nSLEEP.\n\nBelow the words, centered horizontally, you see the photo. You look closer and see that the palms are upturned to show a fresh wound in each. You think it reminds you of the wounds of Christ and remember a performance by Burden called 'Trans-Fixed' in which he was crucified on a VW Beetle.  You think on the roles that text and photography have played in his actions. You wonder who wrote the note and who drove the nails through his hands when the writer could not.\n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

  barbaraKruger: {
    name: "Barbara Kruger - 'You're Right'",
    description: "Barbara Kruger - 'You're Right'\n\nThe thin lithograph framed before you by a thin pane of glass is wider than it is tall. It has three simple elements. The first, and most prominent by size, is a black halftone of two human eyes gazing off to your left, disregarding you. The second, and most prominent by color, is a hot pink rectangle censoring the bridge of the gazer's nose with white text reading:\n\nYOU'RE\nRIGHT\nAnd third, locked below the hot pink strip is a green block with white text reading:\n\nAND YOU\nKNOW IT\nAND SO\nSHOULD\nEVERYONE\nELSE\n\nYou think of the distribution of the artist's thoughts and the egoism and almost divinity implied therein. You suppose that any speech act is a mechanism to manifest the body of the speaker in some supreme manner superior to the arguably questionable physical presence of that body. You think this is pessimistic and you leave it at that.\n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

  edKeinholz: {
    name: "Ed Kienholz - 'For a Mitre Saw'",
    description: "Ed Kienholz - 'For a Mitre Saw'\n\nOn the wall you see a thin steel frame weathered and framing a work on watercolor paper. The work is about the width of your shoulders when you were a child.  There is a pale yellow wash striping the white plane of paper like a horizon.  And on that, in a black handmade type of some antique style, you read:\n\nFor A MITRE SAW\n\n'Like a price tag', you think and you wonder about the commerce of artworks. You wonder how to draw an equivilancy between a mitre saw and this drawing before you.\n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

  tylerMatthewOyer: {
    name: "Tyler Matthew Oyer - 'Marquee #68'",
    description: "Tyler Matthew Oyer - 'Marquee #68'\n\nThere on the wall in front of you is a painted canvas stretched on a frame. You think its about the size of a young boy. The picture plane shows you three graphic layers: a pitch black background, then a silhouette of a giant golden hand, then 5 lines of large white uppercase text. The golden hand is graphic yet ornate. It begins at the top from its wrist, haloed by a frilly golden sleeve. The golden wrist continues down the picture to the golden hand. The golden hand leads to golden fingers. The tip of each golden finger terminates in a golden flower, and each of the flowers appear to be of a unique variety. You think that each finger bestows a unique character on the field. On top of the golden hand is the white text which reads:\n\nM I N D R\nE B O R N\nB Y S K Y\nT H A T I\nS T O R N\n\nAnd it takes you a moment to decifer but then recognize it reads as, 'MIND REBORN BY SKY THAT IS TORN'. To you this reads like a line from a poem or a song. But then you remember the magic golden fingers of the golden hand and think the text is also like a spell. \n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

  guydDeCointet: {
    name: "Guy de Cointet - 'Lady and Two Popes'",
    description: "Guy de Cointet - 'Lady and Two Popes'\n\nYou're standing in front of a framed print of very thin lines on big white paper. The lines are a thicket of sharp angles and it appears to you that lines could be just one line crossing over itself many times at different angles. 'But of course not, there are many endings,' you think to yourself. \n\nThe small, handwritten caption at the bottom reads 'A lady and two popes' and you think that sounds like the beginning of a joke. You see it's also signed on the bottom-right, 'Guy de Cointet'. The shape of the drawing looks to you like a block of text because of the way it finishes at the bottom like the last line of a paragraph. You remember those drawings of de Cointet that are like cryptographic poems and think, 'This must be one of them'. You think about cryptography in your daily life...barcodes...passwords. You think of Bitcoin and the Silk Road...Edward Snowden and Chelsea Manning.\n\nPress ENTER to continue...",
    actions: {
      "default": "backSouth",
    },
  },

/*******************************************/

  backCenter: {
    name: "Back space Center",
    description: "You are in the center of the back space; the north edge of the gallery. On the floor is a video of a GAME by Eddo Stern. There is a single framed LITHOGRAPH by Bruce Nauman on the wall. To the right of that, a variety of print ephemera: CHICKEN postcards by Suzanne Lacy, MIMEOGRAPH pieces by Kim Jones, BOOTS postcards by Eleanor Antin, and three BOOKS by Ida Applebroog.\n\nTo NORTH is the end of the back space of the gallery, and to the SOUTH is the front space.",
    actions: {
      "game": "eddoStern",
      "lithograph": "bruceNauman",
      "chicken": "suzanneLacy",
      "mimeograph": "kimJones",
      "boots": "eleanorAntin",
      "books": "idaApplebroog",
      "north": "backNorth",
      "south": "backSouth",
    },
  },

  eddoStern: {
    name: "Eddo Stern - 'Vietnam Romance'",
    description: "Eddo Stern - 'Vietnam Romance'\n\nYou watch as side-scrolling scenes of richly colored watercolor landscapes fall from right to left across a large flat-screen monitor in the center of the floor you stand on. You crouch down momentarily to meet the screen at eye-level. The scenes before you switch between clouds and cities and war zones and deserts (some road in a rainy rural Vietnam, an airport in the Mojave desert, an airport cafe, a stormy night sky high in the clouds with airplanes struggling to stay in flight, a desert road with tanks trudging across). Occasionally text appears onscreen with video game prompts: 'press any button to play', or dialogue floating above characters heads. You decide that this is in-game video from a video game, but the aesthetic of the watercolor graphics is unfamiliar. You watch as a tank travels up a hill annhiliating giant text characters with its mounted machine gun.\n\nPress ENTER to continue...",
    actions: {
      "default": "backCenter",
    },
  },

  bruceNauman: {
    name: "Bruce Nauman - 'Raw War'",
    description: "Bruce Nauman - 'Raw War'\n\nYou see a lithograph displaying the word 'WAR' in uppercase red letters.  You squint your eyes and see that behind 'WAR' is the word 'RAW', slightly fainter. Behind that 'WAR' again and then 'RAW' and it seems to repeat on as it disappears in the pitch black space. You wonder if the text is like a neon sign, and if the depth is a play with time. The oscillation between 'WAR' and 'RAW' brings to your mind some oscillating dichotomies in the work such as one between image and text...or another between stillness and motion.\n\nPress ENTER to continue...",
    actions: {
      "default": "backCenter",
    },
  },

  suzanneLacy: {
    name: "Suzanne Lacy - 'Anatomy Lesson no.1: Chickens Coming Home to Roost'",
    description: "Suzanne Lacy - 'Anatomy Lesson no.1: Chickens Coming Home to Roost'\n\nYou see four postcards in four frames hung in two lines of two on the wall. Each postcard is a photograph depicting Lacy nude, facing the camera, at a kitchen table with a tray of cooked chicken parts.  You see that in each photograph she is eating a different piece of chicken. \n\nIn the top two postcards she is eating the chicken's wings. In the first she has her head turned sharply to right, with her right elbow on the table as she feeds her mouth with her right hand, and her left arm stretched forward toward the table. Below her right arm is printed the word: 'wing', and below her left arm: 'arm'. You think that her right arm as it touches elbow to table and bends back up to feed herself does in its triangular posture resemble a wing. And you can see that her other arm as it is outstretched on the table in repose is more human in its posture.\n\nIn the third postcard she is eating the chicken's leg. She has her own leg up on the table in front of her and you take notice of its shoeless dirty foot. She leans toward her leg like a dancer as she gnaws into the chicken leg eyes closed and elbows up. In the caption below her you read: 'leg'.\n\nIn the final postcard she is eating the chicken's breast. In the other photographs her eyelids were closed in enjoyment, but here her eyes gaze through the camera, through the postcard, through time, and into your own. Both elbows are on the table as she feeds her self with both hands, her breasts framing the tray of chicken parts below them. The caption reads: 'breast'.\n\nPress ENTER to continue...",
    actions: {
      "default": "backCenter",
    },
  },

  kimJones: {
    name: "Kim Jones - 'Mimeograph pieces'",
    description: "Kim Jones - 'Mimeograph pieces'\n\nFour framed mimeographs are hung two-by-two on the wall. Each is about letter-size and each shows you a black-and-white photograph with an irregular white margin on the page. Captured in the photograph is Jones a man on a rooftop. He is nude aside from a costume of sticks and mud formed in some arrangement varying between each. You remember Jones did public appearances like this in Los Angeles as his alter-ego known as Mudman. \n\nMudman takes power stances on the roof and you think there is some energy in the clumps of mud. You imagine meeting Mudman in the street in downtown Los Angeles and the speechless exchange of presence that you would pass together.\n\nPress ENTER to continue...",
    actions: {
      "default": "backCenter",
    },
  },

  eleanorAntin: {
    name: "Eleanor Antin - '100 Boots'",
    description: "Eleanor Antin - '100 Boots'\n\nSeven postcards are framed in seven frames on the wall. The first six are photographs of landscapes, and you see that each landscape is unique between them. You see a hillside, a field, a harbor, a bar empty save for a belly dancer, an abandoned interior and an on-location movie shoot. You are certain that though there are other figures and objects present in the photos the protagonist in each is a congregation of many cowboy boots in the landscape, and you estimate at least 30 boots are shown in each. The boots are standing upright, as if worn by an invisible cowboy, and in lines or rows or other groupings. \n\nThe final postcard is a photgraph of a woman sitting in a chair with one leg crossing the other, her hand against her chin in thought. Next to her on a small table you see she has some implements you can't make out. And below her photo a block of text on a white background reads:\n\n'...Not that the work of the modern artist must by any means resemble the past, but he must show some sense of it, a realization of its presence and attraction. Otherwise he dissipates himself in sheer quality and fails to impose that order and shaping which are indispensable concomitants of high art, and without which the truly cultivated spectator is left thirsty. High art resumes everything that precedes it, otherwise it is less than high.' \nClement Greenberg \n(Partisan Review, July, 1948)\n\nPress ENTER to continue...",
    actions: {
      "default": "backCenter",
    },
  },

  idaApplebroog: {
    name: "Ida Applebroog - 'I MEAN IT', 'YOU'LL SEE', and 'SAY SOMETHING'",
    description: "Ida Applebroog - 'I MEAN IT', 'YOU'LL SEE', and 'SAY SOMETHING'\n\nThree staple-bound books are displayed on a shelf. Of each book are displayed two copies from its edition, one closed to show the cover and one open to show a spread of pages. On each book cover you see a title in bold capital letters, followed by the words 'A PERFORMANCE', and finally, 'IDA APPLEBROOG'. You wonder if these are performance scores or performance documentation.\n\nThe first book has a blue cover and the title you read:\n\nI MEAN \nIT \n\nThe open spread has two drawings in a kind of cartoon style, one on each page of the spread, and to you the two appear identical. They are printed in only blue ink and depict a wide frame around two men. The men are shaking hands, one man turned out slightly more toward their audience. They cast dramatic shadows on the background. \n\nThe second book has a maroon cover and the title reads:\n\nYOU'LL \nSEE \n\nThe open spread again shows you two drawings in the same cartoon style. Again there is one per page of the spread, and this time you are certain they are identical. They are printed in only maroon ink and now show you a stage, curtains drawn. Onstage you see a holding in a casual business attire. He is holding his jacket open with his right hand. You think he's either putting his jacket on, or he could be taking it off... Below him, across the horizon of the stage, lays a woman in bed. You imagine the man is leaving her early in the morning, or perhaps arriving late at night. \n\nThe third book has a black cover and the title you read: \n\nSAY \nSOME-\nTHING \n\nThe spread follows all the same formal characteristics as the prior 2 books, but this time is printed in black ink (of course). Again we see a stage with curtains drawn. Onstage you see a figure in mourning, draped in long cloth, and another figure embracing the first. Upstage and above them, apparently in flight, an angel: a figure in a tunic with large wings hung behind. \n\nYou decide these are neither scores nor documentation, but they, as books, are performances. You imagine taking the book in your hands and turning through its moments.\n\nPress ENTER to continue...",
    actions: {
      "default": "backCenter",
    },
  },

/*******************************************/

  backNorth: {
    name: "Back space North",
    description: "You are at the north end of the back space; the northwest corner of the gallery. On the north wall is a large PAINTING by Despina Stokou, and to the right of that a computer PRINT by Lee Mullican. On the wall to the right is a VIDEO by Miranda July and a pastel DRAWING by Ed Ruscha. \n\nTo the SOUTH is more of the back space and the gallery.",
    actions: {
      "painting": "despinaStokou",
      "print": "leeMullican",
      "video": "mirandaJuly",
      "drawing": "edRuscha",
      "south": "backCenter",
    },
  },

  despinaStokou: {
    name: "Despina Stokou - 'Recently Used #8892'",
    description: "Despina Stokou - 'Recently Used #8892'\n\nA large stretched canvas is on the wall, and you feel its maybe the size of your body with your arms and legs stretched out. Drawn with a thick pencil or maybe charcoal over the entire surface of the canvas are lines of emoji characters, about 15 lines in total, 10 emojis per line. You recognize this emoji character set specifically from apple devices. About half of the hand-drawn emojis have been filled in with color paint, the rest are left as pencil outlines. You start by viewing the composition as a single whole, bluring your eyes. Then you catch yourself and remember that each discrete emoji character indicates some single meaning in its given context. \n\nBeginning at the top left, you read the lines of emojis like a story, thinking that this maybe function like lines of text. The emojis are like hieroglyphs, their vague individual meanings resting on the context of their neighbors like a house of cards, a precarious architecture of imprecise signification. But reading this emoji story left to right and top to bottom yields little save for the experience of grasping for connections and drawing conclusions. You try instead to read the story in another direction, first from top to bottom and left to right, and then from right to left and top to bottom, and so on. Each direction tells you a new story but with no more coherence than the others. You think the problem is of scale. If this is a story, then each character in the script might be an object or a memory, a feeling or an encounter and nothing in these heiroglyphs tell you which is which.\n\nPress ENTER to continue...",
    actions: {
      "default": "backNorth",
    },
  },

  leeMullican: {
    name: "Lee Mullican - Digital print",
    description: "Lee Mullican - Digital print \n\nA digital print by Lee Mullican is framed in white on the wall in front of you. 'I didn't know he made digital prints', you think. The colors are wonderfully rich and the forms are diverse and evocative and move in painterly stripes. The geometry gives you a sense of space that you can't trace. You think of roads and cities and lights and Matt Mullican. \n\nPress ENTER to continue...",
    actions: {
      "default": "backNorth",
    },
  },

  mirandaJuly: {
    name: "Miranda July - 'Somebody'",
    description: "Miranda July - 'Somebody' \n\nYou arrive at a monitor on the wall. You see two girls wearing the same thing arguing about something. An elderly woman walks up and tells them, 'Blanca, it's me yolanda. I dont want to be in no fight with you flaca, you my homegirl. This is stupid. Come on bruja look at me'. \n\nThey are relieved and embrace, but suddenly become upset with the woman as she toddles away. They tell her they will rate her super low. You are amused. \n\nPress ENTER to continue...",
    actions: {
      "default": "backNorth",
    },
  },

  edRuscha: {
    name: "Ed Ruscha - 'Waves of Advancing Technology'",
    description: "Ed Ruscha - 'Waves of Advancing Technology' \n\nFramed in wood on the wall in front of you is a drawing. It depicts three lines of white block text advancing or receding through an indigo haze. You read the words: \n\nWAVES OF \nADVANCING \n TECHNOLOGY \n\nAnd you sense the tinge of significance. You think of some dark sky high above the ground on a clear night in Los Angeles and an ominous prophecy floating through a thin smog unnoticed by the humans busy actualizing it below. You think of the technology of Ruscha's mark as it filled the picture plane with this thin blue field. You think of the question of advancement in the technology of art production and the risk of adopting new methods. \n\nPress ENTER to continue...",
    actions: {
      "default": "backNorth",
    },
  },

};
