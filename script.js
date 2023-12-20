let town = prompt('Enter a Christmas themed town name:')
let girl = prompt('Enter a girl name:')
let boy = prompt('Enter a boy name:')
let clothing = prompt('Enter a clothing article:')
let jewlery = prompt('Enter a jewlery piece:')






let story = `Once upon a time, in the cozy town of <span class="red">${town}</span>, the holiday spirit was in the air all year round. The streets were adorned with twinkling lights, and the sweet aroma of freshly baked cookies filled the air. In <span class="red">${town}</span>, everyday felt like a holiday. The townspeople would gather in the central square, singing cheerful carols and exchanging warm hugs. The local shops were filled with colorful decorations and delightful gifts, bringing joy to everyone who entered. During the winter season, the town transformed into a magical wonderland. Snowflakes danced gracefully from the sky, covering the rooftops and creating a picturesque scene. Families would gather around crackling fireplaces, sipping hot cocoa and sharing stories of love and laughter. 

<span class="red">${girl}</span> and <span class="red">${boy}</span> were getting ready for the big holiday gift exchange in town. They were both so excited to give each other perfect presents. <span class="red">${girl}</span> had been working on a special handmade <span class="red">${clothing}</span> for <span class="red">${boy}</span>, while <span class="red">${boy}</span> had been busy crafting a beautiful <span class="red">${jewlery}</span> for <span class="red">${girl}</span>. They could not wait to see the joy on each others faces when they opened their gifts. But, as luck would have it, there was a mix-up at the gift wrapping station in <span class="red">${town}</span>! The presents got all jumbled up, and <span class="red">${girl}</span> and <span class="red">${boy}</span> ended up with the wrong gifts. 

On the day of the gift exchange, <span class="red">${girl}</span> eagerly handed <span class="red">${boy}</span> the wrapped box, expecting him to open the <span class="red">${clothing}</span> she had lovingly made. But when <span class="red">${boy}</span> tore open the paper he found a shiny toy train instead! Confused, <span class="red">${boy}</span> looked at <span class="red">${girl}</span> and said “Uh, <span class="red">${girl}</span>, I think there has been a mix-up. This is a toy train, not a <span class="red">${clothing}</span>.” 

<span class="red">${girl}</span>’s eyes widened in a surprise as she unwrapped the <span class="red">${jewlery}</span> <span class="red">${boy}</span> had made for her. She laughed and said, “Oh no, <span class="red">${boy}</span>! Our gifts got switched! But hey, this <span class="red">${jewlery}</span> is absolutely stunning!” 

They both burst out into laughter, realizing that even though their gifts were mixed up, it was the thought and effort that truly mattered. They decided to embrace the mix-up and make the best of it. <span class="red">${girl}</span> wore the <span class="red">${jewlery}</span> proudly, and <span class="red">${boy}</span> proudly displayed the toy train on a shelf in his room. From that day forward, <span class="red">${girl}</span> and <span class="red">${boy}</span> always shared a good laugh whenever they saw the toy train or the <span class="red">${jewlery}</span>. It became a symbol of their friendship and the joy of unexpected surprises. 

And so, in <span class="red">${town}</span>, the gift mix-up became a heartwarming tale that reminded everyone that the true spirit of the holidays is not in the presents we receive, but in the love and laughter we share with those we care about.
`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}<p>`

