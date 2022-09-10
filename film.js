const files = {
    a: new Audio('sound/La La Land.mp3'),
    b: new Audio('sound/INTERSTELLAR.mp3'),
    c: new Audio('sound/the Ring.mp3'),
    d: new Audio('sound/Pirates Of The Caribbean Theme Song.mp3'),
    e: new Audio('sound/The Godfather  Theme Song Slowed  Reverb.mp3')

}

    document.body.onkeydown = (e) => {
    switch(e.key) {
    case "l":
        files.a.play()
        files.b.pause()
        files.c.pause()
        files.d.pause()
          
    break
    case "i":
        files.b.play()
        files.a.pause()
        files.c.pause()
        files.d.pause()
        files.e.pause()
    break
    case "t":
        files.c.play()
        files.a.pause()
        files.b.pause()
        files.d.pause()
        files.e.pause()
    break
    case "p" :
        files.d.play() 
        files.a.pause()
        files.b.pause()
        files.c.pause()
        files.e.pause()
    break
    case "g" :
        files.e.play() 
        files.a.pause()
        files.b.pause()
        files.c.pause()
        files.d.pause()
         break
}
    }


  