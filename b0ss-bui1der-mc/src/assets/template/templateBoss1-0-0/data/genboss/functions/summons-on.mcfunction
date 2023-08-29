# On switch for summoning minions
# summons-on
# Author: Noob/iTyro
# Created: 03-04-20
# Updated: 08-10-23

# Variables Used Here:
# --BTAG--
# --XTAG--
# --XTAG-MOB--
# --XTAG-DATA--
# --XTAG-SPAWN-TIMER--
# --ARENA-RADIUS--

### Commands ###
scoreboard players add --XTAG--spawnTimer --XTAG--spawnTimer 1
execute if score --XTAG--spawnTimer --XTAG--spawnTimer matches --XTAG-SPAWN-TIMER-- run execute at @e[tag=--BTAG--] run summon --XTAG-MOB-- ~ ~1 ~ --XTAG-DATA--
execute if score --XTAG--spawnTimer --XTAG--spawnTimer matches --XTAG-SPAWN-TIMER-- run scoreboard players set --XTAG--spawnTimer --XTAG--spawnTimer 0
execute unless entity @a[distance=..--ARENA-RADIUS--,team=--BTAG--fight] run execute as @e[tag=--XTAG--,distance=..--ARENA-RADIUS--] run tp ~ ~-200 ~
################