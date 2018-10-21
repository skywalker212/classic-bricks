export function detectCollision(ball, gameObject){
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let topOfObject = gameObject.position.y;
    let leftOfObject = gameObject.position.x;
    let rightOfObject = gameObject.position.x+gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if(bottomOfBall>=topOfObject && topOfBall<=bottomOfObject && ball.position.x>=leftOfObject && ball.position.x+ball.size<=rightOfObject) return true;
    else return false;
}