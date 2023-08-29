# Boss abilities switch
# abilities-switch
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-08-23

# Variables Used Here:
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
execute if entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:abilities-on
execute unless entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:abilities-off
################