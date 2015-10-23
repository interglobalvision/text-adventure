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
          ------------------           ` Table `       |
         |                  |          `  [4]  `       |
         | Salomeh's office |   [2]    `````````   [5] |
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

##[2] Main space - Southeast


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

You remember that Versteeg has an algorithm for generating these paintings. You think of all the different possible iterations and you realize the difficulty with infinity is that it can't be satisfied.

*go to [2]* 

---

##[3] Main space - East


You are on the eastern side of a big white room with bright white lights suspended from the ceiling. This is the gallery. From here you can move around the space. To the SOUTH, there is a painting on the wall, and the door to an office. To the WEST, in the center of the room, there is a square table with laptops. To the NORTH there is a video playing and a triptych of works on paper. 

`> SOUTH`

*go to [2]*

`> WEST`

*go to [4]*

`> NORTH`

*go to [5]*


---

##[4] Main space - Table


table

---

##[5] Main space - Northeast


You are in the northeast corner of the gallery. You feel calm. To your right on the wall is a VIDEO by [artists name]. To your left a TRIPTYCH by [artists name]. To the WEST you see a painting and a work on paper. To the SOUTHWEST, in the center of the room, is a table with laptops. To the SOUTH you see more of the gallery, and the exit.

`> VIDEO`

*go to [5a]*

`> TRIPTYCH`

*go to [5b]*

`> WEST`

*go to [9]*

`> SOUTHWEST`

*go to [4]*

`> SOUTH`

*go to [3]*

---

###[5a]


---

####[5b]


---

