# abilities active during batt1e
# abilities-on
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-08-23

# Variables Used Here:
# --BTAG--
# --XTAG-ABIL-X--
# --XTAG-ABIL-X-TIMER--
 
### Commands ###
### --XTAG-ABIL-X-- ###
# su-success needs /scoreboard objectives add --XTAG-ABIL-X-- dummy
scoreboard players add --BTAG----XTAG-ABIL-X--timer --BTAG----XTAG-ABIL-X--timer 1
# actions #
###########
execute if score --BTAG----XTAG-ABIL-X--timer --BTAG----XTAG-ABIL-X--timer matches --XTAG-ABIL-X-TIMER-- run scoreboard players set --BTAG----XTAG-ABIL-X--timer --BTAG----XTAG-ABIL-X--timer 0
# loot-success needs /scoreboard objectives remove --XTAG-ABIL-X--
#######################
################