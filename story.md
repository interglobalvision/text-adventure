#Text Adventure

---
##MAP

```
                              WEST

          ---------------------------------------------
         |                                             |
         |                                             |
         |                                             |
         |      [19]                       [20]        |
         |                  Workshop                   |
         |                                             |
         |                                             |
         |                                             |
         |        [17]              \\\\\\\\\\\\\\\\\\ |
         |                          \\\\\\\\\\\\\\\\\\ |
         |                          \\\\\Archives\\\\\ | 
         |                          \\\\\\\[18]\\\\\\\ |
 SOUTH   |      Kitchen             \\\\\\\\\\\\\\\\\\ |    NORTH
         |        [14]                                 |
         |                      [15]       [16]        |  
          ------------------ --------------------------
         |                  |                          |
         |     Darkroom     |   [11]     [12]     [13] |
         |       [10]       |                          |
          ------------------         ------------------
         |                  |             [8]          |
         |   Jean's office  |   [7]                [9] |
         |        [6]       |          `````````       |
          ------------------           `  [4]  `       |
         |                  |          `````````       |
         | Salomeh's office |   [2]                [5] |
         |        [1]       |             [3]          |
          ------------------ --------------/----------- 

                            Outside
 

                             EAST
```

---

##HELP


You can move around and interact with this world by typing commands when prompted with '>', and then pressing RETURN or ENTER.

When you enter a new position on the map a description of that position is read to you. The available commands for that position will be in upper case letters. 

Directional commands like EAST or SOUTHEAST will move you to a new position. Object commands like PAINTING or VIDEO will tell you about an object in the world.

...

Sometimes a person will start a conversation with you.  When it is time to speak back you will be given a list of responses like:
```
> "Yes"
  "No"
```
You can choose a response with the UP and DOWN arrow keys, and press RETURN or ENTER to select it.

...

Also there are commands you can use at any time to help you on your way:

Type LIST to see a list of possible commands from your current position.

Type MAP to see the world map.

Type RESTART to return to the beginning of the world.

Type HELP to see this information again.

...

You current position is [current position].

*repeats last text*

---

##[0] Welcome


```
::::::,,::,:::,:,:,,,,,,,,,,,:,,::,:,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,
::::::::::::::::::,:,::::,:::,::,,,,::::,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,
::::::::::,,,:,:,::,,:,,,,:,,,,,:,::::,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
::::::::,::,,::,,:,:::,::,::::,,,,:::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:::,,::,,,:+?IIII777II+,:,:::,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:::,:,:I+==?Z8DD8OOOI???78:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:I8DD8D8DDDO8D,,,,,
:::,,::O$?==7$OO8D888NNNND,:,,,,,,,,,,,,,,,,,,,,,,,,,,+DD88Z77I?IIII77ZZO88D,,,,
::::::~O7+~=7$OOO88DDNNNNN,,,,,,,,,,,,,,,,,,,,,,,,.NDZ+~~+7ODDNNNNNN$=:::8D,,,,,
::::::$O$===7ZOOO88DDDMMNNI,,,,,,,,,,,,,,,,,,,,,D8$=:~78NNMNNNO:,,,,,,,,,,,,,,,,
:,,:::OO$=~=7ZOO8888DNMMNNO,,,,,,,,,,,,,,,,,,$8Z=::7DNNNNDO:,,,,,,,,,,,,,,,,,,,,
::::::OO$~~=7ZOO888DDNNNMNO,,,,,,,,,,,,,,,,ZZ~:=:ZDNNNNN:,,,,,,,,,,,,,,,,,,,,,,,
,,,:::OO$=~=7ZO8888DDNNNNNO,,,,,,,,,,,,,,OZ?+=+IONNNNN?,,,,,,,,,,,,,,,,,,,,,,,,,
,,,:::OO7=~=7ZO88D88NNMMMNZ,,,,,,,,,,,,Z$?+=+ZZ8ODMND:,,,,,,,,,,,,,,,,,,,,,,,,,,
::,::,OO7=~+IZO8888DNMMMMNZ,,,,,,,,,,OZI?=+7ZODNDDO,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:::,:,$O$+==7ZO888DDNNMNNN7,,,,,,,:OZ7?+=IZO8NNNDO,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:,:::,~8ZI=+7ZO8888DNMMNNN7,,,,:OZ7?+=+IZO8NNNN8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,:,,:,:OZ7?+7ZO888DDMMMMNMN8OO$$I?+=+IZOONNNDD8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
::,:,,:OO$I?7ZO888DNMNMMNNDZ7I??+=?7ZO8NNNNN8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,:,,::OZ$77ZO88DDNMNMMNN8$III7$OO8DNNNNNDO,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:,,:,,,,O8OOZOO88DNNMMMNNNND8O8DDNNMMNNND8.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,:,,,:OOO8OO8DMMMMMMMNNNNNNNMNMNNNND8,,,,,,,,,,,,,,,,,,,,,,..,,,,,,,,,,,,,,,,
:,,,:,,,,,ODDDDNNMMMMMMMNMNNNMMMMNNND8,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,
,:,:::,,:,,7DNNNNNMMMMNNNMNNNNNNNN8~,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,
,,,,,,:,,,,,,?DDNNNNNNMMMNNNNNNDI,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:,,:,,,,,,,,,,,:,:,78888OZ::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:,:,,,,,,,,,,,,,,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
:::,::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
::::::,:,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
::,::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
::::::,,,,,,,$,,,:,:,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,,,,,,,,,,,,,,,
:,::::,,,,:8:,,D:8:=,:,:OD:,:D8:,,:,,Z,,$,,,D,,,,8,D?:8I,,,,7.,D,8,,8,,,,,,,,,,,
:,,,:,::,::O,:O:D:,,,,,,D,,,D,,+7I,,,,7O,D,:D,,8$,:,$8,$,,8,8,=Z,8=Z8:7,,,,,,,,,
::,,:::,,,,:,,::,:,:,,,,,:,:,,:,,,,,8,,:,,,,,,,,,,,,,,,,,D,,,,+:,,,,,,,,,,,,,,,,
::::::::::::::::,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,,,
:::::::::,::,::::::,,:,:,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,,,,,:::::,
~::::,:,,,:,:,,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,,,::,:,,::?:::
```

