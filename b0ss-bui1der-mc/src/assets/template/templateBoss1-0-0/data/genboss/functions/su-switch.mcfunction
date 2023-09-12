# Start up success/fail switch
# su-switch
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-10-23

# Variables Used Here:
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
execute if entity @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] run function --BTAG--:su-fail
execute unless entity @e[tag=--BTAG--,distance=..--ARENA-RAIUS--] run function --BTAG--:su-success
################