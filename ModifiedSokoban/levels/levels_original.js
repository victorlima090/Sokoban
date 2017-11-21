// "Original"
var levels =
[["    #####",
  "    #   #",
  "    #$  #",
  "  ###  $##",
  "  #  $ $ #",
  "### # ## #   ######",
  "#   # ## #####  ..#",
  "# $  $          ..#",
  "##### ### #@##  ..#",
  "    #     #########",
  "    #######"],
 ["############",
  "#..  #     ###",
  "#..  # $  $  #",
  "#..  #$####  #",
  "#..    @ ##  #",
  "#..  # #  $ ##",
  "###### ##$ $ #",
  "  # $  $ $ $ #",
  "  #    #     #",
  "  ############"],
 ["        ########",
  "        #     @#",
  "        # $#$ ##",
  "        # $  $#",
  "        ##$ $ #",
  "######### $ # ###",
  "#....  ## $  $  #",
  "##...    $  $   #",
  "#....  ##########",
  "########"],
 ["           ########",
  "           #  ....#",
  "############  ....#",
  "#    #  $ $   ....#",
  "# $$$#$  $ #  ....#",
  "#  $     $ #  ....#",
  "# $$ #$ $ $########",
  "#  $ #     #",
  "## #########",
  "#    #    ##",
  "#     $   ##",
  "#  $$#$$  @#",
  "#    #    ##",
  "###########"],
 ["        #####",
  "        #   #####",
  "        # #$##  #",
  "        #     $ #",
  "######### ###   #",
  "#....  ## $  $###",
  "#....    $ $$ ##",
  "#....  ##$  $ @#",
  "#########  $  ##",
  "        # $ $  #",
  "        ### ## #",
  "          #    #",
  "          ######"],
 ["######  ###",
  "#..  # ##@##",
  "#..  ###   #",
  "#..     $$ #",
  "#..  # # $ #",
  "#..### # $ #",
  "#### $ #$  #",
  "   #  $# $ #",
  "   # $  $  #",
  "   #  ##   #",
  "   #########"],
 ["       #####",
  " #######   ##",
  "## # @## $$ #",
  "#    $      #",
  "#  $  ###   #",
  "### #####$###",
  "# $  ### ..#",
  "# $ $ $ ...#",
  "#    ###...#",
  "# $$ # #...#",
  "#  ### #####",
  "####"],
 ["  ####",
  "  #  ###########",
  "  #    $   $ $ #",
  "  # $# $ #  $  #",
  "  #  $ $  #    #",
  "### $# #  #### #",
  "#@#$ $ $  ##   #",
  "#    $ #$#   # #",
  "#   $    $ $ $ #",
  "#####  #########",
  "  #      #",
  "  #      #",
  "  #......#",
  "  #......#",
  "  #......#",
  "  ########"],
 ["          #######",
  "          #  ...#",
  "      #####  ...#",
  "      #      . .#",
  "      #  ##  ...#",
  "      ## ##  ...#",
  "     ### ########",
  "     # $$$ ##",
  " #####  $ $ #####",
  "##   #$ $   #   #",
  "#@ $  $    $  $ #",
  "###### $$ $ #####",
  "     #      #",
  "     ########"],
 [" ###  #############",
  "##@####       #   #",
  "# $$   $$  $ $ ...#",
  "#  $$$#    $  #...#",
  "# $   # $$ $$ #...#",
  "###   #  $    #...#",
  "#     # $ $ $ #...#",
  "#    ###### ###...#",
  "## #  #  $ $  #...#",
  "#  ## # $$ $ $##..#",
  "# ..# #  $      #.#",
  "# ..# # $$$ $$$ #.#",
  "##### #       # #.#",
  "    # ######### #.#",
  "    #           #.#",
  "    ###############"],
 ["          ####",
  "     #### #  #",
  "   ### @###$ #",
  "  ##      $  #",
  " ##  $ $$## ##",
  " #  #$##     #",
  " # # $ $$ # ###",
  " #   $ #  # $ #####",
  "####    #  $$ #   #",
  "#### ## $         #",
  "#.    ###  ########",
  "#.. ..# ####",
  "#...#.#",
  "#.....#",
  "#######"],
 ["################",
  "#              #",
  "# # ######     #",
  "# #  $ $ $ $#  #",
  "# #   $@$   ## ##",
  "# #  $ $ $###...#",
  "# #   $ $  ##...#",
  "# ###$$$ $ ##...#",
  "#     # ## ##...#",
  "#####   ## ##...#",
  "    #####     ###",
  "        #     #",
  "        #######"],
 ["   #########",
  "  ##   ##  #####",
  "###     #  #    ###",
  "#  $ #$ #  #  ... #",
  "# # $#@$## # #.#. #",
  "#  # #$  #    . . #",
  "# $    $ # # #.#. #",
  "#   ##  ##$ $ . . #",
  "# $ #   #  #$#.#. #",
  "## $  $   $  $... #",
  " #$ ######    ##  #",
  " #  #    ##########",
  " ####"],
 ["       #######",
  " #######     #",
  " #     # $@$ #",
  " #$$ #   #########",
  " # ###......##   #",
  " #   $......## # #",
  " # ###......     #",
  "##   #### ### #$##",
  "#  #$   #  $  # #",
  "#  $ $$$  # $## #",
  "#   $ $ ###$$ # #",
  "#####     $   # #",
  "    ### ###   # #",
  "      #     #   #",
  "      ########  #",
  "             ####"],
 ["   ########",
  "   #   #  #",
  "   #  $   #",
  " ### #$   ####",
  " #  $  ##$   #",
  " #  # @ $ # $#",
  " #  #      $ ####",
  " ## ####$##     #",
  " # $#.....# #   #",
  " #  $..**. $# ###",
  "##  #.....#   #",
  "#   ### #######",
  "# $$  #  #",
  "#  #     #",
  "######   #",
  "     #####"],
 ["#####",
  "#   ##",
  "#    #  ####",
  "# $  ####  #",
  "#  $$ $   $#",
  "###@ #$    ##",
  " #  ##  $ $ ##",
  " # $  ## ## .#",
  " #  #$##$  #.#",
  " ###   $..##.#",
  "  #    #.*...#",
  "  # $$ #.....#",
  "  #  #########",
  "  #  #",
  "  ####"],
 ["   ##########",
  "   #..  #   #",
  "   #..      #",
  "   #..  #  ####",
  "  #######  #  ##",
  "  #            #",
  "  #  #  ##  #  #",
  "#### ##  #### ##",
  "#  $  ##### #  #",
  "# # $  $  # $  #",
  "# @$  $   #   ##",
  "#### ## #######",
  "   #    #",
  "   ######"],
 ["     ###########",
  "     #  .  #   #",
  "     # #.    @ #",
  " ##### ##..# ####",
  "##  # ..###     ###",
  "# $ #...   $ #  $ #",
  "#    .. ##  ## ## #",
  "####$##$# $ #   # #",
  "  ## #    #$ $$ # #",
  "  #  $ # #  # $## #",
  "  #               #",
  "  #  ###########  #",
  "  ####         ####"],
 ["  ######",
  "  #   @####",
  "##### $   #",
  "#   ##    ####",
  "# $ #  ##    #",
  "# $ #  ##### #",
  "## $  $    # #",
  "## $ $ ### # #",
  "## #  $  # # #",
  "## # #$#   # #",
  "## ###   # # ######",
  "#  $  #### # #....#",
  "#    $    $   ..#.#",
  "####$  $# $   ....#",
  "#       #  ## ....#",
  "###################"],
 ["    ##########",
  "#####        ####",
  "#     #   $  #@ #",
  "# #######$####  ###",
  "# #    ## #  #$ ..#",
  "# # $     #  #  #.#",
  "# # $  #     #$ ..#",
  "# #  ### ##     #.#",
  "# ###  #  #  #$ ..#",
  "# #    #  ####  #.#",
  "# #$   $  $  #$ ..#",
  "#    $ # $ $ #  #.#",
  "#### $###    #$ ..#",
  "   #    $$ ###....#",
  "   #      ## ######",
  "   ########"],
 ["#########",
  "#       #",
  "#       ####",
  "## #### #  #",
  "## #@##    #",
  "# $$$ $  $$#",
  "#  # ## $  #",
  "#  # ##  $ ####",
  "####  $$$ $#  #",
  " #   ##   ....#",
  " # #   # #.. .#",
  " #   # # ##...#",
  " ##### $  #...#",
  "     ##   #####",
  "      #####"],
 ["######     ####",
  "#    #######  #####",
  "#   $#  #  $  #   #",
  "#  $  $  $ # $ $  #",
  "##$ $   # @# $    #",
  "#  $ ########### ##",
  "# #   #.......# $#",
  "# ##  # ......#  #",
  "# #   $........$ #",
  "# # $ #.... ..#  #",
  "#  $ $####$#### $#",
  "# $   ### $   $  ##",
  "# $     $ $  $    #",
  "## ###### $ ##### #",
  "#         #       #",
  "###################"],
 ["    #######",
  "    #  #  ####",
  "##### $#$ #  ##",
  "#.. #  #  #   #",
  "#.. # $#$ #  $####",
  "#.  #     #$  #  #",
  "#..   $#  # $    #",
  "#..@#  #$ #$  #  #",
  "#.. # $#     $#  #",
  "#.. #  #$$#$  #  ##",
  "#.. # $#  #  $#$  #",
  "#.. #  #  #   #   #",
  "##. ####  #####   #",
  " ####  ####   #####"],
 ["###############",
  "#..........  .####",
  "#..........$$.#  #",
  "###########$ #   ##",
  "#      $  $     $ #",
  "## ####   #  $ #  #",
  "#      #   ##  # ##",
  "#  $#  # ##  ### ##",
  "# $ #$###    ### ##",
  "###  $ #  #  ### ##",
  "###    $ ## #  # ##",
  " # $  #  $  $ $   #",
  " #  $  $#$$$  #   #",
  " #  #  $      #####",
  " # @##  #  #  #",
  " ##############"],
 ["####",
  "#  ##############",
  "#  #   ..#......#",
  "#  # # ##### ...#",
  "##$#    ........#",
  "#   ##$######  ####",
  "# $ #     ######@ #",
  "##$ # $   ######  #",
  "#  $ #$$$##       #",
  "#      #    #$#$###",
  "# #### #$$$$$    #",
  "# #    $     #   #",
  "# #   ##        ###",
  "# ######$###### $ #",
  "#        #    #   #",
  "##########    #####"],
 [" #######",
  " #  #  #####",
  "##  #  #...###",
  "#  $#  #...  #",
  "# $ #$$ ...  #",
  "#  $#  #... .#",
  "#   # $########",
  "##$       $ $ #",
  "##  #  $$ #   #",
  " ######  ##$$@#",
  "      #      ##",
  "      ########"],
 [" #################",
  " #...   #    #   ##",
  "##.....  $## # #$ #",
  "#......#  $  #    #",
  "#......#  #  # #  #",
  "######### $  $ $  #",
  "  #     #$##$ ##$##",
  " ##   $    # $    #",
  " #  ## ### #  ##$ #",
  " # $ $$     $  $  #",
  " # $    $##$ ######",
  " #######  @ ##",
  "       ######"],
 ["         #####",
  "     #####   #",
  "    ## $  $  ####",
  "##### $  $ $ ##.#",
  "#       $$  ##..#",
  "#  ###### ###.. #",
  "## #  #    #... #",
  "# $   #    #... #",
  "#@ #$ ## ####...#",
  "####  $ $$  ##..#",
  "   ##  $ $  $...#",
  "    # $$  $ #  .#",
  "    #   $ $  ####",
  "    ######   #",
  "         #####"],
 ["#####",
  "#   ##",
  "# $  #########",
  "## # #       ######",
  "## #   $#$#@  #   #",
  "#  #      $ #   $ #",
  "#  ### ######### ##",
  "#  ## ..*..... # ##",
  "## ## *.*..*.* # ##",
  "# $########## ##$ #",
  "#  $   $  $    $  #",
  "#  #   #   #   #  #",
  "###################"],
 ["       ###########",
  "       #   #     #",
  "#####  #     $ $ #",
  "#   ##### $## # ##",
  "# $ ##   # ## $  #",
  "# $  @$$ # ##$$$ #",
  "## ###   # ##    #",
  "## #   ### #####$#",
  "## #     $  #....#",
  "#  ### ## $ #....##",
  "# $   $ #   #..$. #",
  "#  ## $ #  ##.... #",
  "#####   ######...##",
  "    #####    #####"],
 ["  ####",
  "  #  #########",
  " ##  ##  #   #",
  " #  $# $@$   ####",
  " #$  $  # $ $#  ##",
  "##  $## #$ $     #",
  "#  #  # #   $$$  #",
  "# $    $  $## ####",
  "# $ $ #$#  #  #",
  "##  ###  ###$ #",
  " #  #....     #",
  " ####......####",
  "   #....####",
  "   #...##",
  "   #...#",
  "   #####"],
 ["      ####",
  "  #####  #",
  " ##     $#",
  "## $  ## ###",
  "#@$ $ # $  #",
  "#### ##   $#",
  " #....#$ $ #",
  " #....#   $#",
  " #....  $$ ##",
  " #... # $   #",
  " ######$ $  #",
  "      #   ###",
  "      #$ ###",
  "      #  #",
  "      ####"],
 [" ###########",
  " #     ##  #",
  " #   $   $ #",
  "#### ## $$ #",
  "#   $ #    #",
  "# $$$ # ####",
  "#   # # $ ##",
  "#  #  #  $ #",
  "# $# $#    #",
  "#   ..# ####",
  "####.. $ #@#",
  "#.....# $# #",
  "##....#  $ #",
  " ##..##    #",
  "  ##########"],
 [" #########",
  " #....   ##",
  " #.#.#  $ ##",
  "##....# # @##",
  "# ....#  #  ##",
  "#     #$ ##$ #",
  "## ###  $    #",
  " #$  $ $ $#  #",
  " # #  $ $ ## #",
  " #  ###  ##  #",
  " #    ## ## ##",
  " #  $ #  $  #",
  " ###$ $   ###",
  "   #  #####",
  "   ####"],
 ["############ ######",
  "#   #    # ###....#",
  "#   $$#   @  .....#",
  "#   # ###   # ....#",
  "## ## ###  #  ....#",
  " # $ $     # # ####",
  " #  $ $##  #      #",
  "#### #  #### # ## #",
  "#  # #$   ## #    #",
  "# $  $  # ## #   ##",
  "# # $ $    # #   #",
  "#  $ ## ## # #####",
  "# $$     $$  #",
  "## ## ### $  #",
  " #    # #    #",
  " ###### ######"],
 ["            #####",
  "#####  ######   #",
  "#   ####  $ $ $ #",
  "# $   ## ## ##  ##",
  "#   $ $     $  $ #",
  "### $  ## ##     ##",
  "  # ##### #####$$ #",
  " ##$##### @##     #",
  " # $  ###$### $  ##",
  " # $  #   ###  ###",
  " # $$ $ #   $$ #",
  " #     #   ##  #",
  " #######.. .###",
  "    #.........#",
  "    #.........#",
  "    ###########"],
 ["###########",
  "#......   #########",
  "#......   #  ##   #",
  "#..### $    $     #",
  "#... $ $ #   ##   #",
  "#...#$#####    #  #",
  "###    #   #$  #$ #",
  "  #  $$ $ $  $##  #",
  "  #  $   #$#$ ##$ #",
  "  ### ## #    ##  #",
  "   #  $ $ ## ######",
  "   #    $  $  #",
  "   ##   # #   #",
  "    #####@#####",
  "        ###"],
 ["      ####",
  "####### @#",
  "#     $  #",
  "#   $## $#",
  "##$#...# #",
  " # $...  #",
  " # #. .# ##",
  " #   # #$ #",
  " #$  $    #",
  " #  #######",
  " ####"],
 ["             ######",
  " #############....#",
  "##   ##     ##....#",
  "#  $$##  $ @##....#",
  "#      $$ $#  ....#",
  "#  $ ## $$ # # ...#",
  "#  $ ## $  #  ....#",
  "## ##### ### ##.###",
  "##   $  $ ##   .  #",
  "# $###  # ##### ###",
  "#   $   #       #",
  "#  $ #$ $ $###  #",
  "# $$$# $   # ####",
  "#    #  $$ #",
  "######   ###",
  "     #####"],
 ["    ############",
  "    #          ##",
  "    #  # #$$ $  #",
  "    #$ #$#  ## @#",
  "   ## ## # $ # ##",
  "   #   $ #$  # #",
  "   #   # $   # #",
  "   ## $ $   ## #",
  "   #  #  ##  $ #",
  "   #    ## $$# #",
  "######$$   #   #",
  "#....#  ########",
  "#.#... ##",
  "#....   #",
  "#....   #",
  "#########"],
 ["           #####",
  "          ##   ##",
  "         ##     #",
  "        ##  $$  #",
  "       ## $$  $ #",
  "       # $    $ #",
  "####   #   $$ #####",
  "#  ######## ##    #",
  "#.            $$$@#",
  "#.# ####### ##   ##",
  "#.# #######. #$ $##",
  "#........... #    #",
  "##############  $ #",
  "             ##  ##",
  "              ####"],
 ["     ########",
  "  ####      ######",
  "  #    ## $ $   @#",
  "  # ## ##$#$ $ $##",
  "### ......#  $$ ##",
  "#   ......#  #   #",
  "# # ......#$  $  #",
  "# #$...... $$# $ #",
  "#   ### ###$  $ ##",
  "###  $  $  $  $ #",
  "  #  $  $  $  $ #",
  "  ######   ######",
  "       #####"],
 ["        #######",
  "    #####  #  ####",
  "    #   #   $    #",
  " #### #$$ ## ##  #",
  "##      # #  ## ###",
  "#  ### $#$  $  $  #",
  "#...    # ##  #   #",
  "#...#    @ # ### ##",
  "#...#  ###  $  $  #",
  "######## ##   #   #",
  "          #########"],
 [" #####",
  " #   #",
  " # # #######",
  " #      $@######",
  " # $ ##$ ###   #",
  " # #### $    $ #",
  " # ##### #  #$ ####",
  "##  #### ##$      #",
  "#  $#  $  # ## ## #",
  "#         # #...# #",
  "######  ###  ...  #",
  "     #### # #...# #",
  "          # ### # #",
  "          #       #",
  "          #########"],
 ["##### ####",
  "#...# #  ####",
  "#...###  $  #",
  "#....## $  $###",
  "##....##   $  #",
  "###... ## $ $ #",
  "# ##    #  $  #",
  "#  ## # ### ####",
  "# $ # #$  $    #",
  "#  $ @ $    $  #",
  "#   # $ $$ $ ###",
  "#  ######  ###",
  "# ##    ####",
  "###"],
 ["##########",
  "#        ####",
  "# ###### #  ##",
  "# # $ $ $  $ #",
  "#       #$   #",
  "###$  $$#  ###",
  "  #  ## # $##",
  "  ##$#   $ @#",
  "   #  $ $ ###",
  "   # #   $  #",
  "   # ##   # #",
  "  ##  ##### #",
  "  #         #",
  "  #.......###",
  "  #.......#",
  "  #########"],
 ["         ####",
  " #########  ##",
  "##  $      $ #####",
  "#   ## ##   ##...#",
  "# #$$ $ $$#$##...#",
  "# #   @   #   ...#",
  "#  $# ###$$   ...#",
  "# $  $$  $ ##....#",
  "###$       #######",
  "  #  #######",
  "  ####"],
 ["  #########",
  "  #*.*#*.*#",
  "  #.*.*.*.#",
  "  #*.*.*.*#",
  "  #.*.*.*.#",
  "  #*.*.*.*#",
  "  ###   ###",
  "    #   #",
  "###### ######",
  "#           #",
  "# $ $ $ $ $ #",
  "## $ $ $ $ ##",
  " #$ $ $ $ $#",
  " #   $@$   #",
  " #  #####  #",
  " ####   ####"],
 ["       ####",
  "       #  ##",
  "       #   ##",
  "       # $$ ##",
  "     ###$  $ ##",
  "  ####    $   #",
  "###  # #####  #",
  "#    # #....$ #",
  "# #   $ ....# #",
  "#  $ # #.*..# #",
  "###  #### ### #",
  "  #### @$  ##$##",
  "     ### $     #",
  "       #  ##   #",
  "       #########"],
 ["      ############",
  "     ##..    #   #",
  "    ##..* $    $ #",
  "   ##..*.# # # $##",
  "   #..*.# # # $  #",
  "####...#  #    # #",
  "#  ## #          #",
  "# @$ $ ###  #   ##",
  "# $   $   # #   #",
  "###$$   # # # # #",
  "  #   $   # # #####",
  "  # $# #####      #",
  "  #$   #   #    # #",
  "  #  ###   ##     #",
  "  #  #      #    ##",
  "  ####      ######"]];
