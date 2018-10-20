export default class Ball{
    constructor(game){
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById("img_ball");
        this.speed = {
            x: 4,
            y:4
        };
        this.position = {
            x:10,
            y:10
        };
        this.size = 16;
    }

    draw(ctx){
        ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }

    update(dt){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if(this.position.x+this.size>this.gameWidth || this.position.x < 0) this.speed.x = - this.speed.x;
        if(this.position.y+this.size>this.gameHeight || this.position.y < 0) this.speed.y = - this.speed.y;

        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let leftOfBall = this.position.x;
        let rightOfBall = this.position.x+this.size;
        let posOfPaddle = this.game.paddle.position.x;
        let widthOfPaddle = this.game.paddle.width;

        if(bottomOfBall>=topOfPaddle && (rightOfBall>posOfPaddle && leftOfBall<posOfPaddle+widthOfPaddle)){
            this.speed.y = - this.speed.y;
            this.position.y = this.game.paddle.position.y-this.size;
        }
    }
}