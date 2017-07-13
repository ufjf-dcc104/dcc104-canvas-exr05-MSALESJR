/**
 * Created by Marcus on 21/06/2017.
 */
function Player (){
    this.x = 100;
    this.y = 100;
    this.width  = 32;
    this.height = 32;
    this.img = null;
    this.tag = null;

    this.direcao = 0;
    this.vx = 90;
    this.vy = 90;

    this.angulo = 0;

    this.balas = 10;
    this.pontos = 0;
}

Player.prototype.init = function (img) {
    this.img = img;
}

Player.prototype.desenha = function (contexto) {
    contexto.save();
    contexto.translate(this.x, this.y);
    contexto.rotate(this.angulo * Math.PI / 180);
    contexto.drawImage(this.img,-this.width/2,-this.height/2);
    contexto.restore();
}


Player.prototype.mover = function (dt) {
    switch (this.direcao){
        case 4 :
            this.angulo = 0;
            this.x = this.x + this.vx * dt * ( -1 ) * 2.29;
            break;
        case 8 :
            this.angulo = 90;
            this.y = this.y + this.vy * dt * ( -1 ) * 2.29;
            break;
        case 6 :
            this.angulo = 0;
            this.x = this.x + this.vx * dt * ( +1 ) * 2.29;
            break;
        case 2 :
            this.angulo = 360;
            this.y = this.y + this.vy * dt * ( +1 ) * 2.29;
            break;
    }
};

Player.prototype.colisaoTiro = function (tiro, tag, player) {
    if(tiro.tag !== tag){
        if(tiro.x > this.x - 16 && tiro.x < this.x + 16 && tiro.y > this.y - 16 && tiro.y < this.y + 16){
            player.pontos += 1;
            return true;
        }
    }
    return false;
}