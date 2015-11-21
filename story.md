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

Welcome to the Treachery of Images text adventure.

Is this your first time playing?

(type YES or NO and then press ENTER)

`> YES or Y`

*go to [0a]*

`> NO or N`

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


You are in the corner of the southeast corner of the gallery. You see on the wall a PAINTING by Siebren Versteeg. In the corner, a VIDEO by John Baldessari. To the right of that is the DOOR to Salomeh's office. To the WEST you see another office. To the NORTH you see more of the gallery, and the exit.

`> PAINTING`

*go to [2a]*

`> VIDEO`

*go to [2b]*

`> DOOR`

*go to [1]*

`> WEST`

*go to [7]*

`> NORTH`

*go to [3]*

___

###[2a] Siebren Versteeg - 'ANChORESs'


The painting on the wall is quite large - taller and wider than you, you think.  You can see that this painting is really a print on canvas. The telltale brush strokes of a digital brush.  And you see collaged in the digital paint images of text and texture. 

You think of fantasy and dragons but you don't know why. Maybe its the fonts used in the collaged text, you think. One reminds you of Game of Thrones and the other of Medieval Times. 

You remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you remember that infinity, like desire, is insatiable.

*go to [2]* 

---

###[2b] John Baldessari - 'Teaching a Plant the Alphabet'


A video monitor is on a white pedestal about the height of your waist. Onscreen you see a black-and-white film is playing. Pictured in the frame in the foreground is a small potted house plant is set on a stool. You recognize this stool from CalArts. Just behind the plant you see Baldessari's hand enter and leave the frame, each time holding a letter-size card with a letter from the English alphabet. He's going through the alphabet in sequence and each time saying the name of the letter 10 or 15 times, and taking a brief pause between each letter.  'It's a futile excersize, teaching the alphabet to a houseplant', you think. You wonder if the transmission of ideas between discrete objects, be they persons or plants, is any use at all. You sense Baldessari had some playful frustration with effectiveness of language.

*go to [2]* 

---

##[3] Front space - East


You are on the eastern side of a big white room with bright white lights suspended from the ceiling. This is the gallery. From here you can move around the space. To the SOUTH, there is a painting on the wall, and the door to an office. To the WEST, in the center of the room, there is a table with screens. To the NORTH there is a video playing and a large photograph. 

`> SOUTH`

*go to [2]*

`> WEST`

*go to [4]*

`> NORTH`

*go to [5]*


---

##[4] Front space - Center


You stand at a table. It has a 1/4 inch Sandeply tabletop and 3 chairs around it.  There are two tablets at either head of the table. One tablet is showing VIDEOS and the other has a list of WEBSITES. Standing on the center of the table is a COMPUTER with a font set by Paul Chan. 

To the WEST are two framed works. To the NORTHWEST, a video projection and a triptych. To the NORTHEAST corner a photographic print and a video. In the EAST is the exit, the SOUTHEAST a painting and an office. To the SOUTHWEST is another office and the way to the back space of the gallery.

`> VIDEOS`

*go to [4a]*

`> WEBSITES`

*go to [4b]*

`> COMPUTER`

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


You pull out the chair and sit at a tablet at one end of the table. You see on screen a website. It's wegmanworld.com, William Wegman's official webpage. You notice the website's design is drawn from the illustrations in his recent children's books. You think of his transition from his early video and photographic works addressing his own body, to the work addressing his dogs' bodies. You open a video on the website. Its called 'Dog Duet'. You watch as two Weimaraners stand side-by-side simultaneously tracing with their eyes and heads the movement of some point traveling in space behind the camera. You consider choreography and the ways society and architecture influence the movement and posturing of bodies.

---

###[4c] Paul Chan - 'Sade for Fonts Sake'


You sit down and on the table in front of you are a black computer keyboard and a black computer mouse and a modestly sized black computer monitor. Open onscreen is a blank Microsoft Word document titled: 'OPEN FOR PAUL CHAN PIECE'. A sheet of paper on the table to the left of the keyboard tells you that installed on this computer are fonts designed by Chan that transform any text into Sadean erotics. The selected font is 'Oh Juliette'. You type, 'Walking a mile in someone else's shoes', but the font causes the words to spell out something else:

you sissy fuck me please christ oh god don't stop, keep going fuck me
so wet oh god please yes oh god don't stop,
harder more so wet yes more don't stop, yes yes please harder yes harder
harder yes yes more yes harder

You feel warm. You look over to your left and then back at the screen. You stand up from your chair and push it in.

---

##[5] Front space - Northeast


