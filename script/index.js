//animation in canvas available
const animation_1 = document.getElementById('animation_1');
const animation_2 = document.getElementById('animation_2');

const sketch_1 = (sketch) => {
    //empty
    let dancingGirl = sketch.loadImage('src/img/canvas/girl_dancing.jpg'); let dx = 50; let dy = 100;
    let circle_img1 = sketch.loadImage('src/img/canvas/circle_img1.png'); let cix1 = 300; let ciy1 = 100;
    let circle_img2 = sketch.loadImage('src/img/canvas/circle_img2.png'); let cix2 = 25; let ciy2 = 300;
    let circle_img3 = sketch.loadImage('src/img/canvas/circle_img3.png'); let cix3 = 0; let ciy3 = 0;
    let movement = 0.5;
    let ctx = 300; let cty = 100;
    let ctx1 = 50; let cty1 = 300;
    let context;
    let ctx2 = 380; let cty2 = 370;

    sketch.setup = () => {
        sketch.createCanvas(500,500);
        context = sketch.canvas.getContext('2d');
    }

    sketch.draw = () => {
        sketch.background(255);
        sketch.image(dancingGirl, dx,dy,400,400);
        sketch.image(circle_img1,cix1,ciy1);
        sketch.image(circle_img2,cix2,ciy2);
        sketch.image(circle_img3,cix3,ciy3,260,260);
        sketch.noStroke();
        sketch.fill(104,90,209);
        sketch.circle(ctx,cty,50);
        sketch.fill(173, 227, 255);
        
        sketch.circle(ctx1,cty1,25);
        sketch.fill(255, 206, 83);
        sketch.circle(ctx2,cty2,35);
        if(ciy1 > 125 || ciy1 < 80){
            movement = movement * -1;
            
        } 

        ciy1 += movement;
        ciy2 += movement;
        ciy3 += movement;
    }

    sketch.mouseMoved = () => {

    }

}

const sketch_2 = (sketch) => {
    //empty
    let banner_base = sketch.loadImage('src/img/canvas/banner_base.png');
    let man_sostain = sketch.loadImage('src/img/canvas/man_sostain.png');

    let carrusel_1 = sketch.loadImage('src/img/canvas/carrusel_1.png');
    let carrusel_2 = sketch.loadImage('src/img/canvas/carrusel_2.png');
    let carrusel_3 = sketch.loadImage('src/img/canvas/carrusel_3.png');

    let carrusel_x = 10;
    let carrusel_y = -10;
    let carrusel_movement = -1;

    let positionX = animation_2.getBoundingClientRect().x;
    let positionY = animation_2.getBoundingClientRect().y;


    sketch.setup = () => {
        sketch.createCanvas(500,600);
    }

    sketch.draw = () => {
        sketch.background(255);
        
        sketch.image(carrusel_1,carrusel_x,carrusel_y);
        sketch.image(carrusel_2,carrusel_x,carrusel_y+240);
        sketch.image(carrusel_3,carrusel_x,carrusel_y+480);
        sketch.image(banner_base,0,0);
        sketch.fill(255);
        sketch.noStroke();
        sketch.rect(0,240,500,500);
        sketch.image(man_sostain,0,0,500,420);
        
        if( carrusel_y <= -480  || carrusel_y >= 0){
            carrusel_movement *= -1;
            console.log(carrusel_movement)
        }

         carrusel_y += carrusel_movement;
    }


}

let instanceAnimation_1 = new p5(sketch_1,animation_1);
let instanceAnimation_2 = new p5(sketch_2,animation_2);