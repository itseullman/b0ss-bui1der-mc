# On/off switch for summoning minions
# summons-switch
# Author: Noob/iTyro
# Created: 03-04-20
# Updated: 08-10-23

# Variables Used Here:
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
execute if entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:summons-on
execute unless entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:summons-off
################