Nov 21 2015 thru Jan 30 2016

Welcome to the Treachery of Images text adventure.  *possible title?*

Is this your first time playing?

(type YES or NO and then press ENTER)

`> YES or Y`

*go to [0a]*

`> NO or N`

*go to [0b]*

---

###[0a] Tutorial


*explains how to play. that commands are in BOLD. HELP, MAP, LIST, RESTART, etc*

*go to [0b]*

---

###[0b] Outside


You're standing in front of a long brown building on Santa Fe Ave, a warehouse in downtown Los Angeles. Above your head and to your left you see the number 2011. There is a glass door in front of you, and big windows on either side. In the window to your right written in black is the word "Cirrus" in all caps. You can ENTER through the glass door or LEAVE.

`> LEAVE`

Goodbye. 

*redirect?*

`> ENTER`

*go to [0c]*

---

###[0c] Guestbook


*this is only read the first time the ENTER command is called from outside*

You walk in through the glass door. On your left there is a small table with a guestbook. You take a title sheet and then write your name in the guestbook...

`> [Players name]`

*go to [3]*

---

##[1] Salomeh's office


You enter Salomeh's office. The sound of the printer has the air. Salomeh is at a big L-shaped desk, eyes on her computer screen. She is finishing an email and you aren't sure if she noticed you yet. 

With a smile she says "Just one moment." While you're waiting you notice a strange printout on her desk.

"Done. Hi [player's name]. It's nice to see you. Did you have questions about the show?"

*show list of responses. Player navigates list with up/down arrows and hits return to choose.*

`> "How long is it up for?"`

"The show is on from Nov 21 2015 through Jan 30 2016", she says.

*show list of responses*

`> "What's that printout on your desk?"`

"Jean's messing around with some emojis for clouds...I was like, 'Just do your own!'"

You see that the black-and-white printout is a pixelated image of an ideal cloud.

*show list of responses*

`> "Not really..."`

She says, "OK well let me know if you do."

You turn around and leave the office

*go to [2]*

---

##[2] Front space - Southeast


You are in the corner of the southeast corner of the gallery. You see on the wall a PAINTING by Siebren Versteeg.  To the right of that is the DOOR to Salomeh's office. To the WEST you see another office. To the NORTH you see more of the gallery, and the exit.

`> PAINTING`

*go to [2a]*

`> DOOR`

*go to [1]*

`> WEST`

*go to [7]*

`> NORTH`

*go to [3]*

___

###[2a] Siebren Versteeg - ANChORESs


