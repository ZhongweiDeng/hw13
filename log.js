class Log extends Rectangle {



    constructor(x, y, width, height, speed) {

        super(x, y, width, height);

        this.speed = speed;

    }



    show(){

        fill(142, 103, 81);

        rect(this.x, this.y, this.width, this.height);

    }
