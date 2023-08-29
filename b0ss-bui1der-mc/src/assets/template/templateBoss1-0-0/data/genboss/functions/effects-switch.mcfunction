# Switch for potion effects
# effects-switch
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-09-23

# Variables Used Here
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
execute if entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:effects-on
execute unless entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:effects-off
################