You read on the title sheet that the painting on the wall by Siebren Versteeg is called "ANChORESs".  It's quite large - taller and wider than you, you think.  You can see that this painting is really a print on canvas. The telltale brush strokes of a digital brush.  And you see collaged in the digital paint images of text and texture. 

You think of fantasy and dragons but you don't know why. Maybe its the fonts used in the collaged text, you think. One reminds you of Game of Thrones and the other of Medieval Times. 

You remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you remember that infinity, like desire, is insatiable.

*go to [2]* 

---

##[3] Front space - East


You are on the eastern side of a big white room with bright white lights suspended from the ceiling. This is the gallery. From here you can move around the space. To the SOUTH, there is a painting on the wall, and the door to an office. To the WEST, in the center of the room, there is a square table with laptops. To the NORTH there is a video playing and a triptych of works on paper. 

`> SOUTH`

*go to [2]*

`> WEST`

*go to [4]*

`> NORTH`

*go to [5]*


---

##[4] Front space - Center


You stand at a table. It has a 1/4 inch Sandeply tabletop and 3 chairs around it.  There are two tablets at either head of the table. One tablet is showing VIDEOS and the other has a list of WEBSITES. Standing on the center of the table is a large flat screen MONITOR with a program by Paul Chan. 

To the WEST are two framed works. To the NORTHWEST, a video projection and a triptych. To the NORTHEAST corner a photographic print and a video. In the EAST is the exit, the SOUTHEAST a painting and an office. To the SOUTHWEST is another office and the way to the back space of the gallery.

`> VIDEOS`

*go to [4a]*

`> WEBSITES`

*go to [4b]*

`> MONITOR`

*go to [4c]*

`> WEST`

*go to [8]*

`> NORTHWEST`

*go to [9]*

`> NORTHEAST`

*go to [5]*

`> EAST`

*go to [3]*

`> SOUTHEAST`

*go to [2]*

`> SOUTHWEST`

*go to [7]*

---

###[4a] Video tablet


You sit down at the tablet showing videos. You see it's a youtube playlist of videos related to the artists or works in the exhibition. The video playing is titled 'Bruce Nauman : performances1968-9'. The video is black and white. You put on the headphones and hear the ticking of a film camera. You watch as Nauman takes delicate steps around the perimeter of the larger square of two concentric squares marked on the floor of what you assume is his studio. His hips cock, forming a contrapposto balance with each step. You think of greek sculptors and geometors. You think he looks like a bird the way he moves. You consider the distance of the film and the distance of his journey around the square. You wonder if the physical film itself is also walking the perimeter of a square. You wonder if that physical film exists much at all given the other forms walking squares between here and there. Between the square room and the square table and the square tablet and the square youtube thumbnail.

---

###[4b] Website tablet


You pull out the chair and sit at a tablet at one end of the table. You see on screen a website. It's wegmanworld.com, William Wegman's official webpage. You notice the website's design is drawn from the illustrations in his recent children's books. You think of his transition from his early video and photographic works addressing his own body, to the work addressing his dogs' bodies. You open a video on the website. Its called 'Dog Duet'. You watch as two Weimaraners stand side-by-side simultaneously tracing with their eyes and heads the movement of some point traveling in space behind the camera. You consider coreography and the ways society and architecture influence the movement and posturing of bodies.

---

###[4c] Paul Chan


font 

---

##[5] Front space - Northeast


You are in the northeast corner of the gallery. You feel calm. To your right on the wall is a VIDEO by [artists name]. To your left a PHOTO by Eve Sonneman. To the WEST you see a painting and a work on paper. To the SOUTHWEST, in the center of the room, is a table with laptops. To the SOUTH you see more of the gallery, and the exit.

`> VIDEO`

*go to [5a]*

`> PHOTO`

*go to [5b]*

`> WEST`

*go to [9]*

`> SOUTHWEST`

*go to [4]*

`> SOUTH`

*go to [3]*

---

###[5a] Kutlug Ataman - Animated Words - Nothing


You see a gently undgulating flower of white calligraphy in [TITLE], a video by [ARTIST]. You think that it isn't a flower at all but two identical forms of 8-point symmetry perfectly overlapped and turning in opposite directions on a black background. The turning creates a sensation for you both seductive and repulsive. Each time the two forms align you feel a tightness in your chest. You continue to watch the hypnotic spinning forms and see that they are indeed calligraphy of Arabic or Islamic origin. You think that even if you could read the characters you wouldn't be able to decipher the text with them spiraling like this.

