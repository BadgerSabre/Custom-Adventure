let firstAnswer = window.prompt('Do you head left or right?')
switch(firstAnswer) {
    case 'left':
       let secondAnswer = window.prompt(`You come across a stray cat. 
        It scampers off down a small hole, just large enough for you to crawl through. 
        Do you follow it, or continue on your path?`)
            switch(secondAnswer) {
                case 'follow':
                    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm  blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
                        switch(thirdAnswer) {
                            case 'stay':
                                window.alert(`You live happily amongst the cats for the rest of your days.`)
                            break
                            case 'spread the word':
                                window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
                            break
                        }
                break
                case 'continue':
                    let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
                        switch(thirdAnswer){
                            case 'ladder':
                                window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
                            break
                            case 'staircase':
                                window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
                            break

                        }
            }
    break
    case 'right':
        window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?')
    break
}
