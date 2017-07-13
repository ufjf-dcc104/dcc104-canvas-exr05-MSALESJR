/**
 * Created by Marcus on 21/06/2017.
 */

function Tiro(){
    this.x = 200;
    this.y = 200;
    this.width = 10;
    this.height = 10;

    this.direcao = 0;
    this.vx = 300;
    this.vy = 300;

    this.tag = null;
}

Tiro.prototype.desenha = function (contexto) {
    contexto.save();
    contexto.translate(this.x, this.y);
    contexto.strokeStyle = 'red';
    contexto.strokeRect(0,0,-this.width/2,-this.height/2);
    contexto.restore();
}


Tiro.prototype.mover = function (dt) {
    switch (this.direcao){
        case 4 :
            this.x = this.x + this.vx * dt * ( -1 ) * 2.29;
            break;
        case 8 :
            this.y = this.y + this.vy * dt * ( -1 ) * 2.29;
            break;
        case 6 :
            this.x = this.x + this.vx * dt * ( +1 ) * 2.29;
            break;
        case 2 :
            this.y = this.y + this.vy * dt * ( +1 ) * 2.29;
            break;
    }
};