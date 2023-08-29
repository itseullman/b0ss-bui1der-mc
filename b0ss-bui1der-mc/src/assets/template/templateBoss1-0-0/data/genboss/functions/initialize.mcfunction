# Initializes a boss with all things that need set within the server (permanent objs, bossbar, etc)
# initialize
# Author: Noob/iTyro
# Created: 08-13-20
# Updated: 08-09-23

# Variables Used Here:
# --BNAME--
# --BTAG--

### Commands ###
team add --BTAG--fight
scoreboard objectives add --BTAG--LootTimer dummy
bossbar add --BTAG-- [{"text":"["},{"text":"--BNAME--","color":"dark_purple","bold":true},{"text":" ]","color":"white","bold":false}]
bossbar set --BTAG-- max 1000
bossbar set --BTAG-- style notched_6
bossbar set --BTAG-- color pink
################