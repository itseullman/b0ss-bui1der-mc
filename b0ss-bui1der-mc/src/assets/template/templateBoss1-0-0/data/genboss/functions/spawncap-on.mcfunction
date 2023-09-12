# On switch for spawn # caps
# spawncap-on
# Author: Noob/iTyro
# Created: 03-05-20
# Updated: 08-09-23

# Variables Used Here:
# --XTAG--
# --XTAG-SPAWN-CAP--
# --ARENA-RADIUS--

### Commands ###
### --XTAG-- ###
execute as @e[tag=--XTAG--,distance=..--ARENA-RADIUS--] run execute at @s run data merge entity @s {Tags:["--XTAG--"]}
execute as @e[tag=--XTAG--,distance=..--ARENA-RADIUS--,limit=--XTAG-SPAWN-CAP--,sort=random] run execute at @s run data merge entity @s {Tags:["--XTAG--","letlive"]}
tp @e[tag=!letlive,tag=--XTAG--,distance=..--ARENA-RADIUS--] ~ -200 ~
################
#################