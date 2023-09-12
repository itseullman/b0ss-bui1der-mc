# Start up success switch
# su-success
# Author: Noob
# Created: 10-09-18
# Updated: 08-09-23

# Variables Used Here:
# --BNAME--
# --BTAG--
# --BTAG-MOB--
# --BTAG-DATA--
# --ARENA-CENTER-X--
# --ARENA-CENTER-Y--
# --ARENA-CENTER-Z--
# --XTAG--
# --ABIL-X--

### Commands ###
tellraw @a {"text":"[ ","color":"white","bold":true,"extra":[{"text":"B0ss Batt1es ","color":"dark_purple","bold":true},{"text":"] ","color":"white","bold":true},{"selector":"@p","color":"light_purple","bold":false},{"text":" has summoned --BNAME--, wish them luck!","color":"light_purple","bold":false}]}
summon --BTAG-MOB-- --ARENA-CENTER-X-- --ARENA-CENTER-Y-- --ARENA-CENTER-Z-- --BTAG-DATA--
playsound minecraft:entity.wither.death master @a[team=--BTAG--fight] ~ ~ ~ 100 0

#scoreboard objectives add --ABIL-X-- dummy
### --XTAG-- ###
scoreboard objectives add --XTAG--spawnTimer dummy
################S
################