You are in the northeast corner of the gallery. You feel calm. To your right on the wall is a VIDEO by Kutlug Ataman. To your left a POLAROID by Eve Sonneman. To the WEST you see a painting and a work on paper. To the SOUTHWEST, in the center of the room, is a table with laptops. To the SOUTH you see the front of the gallery.

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

###[5a] Kutlug Ataman - 'Animated Words - Nothing'


You see a gently undgulating flower of white calligraphy in [TITLE], a video by [ARTIST]. You think that it isn't a flower at all but two identical forms of 8-point symmetry perfectly overlapped and turning in opposite directions on a black background. The turning creates a sensation for you both seductive and repulsive. Each time the two forms align you feel a tightness in your chest. You continue to watch the hypnotic spinning forms and see that they are indeed calligraphy of Arabic or Islamic origin. You think that even if you could read the characters you wouldn't be able to decipher the text with them spiraling like this.

*go to [5]*

---

###[5b] Eve Sonneman - 'Discus Thrower'


Hung before you is a photographic print, 'about the size of a baby crib', you think. The photograph depicts two silhouettes of the same human form, side-by-side, the right one half the size of the left. You recognize the silhouettes are of the discus thrower; the greek athlete posed at the peak of potential energy. Both silhouettes are lit by colored spotlights, circles of color defining the silhouettes form on the black background. One light is a powder green and the other is yellow and blue concentrically. To you they look like planets.

You check the title sheet for the material of the piece: Polaroid Sonnegram, and you recognize 'sonne' as the German for 'sun'. You wonder about the large format polaroid camera that made this print.

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

##[8] Front space - West


You are standing at the western wall of the front space. You feel small. On the wall are two two-part FAX drawings by David Hockney. To the EAST there is a square table with laptops. To the NORTH is a video projection. To the SOUTH is an office and more of the gallery.

`> FAX`

*go to [8a]*

`> EAST`

*go to [4]*

`> NORTH`

*go to [8]*

`> SOUTH`

*go to [7]*


---

###[8a] David Hockney - 'Views of the Sea' and 'Geometric Waves'


Two frames are on the wall in front of you side-by-side, each supporting two works on paper, one above the other. The top work of each frame is a moody blue-grey drawing on watercolor paper. The drawings are done in variety of materials: ink, guache, crayon and paint, and with an even greater variety of mark-making. 

The frame on the left is 'Views of the Sea' and indeed depicts something of an ocean scenario. 'Maybe a beach', you think, as you notice in the bottom-right corner of the picture something that resembles a palm tree. The frame on the right is 'Geometric Waves' and indeed depict something of a cubist sea storm. The waves jut out of patterned seas as dramatic cones.

Below the drawings in each frame is a fascimile of the drawing above it of the same dimensions (letter). They are black-and-white doubles of the drawings above them. You feel that in the reproduction some emotion has been lost; they feel dead to you. On the left edge of each facsimile is printed computer text reading perpendicular to the picture plane (the top of the letter-size copy paper). You read the text from the facsimile of 'Views of the Sea':

APR 27 '95 16:57 D H STUDIO

You read the text from the facsimile of 'Geometric Waves':

APR 27 '95 17:09 D H STUDIO

'Twelve minues later,' you think, and you can tell this text is the mark of a recieved telefax. You notice more than the loss of color in the facsimile, you notice a compression in the image. You wonder what is gained through loss and about the term 'digital artifact'. You think of an ocean of data and of weather systems.

---

##[9] Front space - Northwest


You are in the northwest corner of the front space. You feel like you are moving although you are not. In the corner is a video PROJECTION by Brice Bischoff. On the wall is a TRIPTYCH by Dennis Oppenheim. To the SOUTHEAST there is a square table with laptops. To the SOUTH are two works by David Hockney. To the EAST is a photograph and a video. 

`> PROJECTION`

*go to [9a]*

`> TRIPTYCH`

*go to [9a]*

`> SOUTHEAST`

*go to [4]*

`> SOUTH`

*go to [8]*

`> EAST`

*go to [5]*


---

###[9a] Brice Bischoff - Night Drive


There is a large black steel frame on some wide stucco pedestal in the corner of the room. Streched within the frame is a kind of plastic screen or scrim with a few thin blue and yellow colored strokes gesturing across it. 'They're like spray paint," you think, or some remainder of a photographic process. 

On the floor by your feet, more toward the center of the room, is a small white pedestal with a projector pointed toward the screen.  The projector is throwing a parade of greyscale images onto the screen in front of you. The images meander from left to right at different speeds and depths. The images are photographs from the street. You think how they are so reminiscent of the streets of Los Angeles, but that many streets in many cities could yield images like these. The way the projected images play with the colored strokes is very friendly as they crest and intersect.

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


