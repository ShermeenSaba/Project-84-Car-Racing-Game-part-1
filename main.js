canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 90;

background_image = "racing.jpg";
car_image = "car1.png";

car_x = 10;
car_y = 10;

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    car_img_tag = new Image();
    car_img_tag.onload = uploadRover;
    car_img_tag.src = car_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(car_img_tag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {


        console.log("up");
    }

    if (keyPressed == '40') {


        console.log("down");
    }

    if (keyPressed == '37') {


        console.log("left");
    }

    if (keyPressed == '39') {


        console.log("right");
    }


}
