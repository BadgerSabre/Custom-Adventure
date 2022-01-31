let firstAnswer = window.prompt('Do you levetate or sneak?')
switch(firstAnswer) {
    case 'levetate':
        window.prompt('You quickly float to the top of the walls.  There is no one here.  There are two seperate towers. Do you explore the right or left?')
            switch(secondAnswer) {
                case 'right' :
                    window.prompt('You descend stairs into the throne room.  There is a red dragon glaring at you.  You see the stone under his front claw.  Do you cast fireball or ray of frost?')
                break
                case 'left' :
                    window.prompt('You descend stairs into the dungeon.  There is a suspicious man in a cell that calls out to you, "I know why you are here and I can help you obtain the stone. If only you would set me free." Do you set him free or let him rot?')
            }
    break
    case 'sneak':
        window.prompt('You enter the crypt of the castle.  There is a horde of ghouls that notice you and charge you. Do you attempt to outrun them or cast control undead?')
}
