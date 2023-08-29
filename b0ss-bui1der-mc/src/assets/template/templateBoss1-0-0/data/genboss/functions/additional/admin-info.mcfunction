# debug info for admins
# admin-info
# Author: Noob/iTyro
# Created: 02-24-20
# Updated: 08-09-23

# Variables:
# --BNAME--
# --BTAG--
# --BTAG-MOB--
# --BTAG-DATA--
# --LOOT-BOX--
# --LOOT-XP-LEVELS--
# --XTAG--
# --XTAG-MOB--
# --XTAG-DATA--
# --XTAG-SPAWN-TIMER--
# --XTAG-SPAWN-CAP--
# --XTAG-ABIL-X--
# --XTAG-ABIL-X-TIMER--
# --XTAG-EFFECT-X--
# --XTAG-EFFECT-X-RADIUS--
# --XTAG-EFFECT-X-EFFECT--
# --XTAG-EFFECT-X-PARTICLE--
# --ARENA-CENTER-X--
# --ARENA-CENTER-Y--
# --ARENA-CENTER-Z--
# --ARENA-RADIUS--
# --ARENA-ENTER-X--
# --ARENA-ENTER-Y--
# --ARENA-ENTER-Z--
# --ARENA-ENTER-XR--
# --ARENA-ENTER-YR--
# --LOBBY-CENTER-X--
# --LOBBY-CENTER-Y--
# --LOBBY-CENTER-Z--
# --LOBBY-RADIUS--
# --LOBBY-ENTER-X--
# --LOBBY-ENTER-Y--
# --LOBBY-ENTER-Z--
# --LOBBY-ENTER-XR--
# --LOBBY-ENTER-YR--
# --ADDINFO--

### Commands ### 
tellraw @p ["",{"text":"### -BTAG- Info ###","color":"green"}]

tellraw @p "Boss Name:"
tellraw @p ["",{"text":"Title","color":"red"},{"text":" = "},{"text":"-BNAME-","color":"yellow"}]
 
tellraw @p "Boss Tag:"
tellraw @p ["",{"text":"Tag","color":"red"},{"text":" = "},{"text":"-BTAG-","color":"yellow"}]

tellraw @p "Minion Tags:"
tellraw @p ["",{"text":"Tag1","color":"red"},{"text":" = "},{"text":"-MTAG1-","color":"yellow"}]
tellraw @p ["",{"text":"Tag2","color":"red"},{"text":" = "},{"text":"-MTAG2-","color":"yellow"}]

tellraw @p "Fighters Identifier:"
tellraw @p ["",{"text":"Objective","color":"red"},{"text":" = "},{"text":"-BTAG-fight","color":"yellow"}]

tellraw @p "Boss Spawn:"
tellraw @p ["",{"text":"X","color":"red"},{"text":" = "},{"text":"-BTAG-SPAWNX","color":"yellow"}]
tellraw @p ["",{"text":"Y","color":"red"},{"text":" = "},{"text":"-BTAG-SPAWNY","color":"yellow"}]
tellraw @p ["",{"text":"Z","color":"red"},{"text":" = "},{"text":"-BTAG-SPAWNZ","color":"yellow"}]

tellraw @p "Lobby Location:"
tellraw @p ["",{"text":"X","color":"red"},{"text":" = "},{"text":"LOBBYX","color":"yellow"}]
tellraw @p ["",{"text":"Y","color":"red"},{"text":" = "},{"text":"LOBBYY","color":"yellow"}]
tellraw @p ["",{"text":"Z","color":"red"},{"text":" = "},{"text":"LOBBYZ","color":"yellow"}]

tellraw @p "Player Enter:"
tellraw @p ["",{"text":"X","color":"red"},{"text":" = "},{"text":"ENTERX","color":"yellow"}]
tellraw @p ["",{"text":"Y","color":"red"},{"text":" = "},{"text":"ENTERY","color":"yellow"}]
tellraw @p ["",{"text":"Z","color":"red"},{"text":" = "},{"text":"ENTERZ","color":"yellow"}]
tellraw @p ["",{"text":"Xrotate","color":"red"},{"text":" = "},{"text":"ENTERXR","color":"yellow"}]
tellraw @p ["",{"text":"Yrotate","color":"red"},{"text":" = "},{"text":"ENTERYR","color":"yellow"}]

tellraw @p "Spawn Caps:"
tellraw @p ["",{"text":"-MTAG1-","color":"red"},{"text":" = "},{"text":"-MTAG1-CAP","color":"yellow"}]
tellraw @p ["",{"text":"-MTAG2-","color":"red"},{"text":" = "},{"text":"-MTAG2-CAP","color":"yellow"}]

tellraw @p "Ability Objectives:"
tellraw @p ["",{"text":"abil-1","color":"red"},{"text":" = "},{"text":"-BTAG-abil-1","color":"yellow"}]
tellraw @p ["",{"text":"abil-2","color":"red"},{"text":" = "},{"text":"-BTAG-abil-2","color":"yellow"}]
tellraw @p ["",{"text":"abil-3","color":"red"},{"text":" = "},{"text":"-BTAG-abil-3","color":"yellow"}]
tellraw @p ["",{"text":"abil-4","color":"red"},{"text":" = "},{"text":"-BTAG-abil-4","color":"yellow"}]
tellraw @p ["",{"text":"abil-5","color":"red"},{"text":" = "},{"text":"-BTAG-abil-5","color":"yellow"}]

tellraw @p "Additional Info:"
tellraw @p ["",{"text":":","color":"red"},{"text":": "},{"text":"ADDINFO","color":"yellow"}]

tellraw @p ["",{"text":"### -BTAG- Info ###","color":"green"}]
################