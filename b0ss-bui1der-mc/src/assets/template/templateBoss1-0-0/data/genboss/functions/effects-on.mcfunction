# All active potion effects
# effects-on
# Author: Noob/iTyro
# Created: 10-09-18
# Updated: 08-09-23

# Variables Used Here
# --BTAG--
# --XTAG--
# --XTAG-EFFECT-X--
# --XTAG-EFFECT-X-RADIUS--
# --XTAG-EFFECT-X-EFFECT--
# --XTAG-EFFECT-X-PARTICLE--
# --ARENA-RADIUS--

### Commands ###
# Healing Boss when no players in arena
execute unless entity @a[distance=..--ARENA-RADIUS--,team=--BTAG--fight] run effect give @e[tag=--BTAG--,distance=..--ARENA-RADIUS--] minecraft:instant_damage 1 10 false

### --XTAG-EFFECT-X-- ###
execute at @e[tag=--XTAG--] run execute at @a[distance=..--XTAG-EFFECT-X-RADIUS--,team=--BTAG--fight] run particle --XTAG-EFFECT-X-PARTICLE-- ~ ~.5 ~ .5 -.5 .5 10 100 force
execute at @e[tag=--XTAG--] run effect give @a[distance=..--XTAG-EFFECT-X-RADIUS--,team=--BTAG--fight] --XTAG-EFFECT-X-EFFECT-- 1 0 false
#########################
################