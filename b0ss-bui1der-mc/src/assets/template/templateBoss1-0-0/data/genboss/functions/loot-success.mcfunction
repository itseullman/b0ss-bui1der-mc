# Starts up loot timer, which distributes at 5. Timer won't reset til next fight
# loot-success
# Author: Noob/iTyro
# Created 10-09-18
# Updated 08-09-23

# Variables Used Here:
# --BNAME--
# --BTAG--
# --ARENA-RADIUS--
# --LOOT-XP-LEVELS--
# --LOOT-BOX--

### Commands ###
scoreboard players add --BTAG--lootTimer --BTAG--lootTimer 1
execute if score --BTAG--lootTimer --BTAG--lootTimer matches 5 run tellraw @a[team=--BTAG--fight] {"text":"You have recieved --BNAME--'s Loot!"}
execute if score --BTAG--lootTimer --BTAG--lootTimer matches 5 run execute at @a[team=--BTAG--fight] run playsound minecraft:ui.toast.challenge_complete master @p ~ ~ ~ 100
execute if score --BTAG--lootTimer --BTAG--lootTimer matches 5 if entity @a[team=--BTAG--fight,distance=..--ARENA-RADIUS--] run tellraw @a {"text":"[ ","color":"white","bold":true,"extra":[{"text":"B0ss Battles ","color":"dark_purple","bold":true},{"text":"] ","color":"white","bold":true},{"selector":"@a[team=-BTAG-fight,distance=..--ARENA-RADIUS--]","color":"white","bold":false},{"text":" just defeated --BNAME--!","color":"light_purple","bold":false}]}

execute if score --BTAG--lootTimer --BTAG--lootTimer matches 5 run xp add @a[team=--BTAG--fight,distance=..--ARENA-RADIUS--] --LOOT-XP-LEVELS-- levels
execute if score --BTAG--lootTimer --BTAG--lootTimer matches 5 run give @a[team=--BTAG--fight,distance=..--ARENA-RADIUS--] --LOOT-BOX-- 1

scoreboard objectives remove --XTAG-ABIL-X--
scoreboard objectives remove --XTAG--spawnTimer
################