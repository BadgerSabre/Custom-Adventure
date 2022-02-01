let firstAnswer = window.prompt('Do you levetate or sneak?')
switch(firstAnswer) {
    case 'levetate':
        window.prompt('You quickly float to the top of the walls.  There is no one here.  There are two seperate towers. Do you explore the right or left?')
            switch(secondAnswer) {
                case 'right':
                    window.prompt('You descend stairs into the throne room.  There is a red dragon glaring at you.  You see the stone under his front claw.  Do you cast fireball or ray of frost?')
                        switch(finalAnswer){
                            case 'fireball' :
                                window.alert('You really casted a fireball at a red dragon?  It has no affect, the dragon breathes fire and incinerates you.  Refresh to try again.')
                            break
                            case 'ray of frost' :
                                window.alert('Citrical hit! The spell pierces the dragons scales and hit it right in the heart.  The dragon collapses dead and the stone is yours!')
                        }
                break
                case 'left':
                    window.prompt('You descend stairs into the dungeon.  There is a suspicious man in a cell that calls out to you, "I know why you are here and I can help you obtain the stone. If only you would set me free." Do you set him free or let him rot?')
                break
            }
    break
    case 'sneak':
        window.prompt('You enter the crypt of the castle.  There is a horde of ghouls that notice you and charge you. Do you attempt to outrun them or cast control undead?')
            switch(secondAnswer) {
                case 'attempt to outrun':
                    window.alert('Are you crazy? The ghouls easily catch you and rip you to pieces.  Refresh to try again.')
                break
                case 'cast control undead':
                    window.prompt('The ghouls stop a few feet before you.  One points to a door at the end of a hallway. Do you follow the ghoul through the door or do you go back the way you came?')
                break
            }
    break
}