You are at the south end of the back space; the southwest corner of the gallery. You feel brave. On the wall to the south are a framed PRINTOUT by Barbara Smith, a Seth Price TEXT hanging from a chain, a PRINT by Chris Burden. Next to those there is a small Barbara Kruger LITHOGRAPH hung above an INKSTAMP by Ed Keinholz. Then to the right is a PAINTING by Tyler Matthew Oyer, and finally a DRAWING by Guy de Cointet. To NORTH is the back space of the gallery, and to the EAST is the front space.

`> PRINTOUT`

*go to [11a]*

`> TEXT`

*go to [11b]*

`> PRINT`

*go to [11c]*

`> LITHOGRAPH`

*go to [11d]*

`> INKSTAMP`

*go to [11e]*

`> PAINTING`

*go to [11f]*

`> DRAWING`

*go to [11g]*

`> NORTH`

*go to [12]*

`> EAST`

*go to [7]*



---

###[11a] Barbara Smith - mailer for Field Piece


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

###[11d] Barbara Kruger - You're Right


The thin lithograph framed before you by a thin pane of glass is wider than it is tall. It has three simple elements. The first, and most prominent by size, is a black halftone of two human eyes gazing off to your left, disregarding you. The second, and most prominent by color, is a hot pink rectangle censoring the bridge of the gazer's nose with white text reading:

YOU'RE
RIGHT

And third, locked below the hot pink strip is a green block with white text reading:

AND YOU
KNOW IT
AND SO 
SHOULD
EVERYONE
ELSE

You think of the distribution of the artist's thoughts and the egoism and almost divinity implied therein. You suppose that any speech act is a mechanism to manifest the body of the speaker in some supreme manner superior to the arguably questionable physical presence of that body. You think this is pessimistic and you leave it at that.

---

###[11e] Ed Kienholz - For a Mitre Saw


On the wall you see a thin steel frame weathered and framing a work on watercolor paper. The work is about the width of your shoulders when you were a child.  There is a pale yellow wash striping the white plane of paper like a horizon.  And on that, in a black handmade type of some antique style, you read:

For A MITRE SAW

'Like a price tag', you think and you wonder about the commerce of artworks. You wonder how to draw an equivilancy between a mitre saw and this drawing before you.

*go to [11]*

---

###[11f] Tyler Matthew Oyer - Marquee #68


There on the wall in front of you is a painted canvas stretched on a frame. You think its about the size of a young boy. The picture plane shows you three graphic layers: a pitch black background, then a silhouette of a giant golden hand, then 5 lines of large white uppercase text. The golden hand is graphic yet ornate. It begins at the top from its wrist, haloed by a frilly golden sleeve. The golden wrist continues down the picture to the golden hand. The golden hand leads to golden fingers. The tip of each golden finger terminates in a golden flower, and each of the flowers appear to be of a unique variety. You think that each finger bestows a unique character on the field. On top of the golden hand is the white text which reads:

M I N D R
E B O R N
B Y S K Y
T H A T I
S T O R N

And it takes you a moment to decifer but then recognize it reads as, "MIND REBORN BY SKY THAT IS TORN". To you this reads like a line from a poem or a song. But then you remember the magic golden fingers of the golden hand and think the text is also like a spell. 

*go to [11]*

---

###[11g] Guy de Cointet - Lady and Two Popes


You're standing in front of a framed print of very thin lines on big white paper. The lines are a thicket of sharp angles and it appears to you that lines could be just one line crossing over itself many times at different angles. 'But of course not, there are many endings,' you think to yourself. 

The small, handwritten caption at the bottom reads 'A lady and two popes' and you think that sounds like the beginning of a joke. You see it's also signed on the bottom-right, 'Guy de Cointet'. The shape of the drawing looks to you like a block of text because of the way it finishes at the bottom like the last line of a paragraph. You remember those drawings of de Cointet that are like cryptographic poems and think, 'This must be one of them'. You think about cryptography in your daily life...barcodes...passwords. You think of Bitcoin and the Silk Road...Edward Snowden and Chelsea Manning.

*go to [11]*

---

##[12] Back space - Center


You are in the center of the back space; the north edge of the gallery. On the floor is a video of a GAME by Eddo Stern. There is a single framed LITHOGRAPH by Bruce Nauman on the wall. To the right of that, a variety of print ephemera: CHICKEN postcards by Suzanne Lacy, MIMEOGRAPH pieces by Kim Jones, BOOTS postcards by Eleanor Antin, and three BOOKS by Ida Applebroog.

`> GAME`

*go to [12a]*

`> LITHOGRAPH`

*go to [12b]*