*go to [5]*

---

###[5b] Eve Sonneman - Discus Thrower


//

*go to [5]*

---

##[6] Jean's Office




---

##[7] Front space - South


You are in the south wall of the front space. You feel liminal. Further south is Jean's OFFICE. To the WEST is the back space of the gallery. To the NORTH is the west wall of the front space. To the EAST is Salomeh's office and the east end of the front space. NORTHEAST there is a square table with laptops.

`> OFFICE`

*go to [6]*

`> WEST`

*go to [11]*

`> NORTH`

*go to [8]*

`> EAST`

*go to [2]*

`> NORTHEAST`

*go to [4]*

---

##[8] Front space - West wall


You are standing at the western wall of the front space. You feel small. On the wall are two two-part WORKS by David Hockney. To the EAST there is a square table with laptops. 

`> WORKS`

*go to [8a]*

`> EAST`

*go to [4]*

`> NORTH`

*go to [8]*

`> EAST`

*go to [2]*

`> NORTHEAST`

*go to [4]*

---

###[8a] David Hockney - Geometric Waves and Views of the Sea


//

---

##[9] Front space - Northwest


You are in the northwest corner of the front space. You feel like you are moving although you are not. To the SOUTHEAST there is a square table with laptops. 

---

###[9a] video projection


//

*go to [9]*

---

###[9b] Dennis Oppenheim - Ghost Trip


You see on the wall a triptych of large paper works framed in plexiglass. The one on the left: a rather blue bird's eye photograph of terrain. On the second of the three panels you read black text on white: 

GHOST TRIP 1976. PROJECT PROPOSAL FOR:
WESTERN UNITED STATES.
DIMENSIONS: 400 FEET.
MATERIALS: PLOWED EARTH.

You think of the approximation of physical space in data...and the limitations of the documentation of art. The third panel of the triptych is a map and you wonder if it resembles at all the other two panels. You recall something from Borges, an introduction to a story maybe, that spoke something of a map so precise it became as large as the area it was meant to represent. You think you remember something from Baudrillard that mentioned that verse but you quickly give up on remembering.

*go to [9]*

---

##[10] Darkroom




---

##[11] Back space - South


You are at the south end of the back space; the southwest corner of the gallery. You feel brave. On the wall to the south are a framed PRINTOUT by Barbara Turner Smith, a Seth Price TEXT hanging from a chain, a SMALL PRINT by Chris Burden, a LARGE PRINT by Guy de Cointet, an INKSTAMP by Ed Keinholz, and a PRINT by Lee Mullican. To the WEST is the warehouse. To NORTH is the back space of the gallery, and to the EAST is the front space.

`> PRINTOUT`

*go to [11a]*

`> TEXT`

*go to [11b]*

`> SMALL PRINT`

*go to [11c]*

// Revise

`> LARGE PRINT`

*go to [11d]*

`> INKSTAMP`

*go to [11d]*

`> PRINT`

*go to [11e]*

`> WEST`

*go to [15]*

`> NORTH`

*go to [12]*

`> EAST`

*go to [7]*



---

###[11a] Barbara Turner Smith - mailer for Field Piece


Hung in a gold frame nearest the left end of the wall you approach what appears like a drawing of dots. The top and bottom edges of the paper are each lined with a single line of punched holes. You recognize that this is a dot matrix print on continuous form paper, an now far outdated technique of computer printout. The image on the paper is formed by evenly spaced dots of different widths and densities. You see at the upper half of the paper the dots form the image of a white cloud, the word 'CIRRUS' in its center. At the lower half of the paper you see the dots form the image of a hill, the words 'FIELD PIECE' spelled out across it in negative space. Both the cloud and the hill appear to you to be emanating some kind of atmosphere. "They're trying to merge", you think. In the bottom left corner of the hill, written perpendicular to the horizon of the dot landscape, in characters the same height and width of the dots in the matrix, are the details of an exhibition:

BARBARA TURNER SMITH

708 MANHATTAN PLACE
LOS ANGELES (NR MELROSE & WESTERN)

SEPT 9 THRU SEPT 27, 1971


HOURS: MON THRU SAT
10AM TO 4PM

RECEPTION:
THURS SEPT 9
8PM TO 10 PM

