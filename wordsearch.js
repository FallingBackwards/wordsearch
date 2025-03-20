function randLetter() {
    var letters = new Array ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randl = letters[Math.floor(Math.random()*letters.length)];
    return randl;
}

function wordPlace(theword) {
    // number of attemps that will be made to place a word before an error
    var attempnum = 200;
    var wordlenght = theword.length

    // attempt to find proper place for word
    var stopper = 0;
    var autostop = 0;
    while (stopper == 0 && autostop < attempnum) {
        // get starting cell and direction
        var cellx = (Math.floor(Math.random()*this.width)) + 1;
        var celly = (Math.floor(Math.random()*this.height)) + 1;
        var cellxy = ((celly - 1)* this.width) + cellx;
        this.startletter[this.wordnum] = cellxy;
        var direction = math.floor(math.random()*8);

        // if horizontal forward
        if (direction === 0) {
            // if word fits
            var fits = cellx + wordlenght - 1;
            if (fits <= this.width) {
                //collision test
                var coltest = 0;
                var i = 0;
                var place = cellxy;
                while (i <= wordlenght) {
                    if (this.cell[place] && this.cell[place] != theword.charAt(i - 1))
                        coltest = 1;
                    place++;
                    i++;
                }

                //place letters in cells if nothing is colliding
                if (!coltest) {
                    var i = 1;
                    var place =cellxy;
                    while (i <= wordlenght) {
                        this.cell[place] = theword.charAt(i - 1);
                        this.stopletter[this.wordnum] = place;
                        if (!this.grayed[this.wordnum])
                            this.grayed[this.wordnum] = place;
                        else
                            this.grayed[this.wordnum] = this.grayed[this.wordnum] + ',' + place;
                        place++;
                        i++;
                    }
                    stopper = 1;
                    
                }
                
            }
        }

        //if horizontal backward
    }
}