`> CHICKEN`

*go to [12c]*

`> MIMEOGRAPH`

*go to [12d]*

`> BOOTS`

*go to [12e]*

`> BOOKS`

*go to [12f]*

---

###[12a] Eddo Stern - Vietnam Romance


You watch as side-scrolling scenes of richly colored watercolor landscapes fall from right to left across a large flat-screen monitor in the center of the floor you stand on. You crouch down momentarily to meet the screen at eye-level. The scenes before you switch between clouds and cities and war zones and deserts (some road in a rainy rural Vietnam, an airport in the Mojave desert, an airport cafe, a stormy night sky high in the clouds with airplanes struggling to stay in flight, a desert road with tanks trudging across). Occasionally text appears onscreen with video game prompts: "press any button to play", or dialogue floating above characters heads. You decide that this is in-game video from a video game, but the aesthetic of the watercolor graphics is unfamiliar. You watch as a tank travels up a hill annhiliating giant text characters with its mounted machine gun.

*go to [12]*

---

###[12b] Bruce Nauman - Raw War


You see a lithograph displaying the word 'WAR' in uppercase red letters.  You squint your eyes and see that behind 'WAR' is the word 'RAW', slightly fainter. Behind that 'WAR' again and then 'RAW' and it seems to repeat on as it disappears in the pitch black space. You wonder if the text is like a neon sign, and if the depth is a play with time. The oscillation between 'WAR' and 'RAW' brings to your mind some oscillating dichotomies in the work such as one between image and text...or another between stillness and motion.

*go to [12]*

---

###[12c] Suzanne Lacy - Anatomy Lesson no.1: Chickens, Coming Home to Roost, 1975-76


You see four postcards in four frames hung in two lines of two on the wall. Each postcard is a photograph depicting Lacy nude, facing the camera, at a kitchen table with a tray of cooked chicken parts.  You see that in each photograph she is eating a different piece of chicken. 

In the top two postcards she is eating the chicken's wings. In the first she has her head turned sharply to right, with her right elbow on the table as she feeds her mouth with her right hand, and her left arm stretched forward toward the table. Below her right arm is printed the word: 'wing', and below her left arm: 'arm'. You think that her right arm as it touches elbow to table and bends back up to feed herself does in its triangular posture resemble a wing. And you can see that her other arm as it is outstretched on the table in repose is more human in its posture.

In the third postcard she is eating the chicken's leg. She has her own leg up on the table in front of her and you take notice of its shoeless dirty foot. She leans toward her leg like a dancer as she gnaws into the chicken leg eyes closed and elbows up. In the caption below her you read: 'leg'.

In the final postcard she is eating the chicken's breast. In the other photographs her eyelids were closed in enjoyment, but here her eyes gaze through the camera, through the postcard, through time, and into your own. Both elbows are on the table as she feeds her self with both hands, her breasts framing the tray of chicken parts below them. The caption reads: 'breast'.

*go to [12]*

---

###[12d] Kim Jones - Mimeograph pieces, Early 80's


Four framed mimeographs are hung two-by-two on the wall. Each is about letter-size and each shows you a black-and-white photograph with an irregular white margin on the page. Captured in the photograph is Jones a man on a rooftop. He is nude aside from a costume of sticks and mud formed in some arrangement varying between each. You remember Jones did public appearances like this in Los Angeles as his alter-ego known as Mudman. 

Mudman takes power stances on the roof and you think there is some energy in the clumps of mud. You imagine meeting Mudman in the street in downtown Los Angeles and the speechless exchange of presence that you would pass together.

*go to [12]*

---

###[12d] Eleanor Antin - 100 Boots, 1971-73


Seven postcards are framed in seven frames on the wall. The first six are photographs of landscapes, and you see that each landscape is unique between them. You see a hillside, a field, a harbor, a bar empty save for a belly dancer, an abandoned interior and an on-location movie shoot. You are certain that though there are other figures and objects present in the photos the protagonist in each is a congregation of many cowboy boots in the landscape, and you estimate at least 30 boots are shown in each. The boots are standing upright, as if worn by an invisible cowboy, and in lines or rows or other groupings. 

The final postcard is a photgraph of a woman sitting in a chair with one leg crossing the other, her hand against her chin in thought. Next to her on a small table you see she has some implements you can't make out. And below her photo a block of text on a white background reads:

'...Not that the work of the modern artist must by any means 
resemble the past, but he must show some sense of it, a realization
of its presence and attraction. Otherwise he dissipates himself in
sheer quality and fails to impose that order and shaping which are
indispensable concomitants of high art, and without which the truly
cultivated spectator is left thirsty. High art resumes everything that
precedes it, otherwise it is less than high.'
Clement Greenberg
(Partisan Review, July, 1948)

