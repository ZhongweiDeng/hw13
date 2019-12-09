class Car extends Rectangle {



    constructor(x, y, width, height, speed) {

        super(x, y, width, height);

        this.speed = speed;

    }



    show(){

        fill(231, 157, 76);

        rect(this.x, this.y, this.width, this.height);

    }
