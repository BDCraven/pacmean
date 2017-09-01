function Wacka(poolsize, audiosrc) {
    this.poolsize = poolsize;
    this.current = 0;
    this.pool = new Array(poolsize);
    for (var i = 0; i < poolsize; i++) {
        this.pool[i] = new Audio(audiosrc);
    }
}

Wacka.prototype.play = function() {
   this.current = (this.current + 1) % this.poolsize;
   this.pool[this.current].play();
}