In the bottom righthand corner, in the same font as the exhibition details, you see the letters 'RR' and think, '...those must be initials.' You think of the term 'immaterial labor' and decide you don't quite know what that means.

*go to [11]*

---

###[11b] Seth Price - Dispersion


The definition of artistic activity occurs, first of all, in the field of distribution.
Marcel Broodthaers

dispersion for artworks.  a manifesto not set in stone.  he can change it.  free at the new museum.  the premise for that exhibition. new models

---

###[11c] Chris Burden - Untitled


An untitled print by Chris Burden shows you some handwriting and a photo of upturned palms.  You walk closer to inspect it. You read the blue handwriting quietly to yourself:

CHRIS —
TOOK BUS TO
WORK. CAN NOT
DO NAILS. COULDN'T
SLEEP.

Below the words, centered horizontally, you see the photo. You look closer and see that the palms are upturned to show a fresh wound in each. You think it reminds you of the wounds of Christ and remember a performance by Burden called 'Trans-Fixed' in which he was crucified on a VW Beetle.  You think on the roles that text and photography have played in his actions. You wonder who wrote the note and who drove the nails through his hands when the writer could not.

*go to [11]*

---

###[11d] eyes


//

---

###[11e] Ed Kienholz - For a Mitre Saw


On the wall you see a thin steel frame weathered and framing a work on watercolor paper. The work is about the width of your shoulders when you were a child.  There is a pale yellow wash striping the white plane of paper like a horizon.  And on that, in a black handmade type of some antique style, you read:

For A MITRE SAW

'Like a price tag', you think and you wonder about the commerce of artworks. You wonder how to draw an equivilancy between a mitre saw and this drawing before you.

*go to [11]*

---

###[11f] Tyler Matthew Oyer - [Title]


//

*go to [11]*

---

###[11g] Guy de Cointet - Lady and Two Popes


You're standing in front of a framed print of very thin lines on big white paper. The lines are a thicket of sharp angles and it appears to you that lines could be just one line crossing over itself many times at different angles. 'But of course not, there are many endings,' you think to yourself. 

The small, handwritten caption at the bottom reads 'A lady and two popes' and you think that sounds like the beginning of a joke. You see it's also signed on the bottom-right, 'Guy de Cointet'. The shape of the drawing looks to you like a block of text because of the way it finishes at the bottom like the last line of a paragraph. You remember those drawings of de Cointet that are like cryptographic poems and think, 'This must be one of them'. You think about cryptography in your daily life...barcodes...passwords. You think of Bitcoin and the Silk Road...Edward Snowden and Chelsea Manning.

*go to [11]*

---

##[12] Back space - Center


You are in the center back space; the north edge of the gallery. There is a single framed LITHOGRAPH by Bruce Nauman, and to the right of that, a variety of print EPHEMERA by Ida Applebroog.

`> LITHOGRAPH`

*go to [12a]*

`> EPHEMERA`

*go to [12b]*

---

###[12a] Bruce Nauman - Raw War


You see a lithograph of the word 'WAR' in uppercase red letters. This is one of Bruce Naumans early lithographs, 'Raw War'. You squint your eyes and see that behind 'WAR' is the word 'RAW', slightly fainter. Behind that 'WAR' again and then 'RAW' and it seems to repeat on as it disappears in the pitch black space. You wonder if the text is like a neon sign, and if the depth is a play with time. The oscillation between 'WAR' and 'RAW' brings to your mind some oscillating dichotomies in the work such as one between image and text...or another between stillness and motion.

*go to [12]*

---

###[12b] Ida Applebroog - Raw War


You see a lithograph of the word 'WAR' in uppercase red letters. This is one of Bruce Naumans early lithographs, 'Raw War'. You squint your eyes and see that behind 'WAR' is the word 'RAW', slightly fainter. Behind that 'WAR' again and then 'RAW' and it seems to repeat on as it disappears in the pitch black space. You wonder if the text is like a neon sign, and if the depth is a play with time. The oscillation between 'WAR' and 'RAW' brings to your mind some oscillating dichotomies in the work such as one between image and text...or another between stillness and motion.

*go to [12]*

---

##[13] Back space - North


You at the north end of the back space; the northwest corner of the gallery.

---

##[14] Kitchen



---

##[15] Warehouse door



---

##[16] Viewing table



---

##[17] Work tables



---

##[18] Archives



---

##[19] Workshop south



---

##[20] Workshop north



---

