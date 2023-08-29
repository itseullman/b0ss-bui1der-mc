# Boss Bar on
# bb-on
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-08-23

# Variables Used Here
# --BTAG--
# --ARENA-RADIUS--

### Commands ###
bossbar set minecraft:--BTAG-- visible true
bossbar set minecraft:--BTAG-- players @a[distance=..--ARENA-RADIUS--]
execute store result bossbar minecraft:--BTAG-- value run data get entity @e[limit=1,tag=--BTAG--] Health
################