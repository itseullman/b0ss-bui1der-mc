# All active potion effects
# effects-on
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-31-23

# Variables Used Here
# --BTAG--
# --XTAG--
# --EFFECT-X--
# --EFFECT-X-RADIUS--
# --EFFECT-X-EFFECT--
# --EFFECT-X-PARTICLE--
# --ARENA-RADIUS--

### Commands ###
# Healing Boss when no players in arena
execute unless entity @a[distance=..--ARENA-RADIUS--,team=--BTAG--fight] run effect give @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] minecraft:instant_damage 1 10 false

### --EFFECT-X-- ###
execute at @e[tag=--XTAG--] run execute at @a[distance=..--EFFECT-X-RADIUS--,team=--BTAG--fight] run particle --EFFECT-X-PARTICLE-- ~ ~.5 ~ .5 -.5 .5 10 100 force
execute at @e[tag=--XTAG--] run effect give @a[distance=..--EFFECT-X-RADIUS--,team=--BTAG--fight] --EFFECT-X-EFFECT-- 1 0 false
####################
################