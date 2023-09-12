# Boss Bar on/off
# bb-switch
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-08-23

# Variables Used Here:
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
execute if entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:bbon
execute unless entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:bboff
################