*go to [12]*

---

###[12f] Ida Applebroog - I MEAN IT, YOU'LL SEE, and SAY SOMETHING, 1981


Three staple-bound books are displayed on a shelf. Of each book are displayed two copies from its edition, one closed to show the cover and one open to show a spread of pages. On each book cover you see a title in bold capital letters, followed by the words 'A PERFORMANCE', and finally, 'IDA APPLEBROOG'. You wonder if these are performance scores or performance documentation.

The first book has a blue cover and the title you read:

I MEAN
IT

The open spread has two drawings in a kind of cartoon style, one on each page of the spread, and to you the two appear identical. They are printed in only blue ink and depict a wide frame around two men. The men are shaking hands, one man turned out slightly more toward their audience. They cast dramatic shadows on the background.

The second book has a maroon cover and the title reads:

YOU'LL
SEE

The open spread again shows you two drawings in the same cartoon style. Again there is one per page of the spread, and this time you are certain they are identical. They are printed in only maroon ink and now show you a stage, curtains drawn. Onstage you see a holding in a casual business attire. He is holding his jacket open with his right hand. You think he's either putting his jacket on, or he could be taking it off... Below him, across the horizon of the stage, lays a woman in bed. You imagine the man is leaving her early in the morning, or perhaps arriving late at night.

The third book has a black cover and the title you read:

SAY
SOME-
THING

The spread follows all the same formal characteristics as the prior 2 books, but this time is printed in black ink (of course). Again we see a stage with curtains drawn. Onstage you see a figure in mourning, draped in long cloth, and another figure embracing the first. Upstage and above them, apparently in flight, an angel: a figure in a tunic with large wings hung behind.

You decide these are neither scores nor documentation, but they, as books, are performances. You imagine taking the book in your hands and turning through its moments.

*go to [12]*

---

##[13] Back space - North


You are at the north end of the back space; the northwest corner of the gallery. On the north wall is a large PAINTING by Despina Stokou, and to the right of that a computer PRINT by Lee Mullican. On the wall to the right is a VIDEO by Miranda July and a pastel DRAWING by Ed Ruscha.

`> PAINTING`

*go to [13a]*

`> PRINT`

*go to [13b]*

`> VIDEO`

*go to [13c]*

`> DRAWING`

*go to [13d]*

---

###[13a] Despina Stokou


A large stretched canvas is on the wall, and you feel its maybe the size of your body with your arms and legs stretched out. Drawn with a thick pencil or maybe charcoal over the entire surface of the canvas are lines of emoji characters, about 15 lines in total, 10 emojis per line. You recognize this emoji character set specifically from apple devices. About half of the hand-drawn emojis have been filled in with color paint, the rest are left as pencil outlines. You start by viewing the composition as a single whole, bluring your eyes. Then you catch yourself and remember that each discrete emoji character indicates some single meaning in its given context. 

Beginning at the top left, you read the lines of emojis like a story, thinking that this maybe function like lines of text. The emojis are like hieroglyphs, their vague individual meanings resting on the context of their neighbors like a house of cards, a precarious architecture of imprecise signification. But reading this emoji story left to right and top to bottom yields little save for the experience of grasping for connections and drawing conclusions. You try instead to read the story in another direction, first from top to bottom and left to right, and then from right to left and top to bottom, and so on. Each direction tells you a new story but with no more coherence than the others. You think the problem is of scale. If this is a story, then each character in the script might be an object or a memory, a feeling or an encounter and nothing in these heiroglyphs tell you which is which.

*go to [13]*

---

###[13b] Lee Mullican


A digital print by Lee Mullican is framed in white on the wall in front of you. 'I didn't know he made digital prints', you think. The colors are wonderfully rich and the forms are diverse and evocative and move in painterly stripes. The geometry gives you a sense of space that you can't trace. You think of roads and cities and lights and Matt Mullican. 

*go to [13]*

---

###[13c] Miranda July


//

*go to [13]*

---

###[13d] Ed Ruscha - Waves of Advancing Technology


Framed in wood on the wall in front of you is a drawing. It depicts three lines of white block text advancing or receding through an indigo haze. You read the words:

WAVES OF
ADVANCING
TECHNOLOGY

And you sense the tinge of significance. You think of some dark sky high above the ground on a clear night in Los Angeles and an ominous prophecy floating through a thin smog unnoticed by the humans busy actualizing it below. You think of the technology of Ruscha's mark as it filled the picture plane with this thin blue field. You think of the question of advancement in the technology of art production and the risk of adopting new methods.

*go to [13]*

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

