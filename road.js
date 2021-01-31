class Road{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(roadImg1);
        this.body.scale=2.0;
    }
    display(){
        if(gamestate===end){
            this.body.destroy();
        }
    }
}