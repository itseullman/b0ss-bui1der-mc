# Switch for spawn # caps
# spawncap-switch
# Author: Noob
# Created: 03-07-20
# Updated: 08-09-23

# Varaibles Used Here:
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
execute if entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:spawncap-on
execute unless entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:spawncap-off
################