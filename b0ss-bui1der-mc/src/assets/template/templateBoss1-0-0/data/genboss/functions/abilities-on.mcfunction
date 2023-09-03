# abilities active during batt1e
# abilities-on
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-31-23

# Variables Used Here:
# --BTAG--
# --ABIL-X--
# --ABIL-X-TIMER--
 
### Commands ###
### --ABIL-X-- ###
# su-success needs /scoreboard objectives add --ABIL-X-- dummy
scoreboard players add --BTAG----ABIL-X--timer --BTAG----ABIL-X--timer 1
# actions #
###########
execute if score --BTAG----ABIL-X--timer --BTAG----ABIL-X--timer matches --ABIL-X-TIMER-- run scoreboard players set --BTAG----ABIL-X--timer --BTAG----ABIL-X--timer 0
# loot-success needs /scoreboard objectives remove --ABIL-X--
#######################
################